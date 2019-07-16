import { createAsyncActions } from '@letapp/redux-actions';

export const fetchViewer = createAsyncActions('viewer/FETCH_VIEWER');
export const addToLike = createAsyncActions('viewer/ADD_TO_LIKE');
export const removeFromLike = createAsyncActions('viewer/REMOVE_FROM_LIKE');
export const changeUserInfo = createAsyncActions('viewer/CHANGE_USER_INFO');