import { handleActions } from '@letapp/redux-actions';
import * as actions from './messageActions';

const INITIAL_STATE = {
  items: {
    // [id]: []
  },
  sendMessage: {
    isLoading: false,
    isError: false,
    error: null,
  },

  fetchMessages: {
    isLoading: false,
    isError: false,
    error: null,
  },
};


export default handleActions({
  [actions.sendMessage.start]: (state, { payload: { chatId, result } }) => {

    return ({
      ...state,
      items: {
        ...state.items,
        [chatId]: (state.items[chatId] || []).concat(result),
      },
      sendMessage: {
        ...state.sendMessage,
        isLoading: true,
        isError: false,
        error: null,
      },

    });
  },


  [actions.sendMessage.success]: (
    state,
    { payload: { result, chatId, oldMessageId } },
  ) => {
    const items = state.items[chatId]
      .filter((i) => i !== `${oldMessageId}-${chatId}`)
      .concat(result);
    return {
      ...state,
      items: {
        ...state.items,
        [chatId]: items,
      },
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
      },
    };
  },
  [actions.sendMessage.error]: (state, action) => ({
    ...state,
    sendMessage: {
      ...state.sendMessage,
      isLoading: false,
      error: action.payload,
      isError: true,
    },
  }),


  [actions.fetchMessages.start]: state => ({
    ...state,
    fetchMessages: {
      ...state.fetchMessages,
      isLoading: true,
      isError: false,
      error: null,
    },

  }),
  [actions.fetchMessages.success]: (state, { payload: { chatId, result } }) => {
    return ({
      ...state,
      items: {
        ...state.items,
        [chatId]: result.reverse(),
      },
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
      },

    });
  },
  [actions.fetchMessages.error]: (state, action) => ({
    ...state,
    fetchMessages: {
      ...state.fetchMessages,
      isLoading: false,
      isError: true,
      error: action.payload,
    },
  }),
}, INITIAL_STATE);
