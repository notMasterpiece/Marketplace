import { schema } from 'normalizr';

export const Message = new schema.Entity('messages', undefined, {
  idAttribute: (entity) => `${entity.id}-${entity.chatId}`,
});

export const User = new schema.Entity('users');
export const Chat = new schema.Entity('chats', {
  lastMessage: Message,
});

export const Product = new schema.Entity('products', {
  owner: User,
});

export const ChatList = [Chat];
export const MessageList = [Message];
export const ProductList = [Product];
