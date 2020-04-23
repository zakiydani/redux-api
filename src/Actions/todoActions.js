import axios from "axios";

export const GETDATABEGIN = "GETDATABEGIN";
export const GETDATASUCCESS = "GETDATASUCCESS";
export const GETDATAFAILED = "GETDATAFAILED";

export const getDataBegin = () => {
  return {
    type: GETDATABEGIN,
  };
};
export const getDataSuccess = (result) => {
  return {
    type: GETDATASUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GETDATAFAILED,
    error,
  };
};

export function getDataTodos() {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}
