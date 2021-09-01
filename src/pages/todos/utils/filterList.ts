export const filterList = ({
  list,
  type,
}: {
  list: ITodo[];
  type: TTodoFilter;
}): ITodos => {
  const callbacks = {
    incomplete: ({ isCheck }: { isCheck: boolean }) => isCheck === false,
    complete: ({ isCheck }: { isCheck: boolean }) => isCheck === true,
  };

  const todoList = list.filter(callbacks[type]);
  const count = todoList.length;

  return {
    todoList,
    count,
  };
};
