interface ITodos {
  count: number;
  todoList: todo[];
}

interface ITodo {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}
