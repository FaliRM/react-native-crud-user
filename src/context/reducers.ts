import { Reducer } from 'react';
import { combineReducers } from 'redux';

import { User } from '_types';
import {
  CREATE_USER,
  READ_USER,
  UPDATE_USER,
  DELETE_USER,
  Actions,
} from './actions';

const usersReducer: Reducer<User | {}, Actions> = (
  state: User | {} = {},
  action: Actions,
) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.payload];
    case READ_USER:
      return [...state, action.payload];
    case UPDATE_USER:
      return [...state, action.payload];
    case DELETE_USER:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
});
