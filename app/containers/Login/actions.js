import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  login: [],
  loginSuccess: ['res'],
  loginFailure: ['error'],

  logout: [],
});

export default Creators;
