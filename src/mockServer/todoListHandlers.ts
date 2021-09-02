import { rest } from 'msw';
import { MOCK_DATA } from 'store/sagas/constants/mockData';
import { setLocalStorage } from 'utils/localStorage';
import { BASE_URL } from '../api/constants/url';

export const todoListHandlers = [
  rest.get(`${BASE_URL}/todos`, (_req, res, ctx) => {
    const todos = localStorage.getItem('todos');

    const ParseTodos: ITodos | null = todos ? JSON.parse(todos) : null;

    if (!ParseTodos) {
      localStorage.setItem('todos', JSON.stringify(MOCK_DATA));
      return res(ctx.status(200), ctx.json(MOCK_DATA));
    }

    return res(ctx.status(200), ctx.json(ParseTodos));
  }),
  rest.post<PostCheckTodoRequestBody>(
    `${BASE_URL}/todo/:id`,
    (req, res, ctx) => {
      const { isCheck: updateIsCheck } = req.body;
      const { id } = req.params;

      const todos = localStorage.getItem('todos');
      const parseTodos: ITodos = todos ? JSON.parse(todos) : [];

      const todoList = parseTodos.todoList.map((todo: ITodo) => {
        const { isCheck } = todo;
        return {
          ...todo,
          isCheck: todo.id === id ? updateIsCheck : isCheck,
        };
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
