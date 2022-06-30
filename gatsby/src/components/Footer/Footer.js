import React from 'react';
import { FooterStyles } from './Footer.styles';

export const Footer = () => (
  <FooterStyles>
    <span className="handwriting">
      &copy; Petr Bukov {new Date().getFullYear()}
    </span>
  </FooterStyles>
);
