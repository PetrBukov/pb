import React from 'react';
import { Link } from 'gatsby';
import { NavStyles } from './Nav.styles';

export const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <Link to="/">Hot Essays</Link>
      </li>
      <li>
        <Link to="/blog">The Blog</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/contact">Contacts</Link>
      </li>
    </ul>
  </NavStyles>
);
