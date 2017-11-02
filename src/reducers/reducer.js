export const houses = (store = [], action) => {
  switch (action.type) {
  case 'UPDATE_HOUSES':
    return [...store, action.allHouses];
  default:
    return store;
  }
};
