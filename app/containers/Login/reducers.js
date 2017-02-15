import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = Immutable({
  authenticated: false,
  error: '',
});

const login = (state, action) => (
  state.set('loading', true)
);

const loginSuccess = (state, action) => (
  state.merge({
  	authenticated: true,
  	profile: action.res.profile,
    loading: false,
  })
);

const loginFailure = (state, action) => (
  state.merge({
    error: state.error.message,
    loading: false,
  })
);

const logout = (state, action) => (
  state.set('authenticated', false)
);

export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.LOGOUT]: logout,
});
