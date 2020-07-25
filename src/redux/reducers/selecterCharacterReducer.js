import { selectedCharacter } from '../constants';
import { act } from 'react-dom/test-utils';
const selectedCharacterReducer = (initialState = null, action) => {
  switch (action.type) {
    case selectedCharacter:
      return action.payload;
    default:
      return initialState;
  }
};
export default selectedCharacterReducer;
