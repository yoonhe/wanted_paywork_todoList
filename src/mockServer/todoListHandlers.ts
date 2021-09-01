import { rest } from 'msw';
import { BASE_URL } from '../api/constants/url';

export const todoListHandlers = [
  rest.get(`${BASE_URL}/todos`, (_req, res, ctx) => {
    const todos = localStorage.getItem('todos');

    const ParseTodos: ITodos = JSON.parse(todos || '');

    if (!ParseTodos) {
      localStorage.setItem('todos', JSON.stringify([]));
      return res(ctx.status(200), ctx.json([]));
    }

    return res(ctx.status(200), ctx.json(ParseTodos));
  }),
];
