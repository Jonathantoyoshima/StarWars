import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{margin: 0; padding: 0; box-sizing: border-box}
    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;
        width: 100%;
        height: 100%;
        background-color: var(--black);
        color: white;
        font-family: Arial, Helvetica, sans-serif;
    }
    :root {
        --black: #1c1e22;
        --primary: #FFE300;
    }
`;

export const breakpoints = {
    sm: `(max-width: 800px)`
}