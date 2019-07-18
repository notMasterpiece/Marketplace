export const createMessage = ({ text, chatId, ownerId }) => ({
  id: new Date().getTime(),
  text,
  chatId,
  createdAt: new Date().getTime(),
  ownerId,
});
