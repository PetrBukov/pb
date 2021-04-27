import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import logo from '../../../static/logo.svg';
import { useRowFinder } from '../../hooks';

const NavStyles = styled.nav`
  border-bottom: 5px solid var(--primary-color);
  display: grid;
  grid-template-columns: 1fr;
  h1 {
    display: grid;
    justify-items: center;
    margin: 1em;
    img {
      width: 250px;
    }

    a.logo {
      font-size: 0;

      &:hover {
        img {
          filter: drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.6));
        }
      }
    }
  }
  @media (max-width: 550px) {
    ul {
      padding: 2rem 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

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
  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
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
  &:after {
    content: '•';
    display: grid;
    color: var(--primary-color-lighten-5);
    height: 100%;
    align-items: center;
  }
  &:last-child:after {
    display: none;
  }
  a {
    font-size: 4.2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--title-color);
    text-decoration: none;
    line-height: 1;
    &[aria-current='page'],
    &.current-parent {
      .nav-title {
        text-decoration: underline;
      }
    }

    small {
      font-size: 1.4rem;
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      text-align: right;
      line-height: 10px;
      position: relative;
      pointer-events: none;
    }
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    margin: 0;
    text-align: center;
    /* This gets rid of the X */
    &:after {
      display: none;
    }
    a {
      &:before {
        display: none;
      }
    }
    & > *,
    span {
      transform: scale(1);
      font-size: 2rem;
    }
    small.top,
    small.bottom {
      display: none;
    }
    span.grit {
      padding: 0;
    }
  }
`;

const Text = styled.span`
  font-size: 4.2rem;
  position: relative;
  &:before {
    width: 0.75em;
    height: 0.75em;
    border-radius: 50%;
    content: '';
    pointer-events: none;
    border: 0.08em solid var(--yellow);
    box-shadow: -6px -8px 21px -3px var(--yellow);
    position: absolute;
    z-index: 0;
    --translate: -0.5rem;
    --rotate: 0deg;
    transform: translateX(var(--translate)) translateY(var(--translate))
      rotate(var(--rotate));
    visibility: hidden;
  }
  &:hover:before {
    visibility: visible;
  }
  a {
    color: inherit;
    text-decoration-color: var(--yellow);
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
          <Link to="/teas">
            <small className="top">самый</small>
            <Text as="span">
              <span className="nav-title">Блог</span>
            </Text>
            <small className="bottom">честный</small>
          </Link>
        </NavLi>
        <NavLi row={getRow(1)}>
          <Link to="/chocolate">
            <small className="top">здесь</small>
            <Text as="span">
              <span className="nav-title">Обо мне</span>
            </Text>
            <small className="bottom">пара слов</small>
          </Link>
        </NavLi>
        <NavLi row={getRow(2)}>
          <Link to="/combos">
            <small className="top">полезные</small>
            <Text as="span">
              <span className="nav-title">Ресурсы</span>
            </Text>
            <small className="bottom">ссылки</small>
          </Link>
        </NavLi>
      </NavUl>
    </NavStyles>
  );
};
