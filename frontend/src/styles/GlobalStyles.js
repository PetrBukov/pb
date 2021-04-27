import { createGlobalStyle } from 'styled-components';
import dots from '../assets/images/dots.svg';

const GlobalStyles = createGlobalStyle`
  :root { 
    /* base colors */
    --white: #ffffff;
    --black: #000000;

    /* teal colors */
    --teal-lighten-5: #e0f2f1;
    --teal-lighten-4: #b2dfdb;
    --teal-lighten-3: #80cbc4;
    --teal-lighten-2: #4db6ac;
    --teal-lighten-1: #26a69a;
    --teal: #009688;
    --teal-darken-1: #00897b;
    --teal-darken-2: #00796b;
    --teal-darken-3: #00695c;
    --teal-darken-4: #004d40;
    --teal-accent-1: #a7ffeb;
    --teal-accent-2: #64ffda;
    --teal-accent-3: #1de9b6;
    --teal-accent-4: #00bfa5;

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

    /* theme constants */
    --primary-color-lighten-5: var(--teal-lighten-5);
    --primary-color: var(--teal);
    --secondary-color: var(--grey-darken-3);
    --title-color: #007cac;
    --dark-color: var(--black);
    --light-color: var(--white);
  }
  html {
    font-size: 10px;
    position: relative;
    color: var(--dark-color);
  }
  body {
    min-height: 100vh;
    /* background-color: #f0dab6; */

    background-image: url(${dots});
    background-repeat: repeat;
    background-size: 642px;
  }
`;

export default GlobalStyles;
