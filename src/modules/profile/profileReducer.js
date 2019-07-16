import { handleActions } from '@letapp/redux-actions';
import * as actions from './profileActions';

const INITIAL_STATE = {
  products: [],
  user: {},
  isLoading: false,
  isError: false,
  error: null,
};

export default handleActions({
  [actions.getUserInfo.start]: state => ({
    ...state,
    isLoading: true,
    isError: false,
    error: null,
  }),
  [actions.getUserInfo.success]: (state, action) => ({
    ...state,
    isLoading: false,
    user: action.payload.result,
  }),
  [actions.getUserInfo.error]: (state, actions) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: actions.payload,
  }),

  [actions.getUserProducts.start]: state => ({
    ...state,
    isLoading: true,
    isError: false,
    error: null,
  }),
  [actions.getUserProducts.success]: (state, action) => ({
    ...state,
    isLoading: false,
    products: action.payload.result,
  }),
  [actions.getUserProducts.error]: (state, actions) => ({
    ...state,
    isLoading: false,
    isError: true,
    error: actions.payload,
  }),

}, INITIAL_STATE);
