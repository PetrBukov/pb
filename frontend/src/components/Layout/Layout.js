import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Nav } from '../Nav';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';

const ContentStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem 2rem 6rem 2rem;
`;

export const Layout = ({
  location,
  title,
  children,
  className,
  pageContext,
  path,
  ...rest
}) => {
  if (pageContext.layout === 'thumbnail') return children;

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Helmet>
      <div>
        <Nav pageContext={pageContext} />
        <ContentStyles>{children}</ContentStyles>
        <footer>footer</footer>
      </div>
    </>
  );
};
