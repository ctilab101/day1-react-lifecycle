import TodoActionTypes from "./TodoActionTypes";

export const addTodoStart = (newTodo) => ({
  type: TodoActionTypes.ADD_TODO_START,
  payload: newTodo,
});

export const addTodoSuccess = (todos) => ({
  type: TodoActionTypes.ADD_TODO_SUCCESS,
  payload: todos,
});

export const deleteTodoStart = (delTodo) => ({
  type: TodoActionTypes.DELETE_TODO_START,
  payload: delTodo,
});

export const deleteTodoSuccess = (todos) => ({
  type: TodoActionTypes.DELETE_TODO_SUCCESS,
  payload: todos,
});
