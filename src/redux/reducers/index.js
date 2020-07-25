import { combineReducers } from 'redux';
import characterList from './listReducer';
import characterListFilter from './listFilterReducer';
import selectedCharacter from './selecterCharacterReducer';
export default combineReducers({
  characterList,
  selectedCharacter,
  characterListFilter,
});
