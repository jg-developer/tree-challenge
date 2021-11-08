import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #f0f0f5;
    color: #46505A;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  body, input, textarea, button{
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  button{
    cursor: pointer;
    outline: none;
  }

  html{
    @media(max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media(max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }
`;
