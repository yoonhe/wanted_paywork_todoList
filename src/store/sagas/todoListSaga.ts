import { AxiosError } from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { getTodos, postCheckTodo } from 'api/todos';
import { IPostCheckTodoResponse } from 'api/types/response';

import { MOCK_DATA } from './constants/mockData';

import {
  requestCheckTodoFailure,
  requestCheckTodoSuccess,
  requestTodosFailure,
  requestTodosSuccess,
} from 'store/slice/todoListSlice';

function* requestCheckTodo({
  payload: { id, isCheck },
}: PayloadAction<IRequestCheckTodoPayload>) {
  try {
    const response: IPostCheckTodoResponse = yield call(postCheckTodo, {
      id,
      isCheck,
    });

    yield put(requestCheckTodoSuccess(response));
  } catch (e) {
    yield put(requestCheckTodoFailure((e as AxiosError).response?.data));
  }
}

function* requestTodoList() {
  try {
    const todos: ITodos = yield call(getTodos);

    if (!todos) {
      localStorage.setItem('todos', JSON.stringify(MOCK_DATA));

      yield put(requestTodosSuccess(MOCK_DATA));
      return;
    }

    yield put(requestTodosSuccess(todos));
  } catch (e) {
    yield put(requestTodosFailure((e as AxiosError).response?.data));
  }
}

function* todoListSaga() {
  yield takeLatest('todoList/requestTodos', requestTodoList);
  yield takeLatest('todoList/requestCheckTodo', requestCheckTodo);
}

export default todoListSaga;
