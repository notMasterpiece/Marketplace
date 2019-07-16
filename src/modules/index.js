import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './app';
import auth from './auth';
import products from './products';
import profile from './profile';
import viewer from './viewer';
import entities from './entities';
import chats from './chat';
import messages from './message';
import search from './search';

const viewerPersistConfig = {
  key: 'viewer',
  storage,
  blacklist: ['fetchViewer'],
};

export default combineReducers({
  app,
  auth,
  products,
  profile,
  viewer: persistReducer(viewerPersistConfig, viewer),
  entities,
  chats,
  messages,
  search,
});
