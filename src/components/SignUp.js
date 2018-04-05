import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: {
      message: ''
    },
    signedUp: false
  }

  signUp = () => {
    const email = this.state.email;
    const password = this.state.password;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      if(user){
        this.setState({signedUp: true})
      }
    })
    .catch(error => {
      console.log('error', error);
      this.setState({error: error})
    });
  }

  render() {
    if(this.state.signedUp){
      this.props.history.replace('/signin')
    }
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="email"
            style={{marginRight: '5px'}}
            onChange = { event => this.setState({email: event.target.value})}
          />
          <input
            type="password"
            className="form-control"
            placeholder="password"
            style={{marginRight: '5px'}}
            onChange = { event => this.setState({password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => this.signUp()}
            >
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
      </div>
    );
  }
}

export default SignUp;
