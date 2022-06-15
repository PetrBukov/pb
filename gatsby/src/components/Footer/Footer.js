import React from 'react';
import { FooterStyles } from './Footer.styles';

export const Footer = () => (
  <FooterStyles>
    <p className="handwriting">&copy; Petr Bukov {new Date().getFullYear()}</p>
  </FooterStyles>
);
