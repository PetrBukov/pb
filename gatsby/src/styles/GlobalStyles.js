import { createGlobalStyle } from 'styled-components';
// TODO: buy a licence for this image before the release
import woodenBackground from '../assets/images/wooden-bg.jpg';

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --white: #ffffff;
    --pink: #e9abc8;
    --blue: #73a7dc;
  }

  html {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;  
    display: flex; 
    flex-direction: column;
    flex-grow: 1;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: linear-gradient(185deg, #ffffffa8, 90%, #ffffff4f),
    url(${woodenBackground});
    background-size: 100%; 
    padding: clamp(2px, 2vw, 20px);
  }

  #gatsby, #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
