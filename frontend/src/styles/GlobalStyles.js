import { createGlobalStyle } from 'styled-components';
import dots from '../assets/images/dots.svg';
import modernTypewritter from '../assets/fonts/Modern-Typewritter.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ModernTypewritter; 
    src: url(${modernTypewritter});
  }
  :root { 
    /* base colors */
    --white: #ffffff;
    --black: #000000;
    --pink: #f30084;

    /* grey (gray) colors */
    --grey-lighten-5: #fafafa;
    --grey-lighten-4: #f5f5f5;
    --grey-lighten-3: #eeeeee;
    --grey-lighten-2: #e0e0e0;
    --grey-lighten-1: #bdbdbd;
    --grey: #9e9e9e;
    --grey-darken-1: #757575;
    --grey-darken-2: #616161;
    --grey-darken-3: #424242;
    --grey-darken-4: #212121;
    --gray-lighten-5: var(--grey-lighten-5);
    --gray-lighten-4: var(--grey-lighten-4);
    --gray-lighten-3: var(--grey-lighten-3);
    --gray-lighten-2: var(--grey-lighten-2);
    --gray-lighten-1: var(--grey-lighten-1);
    --gray: var(--grey);
    --gray-darken-1: var(--grey-darken-1);
    --gray-darken-2: var(--grey-darken-2);
    --gray-darken-3: var(--grey-darken-3);
    --gray-darken-4: var(--grey-darken-4);

    /* size constants */
    --maxWidth: 1200px;

    /* theme color constants */
    --primary-color: var(--pink);
    --dark-color: var(--black);
    --light-color: var(--white);
  }
  html {
    font-size: 10px;
    position: relative;
    color: var(--dark-color);

    --size: 40px;
    @media(max-width: 800px) {
      --size: 20px;
    }
    --borderSize: calc(var(--size) / 2);
    box-sizing: border-box;
    border: var(--borderSize) solid var(--dark-color);
    border-color: var(--dark-color);
  }
  
  body {
    min-height: calc(100vh - var(--size));
    background-image: url(${dots});
    background-repeat: repeat;
    background-size: 642px;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--dark-color);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--primary-color) ;
    border-radius: 6px;
    border: 3px solid var(--dark-color);
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--primary-color) var(--dark-color);
  }
`;

export default GlobalStyles;
