import { characterApi } from '../../apis';
const rmListAction = () => async (dispatch) => {
  const response = await characterApi();
  dispatch({
    type: 'LIST_RICK_AND_MORTY',
    payload: response.data.results,
  });
};

export default rmListAction;
