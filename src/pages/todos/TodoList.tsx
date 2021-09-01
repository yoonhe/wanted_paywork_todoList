import { FC, useEffect } from 'react';

import { requestTodos } from 'store/slice/todoListSlice';
import { useAppDispatch, useAppSelector } from 'store/slice/hooks';

const Todos: FC = () => {
  const {
    todos: { count, todoList },
  } = useAppSelector((store) => store.todoList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <ul>
        {todoList?.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
