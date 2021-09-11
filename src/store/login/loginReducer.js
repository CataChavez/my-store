import { LOGIN_STORE_ERROR, LOGIN_STORE_INIT, LOGIN_STORE_SUCCESS } from "./types";
import { initialState } from '../initialState'


export const loginReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOGIN_STORE_INIT:
      return {...prevState,
        loading: true,
      };
    case LOGIN_STORE_SUCCESS:
      return {...prevState, 
        dataStore: action.payload,
        error: false,
        success: true,
        loading: false,
      };
    case LOGIN_STORE_ERROR:
      return {...prevState,
        error: action.payload,
        success: false,
        loading: false,
      };
    default:
      return prevState;
  }
};
