import { createAsyncActions } from '@letapp/redux-actions';

export const createChat = createAsyncActions('chat/CREATE_CHAT');
export const fetchChats = createAsyncActions('chat/FETCH_CHATS');