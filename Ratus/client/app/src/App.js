import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Register from './components/Register.js';
import Login from './components/Login.js';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>

      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>

        <Route exact path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
