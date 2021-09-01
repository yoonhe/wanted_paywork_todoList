import { FC } from 'react';
import { Global } from '@emotion/react';
import axios from 'axios';

import { worker } from 'mockServer/browser';
import { BASE_URL } from 'api/constants/url';
import { TodoListWrap } from 'pages/todos';
import reset from 'styles/reset';

worker.start();

axios.defaults.baseURL = BASE_URL;

const App: FC = () => {
  return (
    <>
      <Global styles={reset} />
      <TodoListWrap />
    </>
  );
};

export default App;
