import { FC, useEffect } from 'react';
import styled from '@emotion/styled';

import { colorPallete } from 'utils/color';
import { filterList } from './utils/filterList';

import { TodoList } from 'pages/todos';

import { useFilterList } from './hooks/useFilterList';
import { useAppDispatch } from 'store/slice/hooks';

import { requestCheckTodo } from 'store/slice/todoListSlice';

interface ITaskBoard {
  title: string;
  todos: ITodos;
  topColor: 'yellow' | 'green';
  type: TTodoFilter;
}

const TaskBoard: FC<ITaskBoard> = ({ topColor, title, type, todos }) => {
  const dispatch = useAppDispatch();

  const [{ todoList, count }, setTodoList] = useFilterList({
    initialTodos: todos,
    type,
  });

  const handleCheckClick = ({ id, isCheck }: IRequestCheckTodoPayload) => {
    dispatch(requestCheckTodo({ id, isCheck }));
  };

  useEffect(() => {
    const updateTodos = filterList({ list: todos.todoList, type });

    setTodoList({ updateTodos });
  }, [type, todos, setTodoList]);

  return (
    <Section topColor={topColor}>
      <Top>
        <h2>
          {title}
          <em>( {count} )</em>
        </h2>
      </Top>
      <TodoList todos={todoList} onCheckClick={handleCheckClick} />
    </Section>
  );
};

const Section = styled.section<ISectionProps>`
  padding: 30px;
  width: 400px;
  background: #fff;
  border-top: 10px solid;
  border-color: ${({ topColor }) => `${colorPallete[topColor]}`};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Top = styled.div`
  margin-bottom: 20px;

  h2,
  h2 em {
    font-size: 24px;
  }

  em {
    margin-left: 5px;
  }
`;

interface ISectionProps {
  topColor: 'yellow' | 'green';
}

export default TaskBoard;
