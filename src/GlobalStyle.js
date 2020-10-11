import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-tap-highlight-color: transparent;
    }

    ::selection {
        background: none;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        background-color: #20272b;
        box-sizing: border-box;
        font-weight: 400;
        line-height: 1.7;
        overflow: hidden;
        font-family: 'Segoe UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
