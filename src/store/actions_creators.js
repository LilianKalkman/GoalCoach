import { SIGNED_IN, SET_GOALS } from './action_types';

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
