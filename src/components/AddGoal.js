import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component {
  state = {
    title: ''
  }

  addGoal = () => {
    goalRef.push({
      email: this.props.email,
      title: this.state.title
    });
  }

  render(){
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add Goal"
            style={{marginRight: '5px'}}
            onChange = { event => this.setState({ title: event.target.value})}
          />
        <button
          className="btn btn-success"
          type="button"
          onClick={() => this.addGoal()}
          > Add </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps)(AddGoal);
