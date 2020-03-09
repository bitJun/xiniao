import axios from 'axios';
// import api from './constants';
import Router from 'next/router';
const api = {
    baseURL: 'https://www.xiniaogongkao.com'
    // baseURL: ''
}

axios.defaults.timeout = 300000;
axios.defaults.maxContentLength = 20 * 1024 * 1024;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = api.baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [
    function(data) {
        let ret = '';
        for (let it in data) {
            if (data[it]) {
                ret +=
                encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
        }
        return ret;
    }
];
/**
 * 请求拦截
 */
axios.interceptors.request.use(
    config => {
        if (
            typeof window === 'object' &&
            window.localStorage &&
            window.localStorage.getItem('token')
        ) {
            config.headers.token = `${window.localStorage.getItem('token')}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

/**
 * 响应拦截&错误处理 暂不处理
 */
axios.interceptors.response.use(response => {
    console.log('caonima', response);
    if (response.code) {
        if (response.code === 201 || response.code === 202 || response.code === 203) {
            Router.replace({
                pathname: `/`
            });
            window.localStorage.removeItem('token');
            return Promise.reject('请先登录');
        } else {
            return response;
        }
    } else {
        const res = response.data;
        if (res.code === 201 || res.code === 202 || res.code === 203) {
            Router.replace({
                pathname: `/`
            });
            window.localStorage.removeItem('token');
            return Promise.reject('请先登录');
        } else {
            return res;
        }
    }
});
export default axios;
