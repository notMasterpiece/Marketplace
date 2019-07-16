import { createAsyncActions } from '@letapp/redux-actions';

export const fetchLatest = createAsyncActions('products/FETCH_LATEST');
export const getProductById = createAsyncActions('products/GET_PRODUCT_BY_ID');
export const addNewProduct = createAsyncActions('products/ADD_NEW_PRODUCT');
export const loadProductPhoto = createAsyncActions('products/LOAD_PRODUCT_PHOTO');
export const saveProduct = createAsyncActions('products/SAVE_PRODUCTS');
export const unSaveProduct = createAsyncActions('products/UN_SAVE_PRODUCTS');
export const fetchSavedProduct = createAsyncActions('products/FETCH_SAVED_PRODDUCT');