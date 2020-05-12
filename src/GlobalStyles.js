import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700&display=swap');
  @import '../node_modules/react-vis/dist/style.css';
  
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    background-color: #f4f4f4;
    color: #252733;
  }
`;

export default GlobalStyles;
