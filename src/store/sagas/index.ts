import { all } from 'redux-saga/effects';

import todoListSaga from 'store/sagas/todoListSaga';

function* rootSaga() {
  yield all([todoListSaga()]);
}

export default rootSaga;
