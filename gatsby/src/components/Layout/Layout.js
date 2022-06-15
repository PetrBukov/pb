import React from 'react';
import 'normalize.css';

import { GlobalStyles, Typography } from '../../styles';
import { Envelope } from '../Envelope';
import { MainContent } from '../MainContent';
import { Nav } from '../Nav';
import { ContentContainer } from './Layout.styles';
import { Footer } from '../Footer';

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Envelope />
    <ContentContainer>
      <Nav />
      <MainContent>{children}</MainContent>
    </ContentContainer>
    <Footer />
  </>
);
