import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
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
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}
