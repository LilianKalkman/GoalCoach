import { SIGNED_IN } from './action_types';

export const signedIn = (email) => {
  return {
    type: SIGNED_IN,
    email: email
  }
}
