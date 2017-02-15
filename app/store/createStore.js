import { combineReducers } from 'redux';
import AppReducers from 'containers/App/reducers';
import LoginReducers from 'containers/Login/reducers';
import configureStore from './store';
import rootSaga from './sagas';

export default () => {
  const rootReducer = combineReducers({
    app: AppReducers,
    login: LoginReducers,
  });

  return configureStore(rootReducer, rootSaga);
}
