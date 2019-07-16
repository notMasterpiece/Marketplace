import { createAsyncActions } from '@letapp/redux-actions';

export const sendMessage = createAsyncActions('mesages/SEND_MESSAGE');
export const fetchMessages = createAsyncActions('mesages/FETCH_MESSAGES');