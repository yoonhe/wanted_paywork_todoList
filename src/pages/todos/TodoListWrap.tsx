import { FC, useEffect } from 'react';
import styled from '@emotion/styled';

import { requestTodos } from 'store/slice/todoListSlice';
import { useAppDispatch, useAppSelector } from 'store/slice/hooks';

import { TaskBoard } from 'pages/todos';

const TodoListWrap: FC = () => {
  const { todos } = useAppSelector((store) => store.todoList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestTodos());
  }, []);

  return (
    <Container>
      <TaskBoard
        title="미완료"
        todos={todos}
        topColor="yellow"
        type="incomplete"
      />
      <TaskBoard title="완료" todos={todos} topColor="green" type="complete" />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;

  section + section {
    margin-left: 30px;
  }

  ul li + li {
    margin-top: 20px;
  }
`;

export default TodoListWrap;
