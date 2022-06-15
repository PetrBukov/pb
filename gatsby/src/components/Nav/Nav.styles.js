import styled from 'styled-components';

export const NavStyles = styled.nav`
  position: relative;
  width: clamp(192px, 50vw, 500px);
  background-color: #f6efe4;
  background: linear-gradient(185deg, #fcfaf6, 90%, #f6efe4);
  background-size: cover;
  padding: 4.5% 3%;
  box-shadow: 0px 0px 2px #c4c4c4;
  border-radius: 8px;
  margin-bottom: -10px;
  margin-left: 5%;

  ul {
    z-index: 5;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    grid-gap: 8px;
    grid-row-gap: 16px;

    li {
      list-style: none;
      font-size: clamp(10px, 1.55vw, 14px);
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

  @media (max-width: 870px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
