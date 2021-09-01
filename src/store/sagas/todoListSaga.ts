import { AxiosError } from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import getTodos from 'api/todos';
import {
  requestTodoFailure,
  requestTodosSuccess,
} from 'store/slice/todoListSlice';
import { MOCK_DATA } from './constants/mockData';

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
    yield put(requestTodoFailure((e as AxiosError).response?.data));
  }
}

function* todoListSaga() {
  yield takeLatest('todoList/requestTodos', requestTodoList);
}

export default todoListSaga;
