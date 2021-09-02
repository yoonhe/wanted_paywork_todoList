import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostCheckTodoResponse } from 'api/types/response';
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
      { payload }: PayloadAction<IRequestTodosSuccessPayload>,
    ) => {
      state.todos = payload;

      state.loading = false;
      state.error = '';
    },
    requestTodosFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    requestCheckTodo: (
      state,
      _action: PayloadAction<IRequestCheckTodoPayload>,
    ) => {
      state.loading = true;
      state.error = '';
    },
    requestCheckTodoSuccess: (
      state,
      { payload }: PayloadAction<IPostCheckTodoResponse>,
    ) => {
      state.todos = payload.updateTodos;

      state.loading = false;
      state.error = '';
    },
    requestCheckTodoFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  requestTodos,
  requestTodosSuccess,
  requestTodosFailure,
  requestCheckTodo,
  requestCheckTodoSuccess,
  requestCheckTodoFailure,
} = counterSlice.actions;

export default counterSlice;
