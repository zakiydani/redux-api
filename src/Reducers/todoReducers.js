import { GETDATABEGIN, GETDATASUCCESS, GETDATAFAILED, } from "../Actions/todoActions";
  
  const initialState = {
    data: [],
    error: null,
    isLoading: false,
    
  };
  
  const todoReducers = (state = initialState, action) => {
    switch (action.type) {
      case GETDATABEGIN:
        return {
          ...state,
          isLoading: true,
        };
  
      case GETDATASUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.result,
        };
  
      case GETDATAFAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducers;