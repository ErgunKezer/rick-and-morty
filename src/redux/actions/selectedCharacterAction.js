const selectedCharacterAction = (character) => {
  return {
    type: 'SELECTED_CHARACTER',
    payload: character,
  };
};
export default selectedCharacterAction;
