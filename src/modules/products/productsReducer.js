import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  product: {
    isLoading: false,
    isError: false,
    error: null,
  },
  addNewProduct: {
    product: null,
    isLoading: true,
    isError: false,
    error: null,
  },
  loadProductPhoto: {
    photo: null,
    isLoading: false,
    isError: false,
    error: null,
  },
  saved: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
};


export default handleActions({
  [actions.fetchLatest.start]: state => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: true,
      isError: false,
      error: null,
    },
  }),
  [actions.fetchLatest.success]: (state, action) => ({
    ...state,
    latest: {
      ...state.latest,
      isLoading: false,
      items: action.payload.result,
    },
  }),
  [actions.fetchLatest.error]: (state, actions) => ({
    ...state,
    latest: {
      ...state.latest,
      items: [],
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


  [actions.getProductById.start]: state => ({
    ...state,
    product: {
      ...state.product,
      isLoading: true,
      isError: false,
      error: null,
    },
  }),
  [actions.getProductById.success]: (state) => ({
    ...state,
    product: {
      ...state.product,
      isLoading: false,
    },
  }),
  [actions.getProductById.error]: (state, actions) => ({
    ...state,
    product: {
      ...state.product,
      items: [],
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


  [actions.saveProduct.start]: (state) => ({
    ...state,
  }),
  [actions.saveProduct.success]: (state) => ({
    ...state,
  }),
  [actions.saveProduct.error]: (state, actions) => ({
    ...state,
    product: {
      ...state.product,
      items: [],
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


  [actions.unSaveProduct.start]: (state, action) => {

    const {productId} = action.payload;
    const filtered = state.saved.items.filter(item => item !== productId);

    return ({
      ...state,
      saved: {
        items: filtered,
      },
    })

  },

  [actions.unSaveProduct.success]: (state) => ({
    ...state,
  }),

  [actions.unSaveProduct.error]: (state, actions) => ({
    ...state,
    product: {
      ...state.product,
      items: [],
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


  [actions.addNewProduct.start]: state => ({
    ...state,
    addNewProduct: {
      ...state.addNewProduct,
      isLoading: true,
      isError: false,
      error: null,
    },
  }),
  [actions.addNewProduct.success]: (state, action) => ({
    ...state,
    addNewProduct: {
      ...state.addNewProduct,
      isLoading: false,
      product: action.payload,
    },
  }),
  [actions.addNewProduct.error]: (state, actions) => ({
    ...state,
    addNewProduct: {
      ...state.addNewProduct,
      product: null,
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


  [actions.loadProductPhoto.start]: state => ({
    ...state,
    loadProductPhoto: {
      ...state.loadProductPhoto,
      isLoading: true,
      isError: false,
      error: null,
    },
  }),
  [actions.loadProductPhoto.success]: (state, action) => ({
    ...state,
    loadProductPhoto: {
      ...state.loadProductPhoto,
      isLoading: false,
      photo: action.payload,
    },
  }),
  [actions.loadProductPhoto.error]: (state, actions) => ({
    ...state,
    loadProductPhoto: {
      ...state.loadProductPhoto,
      photo: [],
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


  [actions.fetchSavedProduct.start]: state => ({
    ...state,
    saved: {
      ...state.saved,
      isLoading: true,
      isError: false,
      error: null,
    },
  }),
  [actions.fetchSavedProduct.success]: (state, action) => ({
    ...state,
    saved: {
      ...state.saved,
      isLoading: false,
      items: action.payload.result,
    },
  }),
  [actions.fetchSavedProduct.error]: (state, actions) => ({
    ...state,
    saved: {
      ...state.saved,
      items: [],
      isLoading: false,
      isError: true,
      error: actions.payload,
    },
  }),


}, INITIAL_STATE);
