import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { firebaseApp } from './firebase';

import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


firebaseApp.auth().onAuthStateChanged( user => {
  if (user){
    console.log('user has signed in or up', user)
  } else {
    console.log('no user signed in')
  }
});


const app = (
  <BrowserRouter>
    <Switch>
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/' component={App} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
