import styled from 'styled-components';

export const Paper = styled.main`
  position: relative;
  background-color: #fefefe;
  border-radius: 2px;
  padding: 4.5% 4%;
  flex-grow: 1;
  box-shadow: 0 3px 6px rgb(0 0 0 / 30%);

  font-size: 16px;
  line-height: 26px;
  font-weight: 200;
  color: var(--black);

  p {
    letter-spacing: 1px;
  }

  ::before,
  ::after {
    content: '';
    position: absolute;
    bottom: 15px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  ::before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  ::after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  :hover::before,
  :hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  :hover::before {
    left: 5px;
  }

  :hover::after {
    right: 5px;
  }
`;
