import LoginSagas from 'containers/Login/sagas';

export default function * root () {
  yield [
    ...LoginSagas,
  ]
};
