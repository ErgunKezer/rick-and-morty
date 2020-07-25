import { listFilter } from '../constants';
const listFilterAction = (filterValue) => {
  return {
    type: listFilter,
    payload: filterValue,
  };
};
export default listFilterAction;
