import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { registerUser } from '../store/actions';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
};

const Register = (props) => {
  const history = useHistory();
  const [registerValues, setRegisterValues] = useState(initialState);

  const handleInput = (e) => {
    setRegisterValues({
      ...registerValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.registerUser(registerValues);
    history.push(`/login`);
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          name='first_name'
          value={registerValues.first_name}
          onChange={handleInput}
          required
        />
        <input
          type='text'
          placeholder='Last Name'
          name='last_name'
          value={registerValues.last_name}
          onChange={handleInput}
          required
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={registerValues.email}
          onChange={handleInput}
          required
        />
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={registerValues.username}
          onChange={handleInput}
          required
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={registerValues.password}
          onChange={handleInput}
          required
        />

        <button>
          Create Account{props.isLoading ? <span>Loading</span> : ''}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    user: state.user,
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
