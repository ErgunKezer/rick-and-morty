import { listRickyAndMorty } from '../constants';

const listReducer = (initialState = [], action) => {
  switch (action.type) {
    case listRickyAndMorty:
      return action.payload;
    default:
      return initialState;
  }
};

export default listReducer;
