import { COMPLETE_GOALS } from '../action_types';

const CompleteReducer = (state = [], action) => {
  switch(action.type){
    case COMPLETE_GOALS :
      const goals = action.goals;
      return goals;
    default:
      return state;
  }
}

export default CompleteReducer;
