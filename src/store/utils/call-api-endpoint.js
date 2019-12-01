import {call, put} from 'redux-saga/effects';
import {updateDurationTimeForApiResponse} from '../repository/actions';
import {showNotificationAction} from 'Store/ui/actions';
import {
  ERROR_GETTING_DATA,
  TOO_MANY_REQUESTS,
  INVALID_MEDIA_TYPE,
  VALIDATION_FAILD,
  UNAUTHORIZED_USER,
  FORBIDEN_ACTION,
  NOT_FOUND,
  BAD_REQUEST,
} from 'utils/notification-messages';
export default function* callApiEndpoint(fn, ...rest) {
  try {
    const response = yield call(fn, ...rest);
    const {duration} = response;
    yield put(updateDurationTimeForApiResponse(duration));
    return response.data === null ? {status: 'ok'} : response;
  } catch (err) {
    if (err.response) {
      switch (err.response.status) {
        case 400:
          yield put(showNotificationAction(BAD_REQUEST));
          return {error: err};
        case 401:
          yield put(showNotificationAction(UNAUTHORIZED_USER));
          return {error: err};
        case 403:
          yield put(showNotificationAction(FORBIDEN_ACTION));
          return {error: err};
        case 404:
          yield put(showNotificationAction(NOT_FOUND));
          return {error: err};
        case 415:
          yield put(showNotificationAction(INVALID_MEDIA_TYPE));
          return {error: err};
        case 422:
          yield put(showNotificationAction(VALIDATION_FAILD));
          return {error: err};
        case 429:
          yield put(showNotificationAction(TOO_MANY_REQUESTS));
          return {error: err};
        default:
          yield put(showNotificationAction(ERROR_GETTING_DATA));
          return {error: err};
      }
    }
    return {error: err};
  }
}
