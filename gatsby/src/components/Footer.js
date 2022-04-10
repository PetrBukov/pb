import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  margin-top: 3rem;

  p {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="handwriting">
        &copy; Petr Bukov {new Date().getFullYear()}
      </p>
    </FooterStyles>
  );
}
