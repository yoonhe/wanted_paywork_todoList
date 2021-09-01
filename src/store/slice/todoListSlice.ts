import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import INIT_TODOS from 'store/sagas/constants/todos';

const initialState: IinitialState = {
  todos: INIT_TODOS,
  loading: false,
  error: '',
};

const counterSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    requestTodos: (state) => {
      state.loading = true;
      state.error = '';
    },
    requestTodosSuccess: (
      state,
      { payload }: PayloadAction<ISuccessPayload>,
    ) => {
      state.todos = payload;

      state.loading = false;
      state.error = '';
    },
    requestTodoFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { requestTodos, requestTodosSuccess, requestTodoFailure } =
  counterSlice.actions;

export default counterSlice;

interface IinitialState {
  todos: ITodos;
  loading: boolean;
  error: string;
}

interface ISuccessPayload {
  count: number;
  todoList: ITodo[];
}
