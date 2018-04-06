import React, { Component } from 'react';

class GoalItem extends Component {
  render(){
    return (
      <div style={{margin: '5px'}}>
        <strong>{this.props.title}</strong>
        <span> submitted by <em>{this.props.email}</em></span>
      </div>
    )
  }
}

export default GoalItem;
