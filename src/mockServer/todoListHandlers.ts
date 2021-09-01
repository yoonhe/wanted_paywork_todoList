import { rest } from 'msw';
import { setLocalStorage } from 'utils/localStorage';
import { BASE_URL } from '../api/constants/url';

export const todoListHandlers = [
  rest.get(`${BASE_URL}/todos`, (_req, res, ctx) => {
    const todos = localStorage.getItem('todos');

    const ParseTodos: ITodos | null = todos ? JSON.parse(todos) : null;

    return res(ctx.status(200), ctx.json(ParseTodos));
  }),
  rest.post<PostCheckTodoRequestBody>(
    `${BASE_URL}/todo/:id`,
    (req, res, ctx) => {
      const { isCheck } = req.body;
      const { id } = req.params;

      const todos = localStorage.getItem('todos');
      const parseTodos: ITodos = todos ? JSON.parse(todos) : [];

      const todoList = parseTodos.todoList.map((todo: ITodo) => {
        return todo.id === id
          ? {
              ...todo,
              isCheck,
            }
          : todo;
      });

      const updateTodos = {
        ...parseTodos,
        todoList,
      };

      setLocalStorage({ key: 'todos', value: updateTodos });

      return res(
        ctx.status(200),
        ctx.json({
          msg: 'ok',
          updateTodos,
        }),
      );
    },
  ),
];
