import { listFilter } from '../constants';
const listFilterReducer = (initialState = '', action) => {
  switch (action.type) {
    case listFilter:
      return action.payload;
    default:
      return initialState;
  }
};

export default listFilterReducer;
