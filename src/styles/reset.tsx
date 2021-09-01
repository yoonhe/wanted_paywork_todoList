import { css } from '@emotion/react';

const reset = css`
  * {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  button {
    border: none;
    background: none;
  }
  a {
    text-decoration: none;
    color: initial;
  }
  em {
    font-style: normal;
  }
  li {
    list-style: none;
  }
`;

export default reset;
