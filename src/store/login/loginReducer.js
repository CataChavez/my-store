import { LOGIN_STORE_ERROR, 
  LOGIN_STORE_INIT, 
  LOGIN_STORE_SUCCESS,
  LOGOUT 
} from "./types";

const initialStore = {
  data: {},
  error: null,
  success: null,
  loading: false,
};



export const loginReducer = (prevState = initialStore, action) => {
  switch (action.type) {
    case LOGIN_STORE_INIT:
      return {...prevState,
        loading: true,
      };
    case LOGIN_STORE_SUCCESS:
      return {...prevState, 
        data: action.payload,
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
    case LOGOUT:
      return {...prevState,
        success: false,
      }
    default:
      return prevState;
  }
};
