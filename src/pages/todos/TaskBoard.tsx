import { FC } from 'react';
import styled from '@emotion/styled';

import { colorPallete } from 'utils/color';

interface ITaskBoard {
  children: React.ReactChild;
  topColor: 'yellow' | 'green';
  title: string;
  count: number;
}

const TaskBoard: FC<ITaskBoard> = ({ children, topColor, title, count }) => {
  return (
    <Section topColor={topColor}>
      <Top>
        <h2>
          {title}
          <em>( {count} )</em>
        </h2>
      </Top>
      {children}
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
