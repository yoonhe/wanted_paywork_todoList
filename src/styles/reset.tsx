import { css } from '@emotion/react';

const reset = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #333;
  }
  div,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
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
