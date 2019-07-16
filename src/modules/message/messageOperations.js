import { normalize } from 'normalizr';
import * as actions from './messageActions';
import Api from '../../api/api';
import { Message, MessageList } from '../../api/shemas';
import { createMessage } from './messageCreators';

export const sendMessage = (chatId, text) => async (dispatch, getState) => {
  const state = getState();
  const ownerId = state.viewer.profile.id;
  const oldMessage = createMessage({ text, chatId, ownerId });
  try {
    dispatch(
      actions.sendMessage.start({
        chatId,
        ...normalize(oldMessage, Message),
      }),
    );
    const res = await Api.sendMessage(chatId, text);

    const { result, entities } = normalize(res.data, Message);

    dispatch(
      actions.sendMessage.success({
        oldMessageId: oldMessage.id,
        result,
        entities,
        chatId,
      }),
    );
  } catch (err) {
    dispatch(actions.sendMessage.error());
  }
};

export const fetchMessages = (chatId) => async (dispatch) => {
  try {
    dispatch(actions.fetchMessages.start());
    const res = await Api.fetchMessages(chatId);

    const { result, entities } = normalize(res.data, MessageList);
    dispatch(actions.fetchMessages.success({ chatId, result, entities }));
  } catch (err) {
    dispatch(actions.fetchMessages.error({ message: err.message }));
  }
};

export const addMessage = (message) => async (dispatch) => {
  dispatch(
    actions.sendMessage.start({
      chatId: message.chatId,
      ...normalize(message, Message),
    }),
  );
};

export const handleMessageRealTime = (event) => async (dispatch) => {
  if (event.type === 'ADD') {
    dispatch(addMessage(event.message));
  }
};
