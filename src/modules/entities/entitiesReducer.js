import { handleActions, combineActions } from '@letapp/redux-actions';
import { messageActions } from '../message';
import * as actions from '../products/productsActions';

const INITIAL_STATE = {
  products: {
    // [id]: {
    //     product
    // }
  },
  users: {
    // [id]: {
    //     user
    // }
  },
  chats: {
    // [id]: {
    //     user
    // }
  },
  messages: {
    // [id]: {
    //     user
    // }
  },
};


const reducer = handleActions({
  [combineActions(
    messageActions.sendMessage.start,
    messageActions.sendMessage.success,
  )]: (state, { payload: { chatId, result } }) => {

    return ({
      ...state,
      chats: {
        ...state.chats,
        [chatId]: {
          ...state.chats[chatId],
          lastMessage: result,
        },
      },
    });
  },


  [actions.saveProduct.start]: (state, { payload: { productId } }) => {
    return ({
      ...state,
      products: {
        ...state.products,
        [productId]: {
          ...state.products[productId],
          saved: true,
        },
      },
    });
  },


  [actions.unSaveProduct.start]: (state, { payload: { productId } }) => {

    return ({
      ...state,
      products: {
        ...state.products,
        [productId]: {
          ...state.products[productId],
          saved: false,
        },
      },
    });
  },

}, INITIAL_STATE);

export default function entitiesReducer(state = INITIAL_STATE, action) {
  let stateWithEntities = state;
  if (action.payload && action.payload.entities) {
    stateWithEntities = Object.keys(action.payload.entities).reduce(
      (accState, key) => {
        const entity = accState[key];

        accState[key] = Object.assign({}, entity, action.payload.entities[key]);

        return accState;
      },
      {
        ...state,
      },
    );
  }
  return reducer(stateWithEntities, action);
}
