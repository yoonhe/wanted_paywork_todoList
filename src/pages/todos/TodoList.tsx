import { FC } from 'react';

import TodoListItem from './TodoListItem';

interface ITodoListProps {
  todos: ITodo[];
}

const TodoList: FC<ITodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos?.map(({ id, content, isCheck }) => (
        <TodoListItem key={id} content={content} isCheck={isCheck} />
      ))}
    </ul>
  );
};

export default TodoList;
