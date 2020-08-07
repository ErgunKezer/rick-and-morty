import { selectedCharacter } from "../constants";
const selectedCharacterAction = (character) => {
  return {
    type: selectedCharacter,
    payload: character,
  };
};
export default selectedCharacterAction;
