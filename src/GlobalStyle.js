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
        color: ${({ theme }) => theme.colors.text[0]};
        background: ${({ theme }) => theme.colors.orange};
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        box-sizing: border-box;
        line-height: 1.7;
        font-family: 'Segoe UI', sans-serif;
        background-color: ${({ theme }) => theme.colors.bg[0]};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .marquee-container.horizontal::after {
        background: #20272b;
        background: linear-gradient(270deg, #20272b 0%, #20272b 10%, rgba(255, 255, 255, 0) 100%);
        right: 0;   
    }

    .marquee-container.horizontal::before {
        background: #20272b;
        background: linear-gradient(90deg, #20272b 0%, #20272b 10%, rgba(255, 255, 255, 0) 100%);
        left: 0;
    }
`;

export default GlobalStyle;
