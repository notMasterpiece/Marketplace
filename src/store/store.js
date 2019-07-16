import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducers from '../modules';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'app',
    'auth',
    'chats',
    'messages',
    'entities',
    'products',
    'viewer',
    'profile',
  ],
};

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

const persistor = persistStore(store);

export { store, persistor };
