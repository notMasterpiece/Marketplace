import { normalize } from 'normalizr';
import * as actions from './profileActions';
import Api from '../../api/api';
import { User, ProductList } from '../../api/shemas';
import { viewerServices } from '../viewer';

export const getUserInfo = (id) => async (dispatch) => {
  try {
    dispatch(actions.getUserInfo.start());
    const user = await Api.getProfileById(id);
    const userWithStyle = viewerServices.getRandomColor(user.data);
    const { result, entities } = normalize(userWithStyle, User);
    dispatch(actions.getUserInfo.success({ result, entities }));
  } catch (err) {
    dispatch(actions.getUserInfo.error(err));
  }
};

export const getUserProducts = (id) => async (dispatch) => {
  try {
    dispatch(actions.getUserProducts.start());
    const products = await Api.getProfileProducts(id);
    const { result, entities } = normalize(products.data.list, ProductList);
    dispatch(actions.getUserProducts.success({ result, entities }));
  } catch (err) {
    dispatch(actions.getUserProducts.error(err));
  }
};
