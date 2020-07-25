import { combineReducers } from 'redux';
import characterList from './listReducer';
import characterListFilter from './listFilterReducer';
import selectedUser from './selecterCharacterReducer';
export default combineReducers({
  characterList,
  selectedUser,
  characterListFilter,
});
