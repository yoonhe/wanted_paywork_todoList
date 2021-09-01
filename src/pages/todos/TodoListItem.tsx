import { FC } from 'react';
import styled from '@emotion/styled';

import { colorPallete } from 'utils/color';
import { CgCheckO } from 'react-icons/cg';

interface ITodoListItem {
  content: 'string';
  isCheck: boolean;
}

const TodoListItem: FC<ITodoListItem> = ({ content, isCheck }) => {
  return (
    <Item isCheck={isCheck}>
      <Top>{content}</Top>
      <Bottom>
        <p></p>
        <p>
          <Button type="button" isCheck={isCheck}>
            <CgCheckO />
          </Button>
        </p>
      </Bottom>
    </Item>
  );
};

const Item = styled.li<IButtonStyle>`
  border: 1px solid ${colorPallete.gray};
  border-radius: 10px;
  opacity: ${({ isCheck }) => isCheck && 0.8};
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
`;

interface IButtonStyle {
  isCheck: boolean;
}

interface IButtonStyle {
  isCheck: boolean;
}

export default TodoListItem;
