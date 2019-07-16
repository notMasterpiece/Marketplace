import { normalize } from 'normalizr';
import * as actions from './chatActions';
import Api from '../../api/api';
import { Chat, ChatList } from '../../api/shemas';

export const createChat = (productId) => async (dispatch) => {
  try {
    dispatch(actions.createChat.start());
    const res = await Api.createChat(productId);
    const { result, entities } = normalize(res.data, Chat);
    dispatch(actions.createChat.success({ result, entities }));
    return result;
  } catch (err) {
    dispatch(actions.createChat.error());
  }
};

export const fetchChats = () => async (dispatch) => {
  try {
    dispatch(actions.fetchChats.start());
    const res = await Api.fetchChats();
    const { result, entities } = normalize(res.data, ChatList);
    dispatch(actions.fetchChats.success({ result, entities }));
  } catch (err) {
    dispatch(actions.fetchChats.error());
  }
};
