import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';
import palette from './palette';

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
    color: ${palette.white};
  }
  body::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: ${palette.white};
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`;

export default GlobalStyle;
