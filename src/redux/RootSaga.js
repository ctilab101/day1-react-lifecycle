import { all, call } from "redux-saga/effects";

import { todoSagas } from "./Todo/TodoSagas";

export default function* rootSaga() {
  yield all([call(todoSagas)]);
}
