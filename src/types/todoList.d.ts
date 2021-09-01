type TTodoFilter = 'incomplete' | 'complete';

interface ITodos {
  todoList: ITodo[];
  count: number;
}

interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}
