import { createGlobalStyle } from 'styled-components';
// TODO: buy a licence for this image before the release
// import houses from '../assets/images/houses.jpg';
// import handwriting from '../assets/images/handwriting.jpg';
import letters from '../assets/images/letters.jpg';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --pink: #e9abc8;
    --blue: #73a7dc;
  }
  html {
    font-size: 10px;
    overflow: auto;
    position: relative;

    &:before {
      content: "";
      position: fixed;
      left: 0;
      right: 0;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      background-image: url(${letters});
      background-size: 520px;
      /* filter: brightness(0.8) grayscale(0.4); */
      opacity: 0.15;
    }
    
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--pink) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--pink) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }


  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
