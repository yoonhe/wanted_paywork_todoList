import axios from 'axios';

const requestGetTodos: () => Promise<ITodos> = async () => {
  const response = await axios.get('/todos');

  return response.data;
};

export default requestGetTodos;
