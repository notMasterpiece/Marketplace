import {handleActions} from '@letapp/redux-actions';
import * as actions from './viewerActions';

const INITIAL_STATE = {
    profile: null,
    isLoading: false,
    isError: false,
    error: null,
    like: []
};


export default handleActions({
    [actions.fetchViewer.start] : state => ({
        ...state,
        isLoading: true,
        isError: false,
        error: null
    }),
    [actions.fetchViewer.success] : (state, action) => ({
        ...state,
        isLoading: false,
        profile: action.payload
    }),
    [actions.fetchViewer.error] : (state, action) => ({
        ...state,
        profile: null,
        isLoading: false,
        isError: true,
        error: action.payload.error
    }),


    [actions.changeUserInfo.start] : state => ({
        ...state,
        isLoading: true,
        isError: false,
        error: null
    }),
    [actions.changeUserInfo.success] : (state, action) => ({
        ...state,
        isLoading: false,
        profile: action.payload
    }),
    [actions.changeUserInfo.error] : (state, action) => ({
        ...state,
        profile: null,
        isLoading: false,
        isError: true,
        error: action.payload.error
    }),



    [actions.addToLike.start] : state => ({
        ...state,
        isLoading: true,
        isError: false,
        error: null
    }),
    [actions.addToLike.success] : (state, action) => ({
        ...state,
        isLoading: false,
        like: [...state.like, action.payload]
    }),

    [actions.removeFromLike.start] : state => ({
        ...state,
        isLoading: true,
        isError: false,
        error: null
    }),
    [actions.removeFromLike.success] : (state, action) => ({
        ...state,
        isLoading: false,
        like: state.like.filter(l => l !== action.payload)
    }),

}, INITIAL_STATE);
