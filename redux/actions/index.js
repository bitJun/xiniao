export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_MODAL: false,
    USERINFO: {}
}

/*
 * action 创建函数
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function setUserInfo (userinfo) {
    return { type: SET_USER, userinfo}
}

export function removeUserInfo (userinfo) {
    return { type: REMOVE_USER, userinfo }
}

export function showlogin (bollean = false) {
    return { type: SHOW_LOGIN_MODAL, bollean }
}
