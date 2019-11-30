import { takeEvery } from "redux-saga/effects"
import { toast } from "react-toastify"
import ActionTypes from "./action-types"

function* showNotificationSaga(action) {
  const { type, message } = action.payload
  console.log(type, message)
  yield toast[type](message)
}

export default [takeEvery(ActionTypes.NOTIFICATION_SHOWN, showNotificationSaga)]
