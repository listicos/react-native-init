import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from 'services/api';
import Actions, { Types } from './actions';
import AppActions from 'containers/App/actions';

function* login() {
  try {
    yield put(AppActions.loading(true));
    yield delay(1500);
    const response = yield call(api.login, 'listico', 'password');
    yield put(Actions.loginSuccess(response.data));
  } catch (error) {
    yield put(Actions.loginFailure(error));
    console.warn(error.message);
  } finally {
    yield put(AppActions.loading(false));
  }
}

export default [
  takeLatest(Types.LOGIN, login),
];
