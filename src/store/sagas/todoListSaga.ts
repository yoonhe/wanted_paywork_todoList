import { AxiosError } from 'axios';
import { put, takeLatest, call, fork, all } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getTodos, postCheckTodo } from 'api/todos';
import { IPostCheckTodoResponse } from 'api/types/response';

import {
  requestCheckTodo,
  requestCheckTodoFailure,
  requestCheckTodoSuccess,
  requestTodos,
  requestTodosFailure,
  requestTodosSuccess,
} from 'store/slice/todoListSlice';

function* postCheckTodosList({
  payload,
}: PayloadAction<IRequestCheckTodoPayload>) {
  try {
    const response: IPostCheckTodoResponse = yield call(postCheckTodo, payload);

    yield put(requestCheckTodoSuccess(response));
  } catch (e) {
    yield put(requestCheckTodoFailure((e as AxiosError).response?.data));
  }
}

function* watchPostCheckTodosList() {
  yield takeLatest(requestCheckTodo.type, postCheckTodosList);
}

function* getTodosList() {
  try {
    const response: ITodos = yield call(getTodos);

    yield put(requestTodosSuccess(response));
  } catch (e) {
    yield put(requestTodosFailure((e as AxiosError).response?.data));
  }
}

function* watchGetTodosList() {
  yield takeLatest(requestTodos.type, getTodosList);
}

function* todoListSaga() {
  yield all([fork(watchGetTodosList), fork(watchPostCheckTodosList)]);
}

export default todoListSaga;
