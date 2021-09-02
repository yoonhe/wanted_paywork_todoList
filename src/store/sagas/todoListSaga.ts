import { takeLatest, fork, all } from 'redux-saga/effects';

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
import { createSaga } from 'store/utils/fetchEntity';

const postCheckTodosList = createSaga<
  IRequestCheckTodoPayload,
  IPostCheckTodoResponse
>({
  entity: { success: requestCheckTodoSuccess, fail: requestCheckTodoFailure },
  api: postCheckTodo,
});

const getTodosList = createSaga<null, ITodos>({
  entity: { success: requestTodosSuccess, fail: requestTodosFailure },
  api: getTodos,
});

function* watchPostCheckTodosList() {
  yield takeLatest(requestCheckTodo.type, postCheckTodosList);
}

function* watchGetTodosList() {
  yield takeLatest(requestTodos.type, getTodosList);
}

function* todoListSaga() {
  yield all([fork(watchGetTodosList), fork(watchPostCheckTodosList)]);
}

export default todoListSaga;
