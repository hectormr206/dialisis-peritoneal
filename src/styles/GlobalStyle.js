import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --body-background: #181818;
    --color-primary: #fff;
    --color-secondary: #909090;
    --font-family-primary: 'Noto Sans JP';
    --font-size: 16px;
    --header-height: 60px;
    --footer-height: 60px;
  }

  *, *::before, *::after {
    font-family: var(--font-family-primary), sans-serif;
    font-size: var(--font-size);
    box-sizing: inherit;
  }
  
  html {
    height: 100%;
    color: var(--color-primary);
    box-sizing: border-box;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    padding-inline-start: 0;
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    margin: 0 auto;
    height: 100%;
    width: 100%;
    background: var(--body-background);
    overscroll-behavior: none;
  }

  #app {
    height: 100%;
    overflow-x: hidden;
  }
`
