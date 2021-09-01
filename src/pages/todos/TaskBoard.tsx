import { FC, useEffect } from 'react';
import styled from '@emotion/styled';

import { colorPallete } from 'utils/color';
import { filterList } from './utils/filterList';
import { useFilterList } from './hooks/useFilterList';
import { TodoList } from 'pages/todos';

interface ITaskBoard {
  title: string;
  todos: ITodos;
  topColor: 'yellow' | 'green';
  type: TTodoFilter;
}

const TaskBoard: FC<ITaskBoard> = ({ topColor, title, type, todos }) => {
  const [{ todoList, count }, setTodoList] = useFilterList({
    initialTodos: todos,
    type,
  });

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
      <TodoList todos={todoList} />
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
