import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducers/root_reducer';


firebaseApp.auth().onAuthStateChanged( user => {
  if (user){
    console.log('user has signed in or up', user);
  } else {
    console.log('no user signed in')
  }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
