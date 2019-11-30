import { all } from "redux-saga/effects"
import AppSaga from "./app/sagas"
import UiSaga from "./ui/sagas"
import RepositorySaga from "./repository/sagas"

export default function* sagas() {
  yield all([...UiSaga, ...AppSaga, ...RepositorySaga])
}
