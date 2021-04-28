import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import logo from '../../../static/logo.svg';
import { useRowFinder } from '../../hooks';
import accent from '../../assets/images/accent.svg';

const NavStyles = styled.nav`
  border-bottom: 5px solid var(--primary-color);
  display: grid;
  grid-template-columns: 1fr;

  h1 {
    display: grid;
    justify-items: center;
    margin: 2em;

    img {
      width: 250px;
    }

    a.logo {
      font-size: 0;
    }

    @media (max-width: 550px) {
      margin: 1em;
    }
  }
`;

const NavUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 3rem 2rem 2rem 2rem;
  box-shadow: rgb(0 0 0 / 6%) 0px -4px 4px;
  background-color: var(--light-color);

  @media (max-width: 550px) {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    a > span {
      display: block;
      padding: 1rem 0;
    }
    a:hover {
      span:before {
        display: none;
      }
    }
  }
`;

const NavLi = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  align-content: center;
  grid-gap: 2rem;
  margin: 1rem;
  .hideYoSelf {
    visibility: hidden;
  }
  ${(props) =>
    props.row >= 2 &&
    css`
      margin: 0;
      & > *,
      span {
        transform: scale(0.55);
      }
      small.top,
      small.bottom {
        display: none;
      }
    `}
  a {
    font-size: 4.2rem;
    font-family: ModernTypewritter, Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark-color);
    text-decoration: none;
    line-height: 1.3;
    letter-spacing: 1px;
    &[aria-current='page'],
    &.current-parent {
      .nav-title {
        text-decoration: underline;
        text-decoration-color: var(--primary-color);
      }
    }

    .nav-title {
      position: relative;
    }

    small {
      font-size: 1.3rem;
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      text-align: right;
      line-height: 10px;
      position: relative;
      pointer-events: none;
      letter-spacing: initial;
    }

    small.top {
      top: 9px;
    }
    small.bottom {
      top: -8px;
    }
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    margin: 0;
    text-align: center;
    & > *,
    span {
      transform: scale(1);
      font-size: 2rem;
    }
    small.top,
    small.bottom {
      display: none;
    }
  }
`;

const Text = styled.span`
  font-size: 3.2rem;
  position: relative;
  &:before {
    width: 0.9em;
    height: 0.9em;
    content: '';
    pointer-events: none;
    position: absolute;
    top: -9px;
    left: -9px;
    z-index: 0;
    visibility: hidden;
    background: url(${accent}) no-repeat;
  }
  &:hover:before {
    visibility: visible;
  }
  a {
    color: inherit;
    text-decoration-color: var(--primary-color);
  }
`;

export const Nav = () => {
  const { ref, getRow } = useRowFinder();

  return (
    <NavStyles>
      <h1>
        <Link to="/" className="logo">
          <img
            width="100"
            src={logo}
            alt="Петр Буков - личный блог - главная страница"
          />
        </Link>
      </h1>
      <NavUl ref={ref}>
        <NavLi row={getRow(0)}>
          <Link to="/blog">
            <small className="top">тут 🔥</small>
            <Text as="span">
              <span className="nav-title">Блог</span>
            </Text>
            <small className="bottom hideYoSelf">x</small>
          </Link>
        </NavLi>
        <NavLi row={getRow(1)}>
          <Link to="/about">
            <small className="top">узнать</small>
            <Text as="span">
              <span className="nav-title">Обомне</span>
            </Text>
            <small className="bottom">больше</small>
          </Link>
        </NavLi>
        <NavLi row={getRow(2)}>
          <Link to="/resources">
            <small className="top">вкусные</small>
            <Text as="span">
              <span className="nav-title">Ресурсы</span>
            </Text>
            <small className="bottom">полезные</small>
          </Link>
        </NavLi>
      </NavUl>
    </NavStyles>
  );
};
