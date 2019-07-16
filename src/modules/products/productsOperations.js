import * as actions from './productsActions';
import { viewerServices } from '../viewer';
import Api from '../../api/api';

import { normalize } from 'normalizr';
import { ProductList, Product } from '../../api/shemas';

export const fetchLatest = () => async (dispatch) => {
  try {
    dispatch(actions.fetchLatest.start());
    const res = await Api.fetchLatestProducts();

    const { result, entities } = normalize(res.data, ProductList);
    dispatch(actions.fetchLatest.success({ result, entities }));

  } catch (err) {
    dispatch(actions.fetchLatest.error(err));
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    dispatch(actions.getProductById.start());
    const res = await Api.getProductById(id);

    const { entities } = normalize(
      viewerServices.getRandomColor(res.data),
      Product,
    );
    dispatch(actions.getProductById.success({ entities }));
  } catch (err) {
    dispatch(actions.getProductById.error(err));
  }
};

export const addNewProduct = (product, history) => async dispatch => {
  try {
    dispatch(actions.addNewProduct.start());
    const res = await Api.addNewProduct(product);
    dispatch(actions.addNewProduct.success(res.data));
    history.push(`/products/${res.data.id}`);
  } catch (err) {
    dispatch(actions.addNewProduct.error(err));
  }
};


export const loadProductPhoto = photo => async dispatch => {
  try {
    dispatch(actions.loadProductPhoto.start());
    const res = await Api.loadProductPhoto(photo);
    dispatch(actions.loadProductPhoto.success(res.data));
  } catch (err) {
    dispatch(actions.loadProductPhoto.error(err));
  }
};

export const saveProduct = productId => async (dispatch, getState) => {
  try {
    dispatch(actions.saveProduct.start({ productId }));

    await Api.saveProduct(productId);
    // const {entities} = normalize(res.data, Product);
    dispatch(actions.saveProduct.success());
  } catch (err) {
    const msg = err.response.data.error;
    dispatch(actions.saveProduct.error(msg));
  }
};

export const unSaveProduct = productId => async dispatch => {
  try {
    dispatch(actions.unSaveProduct.start({ productId }));
    await Api.unSaveProduct(productId);

    // const {entities} = normalize(res.data, Product);
    dispatch(actions.unSaveProduct.success());
  } catch (err) {
    console.log(err);
    dispatch(actions.unSaveProduct.error(err));
  }
};


export const fetchSavedProduct = () => async dispatch => {
  try {
    dispatch(actions.fetchSavedProduct.start());
    const res = await Api.fetchSavedProduct();
    const { result, entities } = normalize(res.data, ProductList);
    dispatch(actions.fetchSavedProduct.success({ result, entities }));
  } catch (err) {
    dispatch(actions.fetchSavedProduct.error(err));
  }
};
