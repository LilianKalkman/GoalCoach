import React, { Component } from 'react';
import { CompleteGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {
  completeGoal = () => {
    const email = this.props.user;
    const title = this.props.title;
    const serverKey = this.props.serverKey;
    goalRef.child(serverKey).remove();
    CompleteGoalRef.push({email, title});
  }

  render(){
    return (
      <div style={{margin: '5px'}}>
        <strong>{this.props.title}</strong>
        <span style={{marginRight: '5px'}}> submitted by <em>{this.props.email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          type="button"
          onClick={() => this.completeGoal()}>
          Complete</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.email
  }
}

export default connect(mapStateToProps)(GoalItem);
