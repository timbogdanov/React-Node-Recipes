import axios from 'axios';

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const registerUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post('http://localhost:5000/api/auth/register', userData)
      .then((res) => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: err.message,
        });
      });
  };
};

export const loginUser = (userData) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
    axios
      .post('http://localhost:5000/api/auth/login', userData)
      .then((res) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
        console.log(res);
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: err.message,
        });
      });
  };
};
