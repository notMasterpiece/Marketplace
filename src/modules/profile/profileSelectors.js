import { createSelector } from 'reselect';


const getUserEntities = (state) => state.entities.users;
const getProductEntities = (state) => state.entities.products;
const getUserIds = (state) => state.profile.products;

export const getUser = createSelector(
  (state, id) => getUserEntities(state)[id],
  (item) => item,
);


export const getProducts = createSelector(
  [getProductEntities, getUserIds],
  (entities, ids) => {
    if (entities && ids) {
      return ids.map(id => entities[id]);
    }
  },
);
