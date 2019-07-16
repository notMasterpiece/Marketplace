import { createSelector } from 'reselect';

const getUserEntities = (state) => state.entities.users;

export const getUser = createSelector(
    (state, id) => getUserEntities(state)[id],
    (item) => item
);

