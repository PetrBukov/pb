import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import grunge from '../assets/images/grunge.png';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);
  background-color: white;
  background-image: url(${grunge}),
    repeating-linear-gradient(
      132deg,
      var(--pink),
      var(--pink) 20px,
      white 20px,
      white 40px,
      var(--blue) 40px,
      var(--blue) 60px,
      white 60px,
      white 80px
    );
  background-size: 800px, auto;
  background-repeat: repeat, no-repeat;
  padding: 15px;
  padding: clamp(15px, 1.5vw, 30px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyles>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyles>
    </>
  );
}
