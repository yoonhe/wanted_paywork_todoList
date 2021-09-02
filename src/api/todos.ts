import axios, { AxiosResponse } from 'axios';

import { IPostCheckTodoResponse } from './types/response';

export const postCheckTodo: ({
  id,
  isCheck,
}: {
  id: string;
  isCheck: boolean;
}) => Promise<IPostCheckTodoResponse> = async ({ id, isCheck }) => {
  const response: AxiosResponse<IPostCheckTodoResponse> = await axios.post(
    `/todo/${id}`,
    {
      isCheck,
    },
  );

  return response.data;
};

export const getTodos: () => Promise<ITodos> = async () => {
  const response: AxiosResponse<ITodos> = await axios.get('/todos');

  return response.data;
};
