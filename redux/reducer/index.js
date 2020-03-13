import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
    REMOVE_USER,
    SET_USER,
    SHOW_LOGIN_MODAL
} from '../actions';
const { SHOW_ALL, SHOW_MODAL, USERINFO } = VisibilityFilters;
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
        return action.filter
        default:
        return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

function userinfo(state = USERINFO, action) {
    switch (action.type) {
        case SET_USER:
            return action.userinfo;
        case REMOVE_USER:
            return action.userinfo;
        default:
        return state
    }
}
function loginModal (state = SHOW_MODAL, action) {
    switch (action.type) {
        case SHOW_LOGIN_MODAL:
            return action.bollean;
        default:
        return state
    }
}
const reducers = combineReducers({
    visibilityFilter,
    todos,
    userinfo,
    loginModal
})

export default reducers;
