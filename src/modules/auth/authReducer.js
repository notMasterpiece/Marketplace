import {handleActions} from '@letapp/redux-actions';
import * as actions from './authActions';

const INITIAL_STATE = {
    login: {
        isLoading: false,
        isError: false,
        error: null
    },
    register: {
        isLoading: false,
        isError: false,
        error: null
    },
    logout: {
        isLoading: false,
        isError: false,
        error: null
    }
};


export default handleActions({
    [actions.login.start] : state => ({
        ...state,
        login: {
            ...state.login,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.login.success] : state => ({
        ...state,
        login: {
            ...state.login,
            isLoading: false
        }
    }),
    [actions.login.error] : (state, actions) => ({
        ...state,
        login: {
            ...state.login,
            isLoading: false,
            isError: true,
            error: actions.payload
        }
    }),

    [actions.register.start] : state => ({
        ...state,
        register: {
            ...state.register,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.register.success] : state => ({
        ...state,
        register: {
            ...state.register,
            isLoading: false,
        }
    }),
    [actions.register.error] : (state, actions) => ({
        ...state,
        register: {
            ...state.register,
            isLoading: false,
            isError: true,
            error: actions.payload
        }
    }),
    [actions.logout.start] : state => ({
        ...state,
        logout: {
            ...state.logout,
            isLoading: true,
            isError: false,
            error: null
        }
    }),
    [actions.logout.success] : state => ({
        ...state,
        logout: {
            ...state.logout,
            isLoading: false,
        }
    }),
    [actions.logout.error] : (state, actions) => ({
        ...state,
        logout: {
            ...state.logout,
            isLoading: false,
            isError: true,
            error: actions.payload
        }
    }),
}, INITIAL_STATE);
