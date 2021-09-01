import { FC, useEffect } from 'react';
import styled from '@emotion/styled';

import { requestTodos } from 'store/slice/todoListSlice';
import { useAppDispatch, useAppSelector } from 'store/slice/hooks';

import TaskBoard from './TaskBoard';

const Todos: FC = () => {
  const {
    todos: { count, todoList },
  } = useAppSelector((store) => store.todoList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return (
    <Container>
      <TaskBoard topColor="yellow" title="Tasks" count={count}>
        <ul>
          {todoList?.map(({ id, content }) => (
            <li key={id}>{content}</li>
          ))}
        </ul>
      </TaskBoard>
    </Container>
  );
};

const Container = styled.main`
  padding: 20px;
`;

export default Todos;
