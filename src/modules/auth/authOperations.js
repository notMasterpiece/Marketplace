import * as actions from './authActions';
import Api from '../../api/api';
import { fetchViewer } from '../viewer/viewerOperations';
import { routes } from '../../routes';

export const userLogin = (user, history, state) => async dispatch => {
  try {
    dispatch(actions.login.start());
    const res = await Api.loginUser(user);
    const { viewer, token } = res.data;
    Api.setToken(token);
    dispatch(actions.login.success(viewer));
    await dispatch(fetchViewer());

    if (state.fromNewProduct) {
      return history.push(routes.productAdd);
    }
    history.push(routes.home);
  } catch (err) {
    const error = err.response ? err.response.data.error : 'error';
    dispatch(actions.login.error(error));
  }
};


export const userRegister = (user, history) => async dispatch => {
  try {
    dispatch(actions.register.start());
    const res = await Api.registerUser(user);
    const { viewer, token } = res.data;
    Api.setToken(token);
    dispatch(actions.register.success(viewer));
    await dispatch(fetchViewer());
    history.push(routes.home);
  } catch (err) {
    const error = err.response ? err.response.data.error : 'error';
    dispatch(actions.register.error(error));
  }
};


export const logout = () => async dispatch => {
  try {
    dispatch(actions.logout.start());
    dispatch(actions.logout.success());
    Api.logoutUser();
    await dispatch(fetchViewer());
  } catch (err) {
    dispatch(actions.logout.error(err));
  }
};