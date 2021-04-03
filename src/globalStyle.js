import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    pading: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
html,body{
    overflow-x: hidden;
}

`;
export default GlobalStyle