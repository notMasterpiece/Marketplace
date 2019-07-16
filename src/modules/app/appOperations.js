import * as actions from './appActions';
import Api from '../../api/api';
import SocketApi from '../../api/SocketApi';

import { fetchViewer } from '../viewer/viewerOperations';
import { handleMessageRealTime } from '../message/messageOperations';

export const subscribeToSockets = () => async dispatch => {
  SocketApi.handleMessage(message => dispatch(handleMessageRealTime(message)));
};

export const init = () => async dispatch => {
  try {
    dispatch(actions.initialization.start());
    Api.init();
    await dispatch(fetchViewer());
    dispatch(actions.initialization.success());
    dispatch(subscribeToSockets());
  } catch (err) {
    dispatch(actions.initialization.error());
  }
};