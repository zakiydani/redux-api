import axios from "axios";

export const GET_DATA_BEGIN = "GET_DATA_BEGIN";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export const getDataBegin = () => {
  return {
    type: GET_DATA_BEGIN,
  };
};
export const getDataSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getDataFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};

export function getDataApi() {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .get(`https://5e9f471c11b078001679c68f.mockapi.io/Data`)
      .then((result) => dispatch(getDataSuccess(result.data)))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}

export function postDataApi(obj) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .post(`https://5e9f471c11b078001679c68f.mockapi.io/Data`, obj)
      .then(() => dispatch(getDataApi()))
      .catch((error) => dispatch(getDataFailed(error.message)));
  };
}

export function deleteDataApi(id) {
  return function (dispatch) {
    dispatch(getDataBegin());

    axios
      .delete(`https://5e9f471c11b078001679c68f.mockapi.io/Data/${id}`)
      .then(() => dispatch(getDataApi()))
      .catch((error) => dispatch(getDataFailed(error.massage)));
  };
}
