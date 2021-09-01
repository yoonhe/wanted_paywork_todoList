import { useCallback, useState } from 'react';
import { filterList } from '../utils/filterList';

interface IUseFilterListParam {
  initialTodos: ITodos;
  type: TTodoFilter;
}

type TReturnTuple = [
  ITodos,
  ({ updateTodos }: { updateTodos: ITodos }) => void,
];

export const useFilterList = ({
  initialTodos,
  type,
}: IUseFilterListParam): TReturnTuple => {
  const [todoList, setTodoList] = useState<ITodos>(
    filterList({ list: initialTodos.todoList, type }),
  );

  const updateTodoList = useCallback(
    ({ updateTodos }: { updateTodos: ITodos }) => {
      setTodoList(updateTodos);
    },
    [],
  );

  return [todoList, updateTodoList];
};
