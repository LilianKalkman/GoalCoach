import { SIGNED_IN, SET_GOALS, COMPLETE_GOALS } from './action_types';

export const signedIn = (email) => {
  return {
    type: SIGNED_IN,
    email: email
  }
}

export const setGoals = (goals) => {
  return {
    type: SET_GOALS,
    goals: goals
  }
}

export const completeGoals = (goals) => {
  return {
    type: COMPLETE_GOALS,
    goals: goals
  }
}
