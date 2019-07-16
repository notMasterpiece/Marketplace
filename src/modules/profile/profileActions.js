import { createAsyncActions } from '@letapp/redux-actions';

export const getUserInfo = createAsyncActions('profile/GET_USER_INFO');
export const getUserProducts = createAsyncActions('profile/GET_USER_PRODUCTS');