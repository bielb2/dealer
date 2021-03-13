import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --bg-color: #2B222F;
    --nav-color: #18131F;
    --title-color: #FFFFFF;
    --titleSemi-color: #EDEDE3;
    --border-color: #726C75;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--bg-color);
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button, svg {
    cursor: pointer;
  }
`;
