import { selectedCharacter } from '../constants';
const selectedCharacterReducer = (initialState = null, action) => {
  switch (action.type) {
    case selectedCharacter:
      return action.payload;
    default:
      return initialState;
  }
};
export default selectedCharacterReducer;
