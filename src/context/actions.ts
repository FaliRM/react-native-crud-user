import { Dispatch } from 'redux';

import { UserRaw } from '_types';
import { register, login, update, remove } from '_services';

export interface CreateUserAction {
  type: 'CREATE_USER';
  payload: object;
}

export interface ReadUserAction {
  type: 'READ_USER';
  payload: object;
}

export interface UpdateUserAction {
  type: 'UPDATE_USER';
  payload: object;
}

export interface DeleteUserAction {
  type: 'DELETE_USER';
}

export type Actions =
  | CreateUserAction
  | ReadUserAction
  | UpdateUserAction
  | DeleteUserAction;

export const CREATE_USER = 'CREATE_USER';
export const READ_USER = 'READ_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const createuser = ({ email, password }: UserRaw) => async (
  dispatch: Dispatch,
) => {
  const response = await register({ email, password });
  console.log('this is the createuser res:', response);
  dispatch({ type: CREATE_USER, payload: response });
};

export const readuser = ({ email, password }: UserRaw) => async (
  dispatch: Dispatch,
) => {
  const response = await login({ email, password });
  console.log('this is the readuser res:', response);
  dispatch({ type: READ_USER, payload: response });
};

export const updateuser = ({ email, password, id }: User) => async (
  dispatch: Dispatch,
) => {
  const response = await update({ email, password, id });
  console.log('this is the updateuser res:', response);
  dispatch({ type: UPDATE_USER, payload: response });
};

export const deleteuser = () => async (dispatch: Dispatch) => {
  await remove();
  dispatch({ type: DELETE_USER });
};

export const removestateuser = () => async (dispatch: Dispatch) => {
  dispatch({ type: DELETE_USER });
};
