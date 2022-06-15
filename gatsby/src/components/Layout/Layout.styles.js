import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 760px;
  min-height: 100%;
  margin-bottom: 100px;
  margin-top: clamp(-175px, -19.8vw, -42px);

  @media (max-width: 800px) {
    width: calc(100% - 20px);
  }
`;
