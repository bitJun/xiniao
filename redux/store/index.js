import { createStore } from 'redux';
import reducers from '../reducer';
import { setUserInfo } from '../actions';
const store = createStore(reducers);
let token = null;
let user = {};
if (typeof window == 'object') {
    token = window.localStorage.getItem('token');

    if (window.localStorage.getItem('userinfo')) {
        user = JSON.parse(window.localStorage.getItem('userinfo'));
        store.dispatch(setUserInfo(user))
    }
}
export default store;
