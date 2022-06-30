import styled from 'styled-components';

export const EssayPreviewWithPhotoStyles = styled.section`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: clamp(12px, 2vw, 20px);
  align-items: start;
  margin: 2rem 0;

  a {
    font-weight: 400;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 740px) {
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
    }
  }

  @media (max-width: 580px) {
    display: block;
  }
`;

export const PhotoContainer = styled.figure`
  margin: 0;
  margin-bottom: 20px;
  grid-row: span 3;
  background-color: #f6efe4;
  background: linear-gradient(185deg, #fcfaf6, 90%, #f6efe4);
  background-size: cover;
  padding: 5% 5% 8% 5%;
  box-shadow: 0px 0px 2px #c4c4c4;
  transform: rotate(-1deg);

  img {
    max-width: 100%;
  }

  figcaption {
    padding: 0 3%;
    font-size: clamp(16px, 2vw, 20px);
    font-family: Handwriting, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    line-height: 1.2em;
    color: #2e2e2e7d;
  }
`;
