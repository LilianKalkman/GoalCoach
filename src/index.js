import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { firebaseApp } from './firebase';
import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import UserReducer from './store/reducers/reducer_user';
import GoalsReducer from './store/reducers/reducer_goals';
import CompleteReducer from './store/reducers/reducer_completed';
import { signedIn } from './store/actions_creators';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootreducer = combineReducers({
  user: UserReducer,
  goals: GoalsReducer,
  completed: CompleteReducer
});

const store = createStore(rootreducer, composeEnhancers());

firebaseApp.auth().onAuthStateChanged( user => {
  if (user){
    console.log('user has signed in or up', user);
    const email = user.email;
    store.dispatch(signedIn(email));
  } else {
    console.log('no user signed in')
  }
});

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
