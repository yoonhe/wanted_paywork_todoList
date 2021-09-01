import axios, { AxiosResponse } from 'axios';

const getTodos: () => Promise<ITodos> = async () => {
  const response: AxiosResponse<ITodos> = await axios.get('/todos');

  return response.data;
};

export default getTodos;
