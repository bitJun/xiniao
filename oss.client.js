const OSS = require('ali-oss');
const util = require('util');
const fs = require('fs');
const path = require('path');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const stat = util.promisify(fs.stat);

class OssClient {
  constructor() {
    this.client = new OSS({
      region: 'oss-cn-hangzhou-internal',
      accessKeyId: 'LTAIvB9iYOUYxb8Z', // process.env.ACCESSKEYID,
      accessKeySecret: '2Iq7nqjZr2KJvNrp7KQyDtP8UWsiUu', // process.env.ACCESSKEYSECRET,
      bucket: process.env.NODE_ENV === 'production' ? 'zfzstatic' : 'zfzstaticdev', // process.env.BUCKET,
    });
  }

  async listBuckets() {
    try {
      return await this.client.listBuckets();
    } catch (err) {
      console.log(err);
    }
  }

  async list() {
    try {
      return await this.client.list({
        'max-keys': 5,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async putStream(dir, ossDir = '/', fileName) {
    try {
      const stream = fs.createReadStream(path.resolve(dir, fileName));
      return await this.client.putStream(ossDir + fileName, stream);
    } catch (e) {
      console.log(e);
    }
  }


  async putDir(dir, ossDir) {
    let files;
    try {
      files = await readdir(dir);
    } catch (e) {
      console.log(`【当前目录不存在】 -- ${dir} --`);
      return undefined;
    }

    for (const i in files) {
      const state = await stat(`${dir}/${files[i]}`);
      if (state.isDirectory()) {
        await this.putDir(`${dir}/${files[i]}`, `${ossDir}/${files[i]}`);
      } else {
        await this.putStream(dir, `${ossDir}/`, files[i]);
      }
    }
  }

  async readBuildId() {
    try {
      return await readFile(path.resolve(__dirname, './.next/BUILD_ID'), { encoding: 'utf-8' });
    } catch (e) {
      console.debug('没有当前文件BUILD_ID');
    }
  }

  async findCommonsCss(dir, ossDir) {
    const reg = /^commons.([\w]{8}(.chunk)?.css)/;
    let files;
    try {
      files = await readdir(dir);
      for (const i in files) {
        const state = await stat(`./.next/${files[i]}`);
        if (!state.isDirectory() && reg.test(files[i])) {
          await this.putStream(dir, ossDir, files[i]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async upload() {
    try {
      const buildId = await this.readBuildId();
      await this.findCommonsCss(path.resolve(__dirname, '.next/'), 'zfz-m/_next/');
      await this.putDir(path.resolve(__dirname, '.next/static/'), 'zfz-m/_next/static');
    } catch (e) {
      console.log('【上传异常请重试】', e);
    }
  }
}

new OssClient().upload()
  .then(() => {

  })
  .catch((error) => {
    console.log('上传异常', error);
  });
