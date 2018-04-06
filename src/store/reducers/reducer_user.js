import { SIGNED_IN } from '../action_types';

let user = {
  email: null
}

const UserReducer = (state = user, action) => {
  switch(action.type){
    case SIGNED_IN :
      const email = action.email;
      user = {
        email
      }
      return user;
    default:
    return state;
  }
}

export default UserReducer;
