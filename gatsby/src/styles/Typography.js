import { createGlobalStyle } from 'styled-components';

import khulaLight from '../assets/fonts/Khula-Light.ttf';
import khulaRegular from '../assets/fonts/Khula-Regular.ttf';
import khulaSemiBold from '../assets/fonts/Khula-SemiBold.ttf';
import khulaBold from '../assets/fonts/Khula-Bold.ttf';
import khulaExtraBold from '../assets/fonts/Khula-ExtraBold.ttf';
import grapeNutsRegular from '../assets/fonts/GrapeNuts-Regular.ttf';

export const Typography = createGlobalStyle`
  /* TODO: remove unnecessary varriant before release */
  @font-face {
    font-family: Trillian;
    src: url(${khulaLight});
    font-weight: 200;
  }
  @font-face {
    font-family: Trillian;
    src: url(${khulaRegular});
    font-weight: 400;
  }
  @font-face {
    font-family: Trillian;
    src: url(${khulaSemiBold});
    font-weight: 500;
  }
  @font-face {
    font-family: Trillian;
    src: url(${khulaBold});
    font-weight: 700;
  }
  @font-face {
    font-family: Trillian;
    src: url(${khulaExtraBold});
    font-weight: 900;
  }
  @font-face {
    font-family: Handwriting;
    src: url(${grapeNutsRegular});
    font-weight: 400;
  }

  html {
    font-family: Trillian, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p, li {
    letter-spacing: 0.5px;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  h2 {
    font-size: clamp(36px, 5.5vw, 50px);
    font-family: Handwriting, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.2em;
    color: var(--black);
  }

  a {
    color: var(--black);
    text-decoration: none;
  }
  a[aria-current="page"] {
    text-decoration: underline var(--pink) 0.15em;
  }

  .center {
    text-align: center;
  }

  .handwriting {
    font-family:  Handwriting, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
