import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { Types } from './actions';

const INITIAL_STATE = Immutable({
  loading: false,
});

const loading = (state, action) => (
  state.set('loading', action.enable)
);

export default createReducer(INITIAL_STATE, {
  [Types.LOADING]: loading,
});
