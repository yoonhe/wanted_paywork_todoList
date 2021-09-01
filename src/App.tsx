import { useEffect, FC } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';

import requestGetTodos from './api/todos';
import { BASE_URL } from './api/constants/url';

import reset from './styles/reset';

import { worker } from './mockServer/browser';

worker.start();

axios.defaults.baseURL = BASE_URL;

const App: FC = () => {
  const getTodo = async () => {
    const todos = await requestGetTodos();
    console.log({ todos });
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <>
      <Global styles={reset} />
      <div>TODO</div>
    </>
  );
};

export default App;
