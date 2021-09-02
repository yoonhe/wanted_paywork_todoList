import { FC } from 'react';
import styled from '@emotion/styled';
import { CgCheckO } from 'react-icons/cg';

import { colorPallete } from 'utils/color';

interface ITodoListItem {
  id: string;
  content: string;
  isCheck: boolean;
  onCheckClick: () => void;
}

const TodoListItem: FC<ITodoListItem> = ({
  content,
  isCheck,
  onCheckClick,
}) => (
  <Item>
    <Top>{content}</Top>
    <Bottom>
      <p></p>
      <p>
        <Button type="button" isCheck={isCheck} onClick={onCheckClick}>
          <CgCheckO />
        </Button>
      </p>
    </Bottom>
  </Item>
);

const Item = styled.li`
  border: 1px solid ${colorPallete.gray};
  border-radius: 10px;
`;

const Top = styled.div`
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top: 1px solid ${colorPallete.gray};
`;

const Button = styled.button<IButtonStyle>`
  display: flex;
  color: ${({ isCheck }) =>
    isCheck ? `${colorPallete.green}` : `${colorPallete.gray}`};
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: ${colorPallete.green};
  }
`;

interface IButtonStyle {
  isCheck: boolean;
}

export default TodoListItem;
