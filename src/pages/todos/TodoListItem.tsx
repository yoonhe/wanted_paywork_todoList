import { FC } from 'react';
import styled from '@emotion/styled';

import { colorPallete } from 'utils/color';

interface ITodoListItem {
  content: 'string';
}

const TodoListItem: FC<ITodoListItem> = ({ content }) => {
  return <Item>{content}</Item>;
};

const Item = styled.li`
  padding: 20px;
  border: 1px solid ${colorPallete.gray};
  border-radius: 10px;
  & + & {
    margin-top: 20px;
  }
`;

export default TodoListItem;
