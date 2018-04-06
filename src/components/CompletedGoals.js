import React, { Component } from 'react';
import { CompleteGoalRef } from '../firebase';
import { completeGoals } from '../store/actions_creators';
import { connect } from 'react-redux';

class CompletedGoals extends Component {
  componentDidMount(){
    CompleteGoalRef.on('value', snap => {
      let completedGoals = [];
      snap.forEach( goal => {
        const { email, title } = goal.val();
        completedGoals.push({ email, title });
      })
      this.props.complete(completedGoals);
    })
  }

  clearAll = () => {
    CompleteGoalRef.set([]);
  }

  render(){
    return (
      <div>
        {
          this.props.goals.map( (goal, index) => {
            return (
              <div key={index}>
                <strong>{goal.title}</strong> completed by <em>{goal.email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-sm btn-primary"
          style={{marginTop: '5px'}}
          type="button"
          onClick={() => this.clearAll()}>Clear All</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    goals: state.completed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    complete: goals => dispatch(completeGoals(goals))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedGoals);
