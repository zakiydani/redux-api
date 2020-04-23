import { INC, DEC } from "../Actions/hooksActions";

const initialState = {
  num: 0,
};

const hooksReducers = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        num: state.num + 1,
      };
    case DEC:
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return state;
  }
};

export default hooksReducers;
