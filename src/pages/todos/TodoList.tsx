import { FC } from 'react';

import TodoListItem from './TodoListItem';

interface ITodoListProps {
  todos: ITodo[];
  onCheckClick: ({ id, isCheck }: IRequestCheckTodoPayload) => void;
}

const TodoList: FC<ITodoListProps> = ({ todos, onCheckClick }) => {
  return (
    <ul>
      {todos?.map(({ id, content, isCheck }) => (
        <TodoListItem
          key={id}
          id={id}
          content={content}
          isCheck={isCheck}
          onCheckClick={() => onCheckClick({ id, isCheck: !isCheck })}
        />
      ))}
    </ul>
  );
};

export default TodoList;
