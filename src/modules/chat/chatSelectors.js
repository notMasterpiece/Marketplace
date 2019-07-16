import { createSelector } from 'reselect';

const getChatsEntities = (state) => state.entities.chats;
const getMessagesEntities = (state) => state.entities.messages;
const getIds = (state) => state.chats.items;

export const getChats = createSelector(
  [getChatsEntities, getIds],
  (entities, ids) => ids.map(id => entities[id]),
);

export const getChatsWithLastMessages = createSelector(
  [getChats, getMessagesEntities],
  (items, messages) => {

    const i = items.map(item => ({
      ...item,
      lastMessage: messages[item.lastMessage],
    }));

    return i;
  },
);

export const getChat = createSelector(
  (state, id) => getChatsEntities(state)[id],
  (item) => item,
);
