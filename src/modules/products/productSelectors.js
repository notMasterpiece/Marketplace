import { createSelector } from 'reselect';

const getProductsEntities = (state) => state.entities.products;
const getUserEntities = (state) => state.entities.users;
const getLatestIds = (state) => state.products.latest.items;
const getProductsIds = (state) => state.products.items;


export const getLatest = createSelector(
  [getProductsEntities, getLatestIds],
  (entities, ids) => {
    return ids.map(id => entities[id]);
  },
);


export const filterSaved = createSelector(
  (state) => getProductsEntities(state),
  (products) => {
    const saved = Object.values(products).filter(product => product.saved);
    return saved.length;
  },
);


export const getProduct = createSelector(
  (state, id) => getProductsEntities(state)[id],
  (item) => item,
);


export const getProducts = createSelector(
  [getProductsEntities, getProductsIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getProductOwner = createSelector(
  (state, id) => {
    const users = getUserEntities(state);
    const products = getProductsEntities(state);
    const product = products[id];

    if (!product) {
      return undefined;
    }

    return users[product.owner || product.ownerId];
  },
  (item) => item,
);


// delete
const getSavedIds = (state) => state.products.saved.items;
export const getSaveds = createSelector(
  [getProductsEntities, getSavedIds],
  (entities, ids) => {
    return ids.map(id => entities[id])
  }
);
