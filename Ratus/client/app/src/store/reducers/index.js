import * as ACTIONS from '../actions';

const initialState = {
  isLoading: false,
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.REGISTER_USER_START:
      return {
        isLoading: true,
      };
    case ACTIONS.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case ACTIONS.REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ACTIONS.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case ACTIONS.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
