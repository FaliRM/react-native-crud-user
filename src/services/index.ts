import { User, UserRaw } from '_types';
import { crudApi } from '_config';

export const register = async ({ email, password }: UserRaw) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const body = JSON.stringify({ email, password });
  const data = await fetch(`${crudApi}/register`, {
    method: 'POST',
    headers,
    body,
  });
  const resp = await data.json();
  console.log('register response:', resp);
  return resp;
};

export const login = async ({ email, password }: UserRaw) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const body = JSON.stringify({ email, password });
  const data = await fetch(`${crudApi}/login`, {
    method: 'POST',
    headers,
    body,
  });
  const resp = await data.json();
  console.log('login response:', resp);
  return resp;
};

export const update = async ({ email, password, id }: User) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const body = JSON.stringify({ email, password });
  const data = await fetch(`${crudApi}/users/${id}`, {
    method: 'PUT',
    headers,
    body,
  });
  const resp = await data.json();
  console.log('update response:', resp);
  return resp;
};

export const remove = async () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  const data = await fetch(`${crudApi}/users`, {
    method: 'DELETE',
    headers,
  });
  console.log('remove response:', data);
  return null;
};
