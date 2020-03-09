const host =
  process.env.ENV_NODE === 'production'
    ? 'http://allin.lkker.cn'
    : process.env.ENV_NODE === 'test'
    ? 'http://allin.lkker.cn'
    : 'http://30.40.31.142:6009';
const env = process.env.NODE_ENV;

export { host, env };
