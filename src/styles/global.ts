import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --bg-color: #18131F;
    --nav-color: #2B222F;
    --title-color: #FFFFFF;
    --titleSemi-color: #EDEDE3;
    --border-color: #726C75;
    --bg-red-color: #FF1430;
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

  .bodyContent {
    height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 14px;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6, strong, a {
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: var(--title-color);
  }

  button, svg {
    cursor: pointer;
  }
`;
