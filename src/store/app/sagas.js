import {takeEvery, put, call} from 'redux-saga/effects';
import {installServiceWorker} from 'Src/services/service-worker/install';
import ActionTypes from './action-types';
import {saveUserDefaultLanguageAction, installServiceWorkerAction} from './actions';

function* bootstrapAppSaga() {
  // actions that is required for start app
  const userDefaultLanguage = window.navigator.language;
  yield put(saveUserDefaultLanguageAction(userDefaultLanguage));
  yield put(installServiceWorkerAction());
}

function* installServiceWorkerSaga() {
  yield call(installServiceWorker);
}

export default [
  takeEvery(ActionTypes.APP_BOOTSTRAPED, bootstrapAppSaga),
  takeEvery(ActionTypes.SERVICE_WORKER_INSTALLED, installServiceWorkerSaga),
];
