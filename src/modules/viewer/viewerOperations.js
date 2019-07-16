import * as actions from './viewerActions';
import { viewerServices } from '.';
import Api from '../../api/api';

export const fetchViewer = () => async (dispatch) => {
  try {
    dispatch(actions.fetchViewer.start());
    const res = await Api.fetchViewer();
    const viewerWithStyle = viewerServices.getRandomColor(res.data);
    dispatch(actions.fetchViewer.success(viewerWithStyle));
  } catch (err) {
    dispatch(actions.fetchViewer.error(err));
  }
};

export const changeUserInfo = (user) => async (dispatch) => {
  try {
    dispatch(actions.changeUserInfo.start());
    const res = await Api.fetchViewer(user);
    dispatch(actions.changeUserInfo.success(res.data));
  } catch (err) {
    dispatch(actions.changeUserInfo.error(err));
  }
};

export const addToLike = (id) => (dispatch) => {
  dispatch(actions.addToLike.start());
  dispatch(actions.addToLike.success(id));
};

export const removeFromLike = (id) => (dispatch) => {
  dispatch(actions.removeFromLike.start());
  dispatch(actions.removeFromLike.success(id));
};
