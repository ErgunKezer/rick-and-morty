const rmListReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'LIST_RICK_AND_MORTY':
      return action.payload;
    default:
      return initialState;
  }
};

export default rmListReducer;
