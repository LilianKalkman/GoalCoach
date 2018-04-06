import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { setGoals } from '../store/actions_creators';
import { connect } from 'react-redux';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount(){
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach( goal => {
        const { email, title } = goal.val();
        goals.push({ email, title });
      })
      console.log(goals);
      this.props.set(goals);
    })
  }

  render(){
    return (
      <div className="">
        {
          this.props.goals.map( (goal, index) => {
            return (
              <GoalItem key={index} title={goal.title} email={goal.email} />
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    goals: state.goals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set: goals => dispatch(setGoals(goals))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalList);
