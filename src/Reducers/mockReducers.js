import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from "../Actions/mockActions";

const initialState = {
  name: [],
  isLoading: false,
  error: null,
};

const mockReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        name: action.result,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default mockReducers;
