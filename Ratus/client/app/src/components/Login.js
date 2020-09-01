import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../store/actions';

const initialValues = {
  username: '',
  password: '',
};

const Login = (props) => {
  const [loginValues, setLoginValues] = useState(initialValues);
  const history = useHistory();

  const handleInput = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.loginUser(loginValues);
    history.push(`/dashboard`);
  };

  return (
    <div>
      Log in
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={loginValues.username}
          onChange={handleInput}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={loginValues.password}
          onChange={handleInput}
          required
        />

        <button>
          Login{props.isLoading ? <span>Loading</span> : ''}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { loginUser })(Login);
