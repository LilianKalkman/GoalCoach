import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from './firebase';
import AddGoal from './components/AddGoal';
import GoalList from './components/GoalList';
import CompletedGoals from './components/CompletedGoals';

class App extends Component {
  signOut = () => {
    firebaseApp.auth().signOut();
    this.props.history.replace('/signin');
  }

  render() {
    return (
      <div style={{margin: '5px'}} className="App">
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <h4>Completed Goals</h4>
        <CompletedGoals />
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}>
          Sign Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.email
  }
}

export default connect(mapStateToProps)(App);
