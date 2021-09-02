interface IinitialState {
  todos: ITodos;
  loading: boolean;
  error: string;
}

interface IRequestTodosSuccessPayload {
  count: number;
  todoList: ITodo[];
}

interface IRequestCheckTodoPayload {
  id: string;
  isCheck: boolean;
}
