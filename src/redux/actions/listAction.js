import { characterApi } from '../../apis';
import { listRickyAndMorty } from '../constants';
const listAction = () => async (dispatch) => {
  const response = await characterApi();
  dispatch({
    type: listRickyAndMorty,
    payload: response.data.results,
  });
};

export default listAction;
