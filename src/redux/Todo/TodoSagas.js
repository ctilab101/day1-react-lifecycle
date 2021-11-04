import { takeLatest, put, all, call, delay, select } from "redux-saga/effects";
import { addTodoSuccess } from "./TodoActions";
import TodoActionTypes from "./TodoActionTypes";

// interface todo state from global state.
const todoState = (state) => state.todo;

export function* addTodoStartAsync(action) {
  try {
    yield delay(100);
    // retrieve todo state.
    const todo = yield select(todoState);

    const newTodo = {
      title: action.payload,
      image: "https://i.pravatar.cc/600",
      description:
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    };

    const updateTodos = [newTodo, ...todo.todos];

    yield put(addTodoSuccess(updateTodos));
  } catch (err) {
    console.log(err);
  }
}

export function* onAddTodoStart() {
  yield takeLatest(TodoActionTypes.ADD_TODO_START, addTodoStartAsync);
}

export function* todoSagas() {
  yield all([call(onAddTodoStart)]);
}
