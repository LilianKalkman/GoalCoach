import { SET_GOALS } from '../action_types';


const GoalsReducer = (state = [], action) => {
  switch(action.type){
    case SET_GOALS :
      const goals = action.goals;
      return goals;
    default:
      return state;
  }
}

export default GoalsReducer;
