import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: {
      message: ''
    },
    signedIn: false
  }

  signIn = () => {
    const email = this.state.email;
    const password = this.state.password;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      if(user){
        this.setState({signedIn: true})
      }
    })
    .catch(error => {
      this.setState({error: error});
    });
  }

  render() {
    if(this.state.signedIn){
      this.props.history.push('/')
    }
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
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
            onClick={() => this.signIn()}
            >
            Sign In
          </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>No account yet? Sign up instead</Link></div>
      </div>
    );
  }
}

export default SignIn;
