import { FC, useEffect } from 'react';
import styled from '@emotion/styled';

import { requestTodos } from 'store/slice/todoListSlice';
import { useAppDispatch, useAppSelector } from 'store/slice/hooks';

import { TaskBoard, TodoListItem } from 'pages/todos';

const TodoList: FC = () => {
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
          {todoList?.map(({ id, content, isCheck }) => (
            <TodoListItem key={id} content={content} isCheck={isCheck} />
          ))}
        </ul>
      </TaskBoard>
    </Container>
  );
};

const Container = styled.main`
  padding: 20px;

  ul li + li {
    margin-top: 20px;
  }
`;

export default TodoList;
