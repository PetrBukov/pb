import styled from 'styled-components';
// TODO: buy a licence for this image before the release
import grunge from '../../assets/images/grunge.png';

// TODO: apply sizes of real envelope
// max-width: 830px;
// height: 415px;
export const Container = styled.div`
  position: relative;
  width: calc(100% - 4px);
  max-width: 830px;
  height: clamp(200px, 42vw, 415px);
  /* background-color: rgb(242, 242, 242); */
  background-color: #fefefe;
  background-image: url(${grunge}),
    repeating-linear-gradient(
      132deg,
      var(--pink),
      var(--pink) 20px,
      transparent 20px,
      transparent 40px,
      var(--blue) 40px,
      var(--blue) 60px,
      transparent 60px,
      transparent 80px
    );
  background-size: 800px, auto;
  background-repeat: repeat, no-repeat;
  box-shadow: 0 2px 7px rgb(0 0 0 / 30%);
  padding: 15px;
  padding: clamp(10px, 1.2vw, 15px);
  display: flex;
`;

export const Content = styled.div`
  background-color: #fefefe;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const SenderInfo = styled.div`
  padding: 15px 20px;
  display: grid;
  grid-gap: 4px;
  align-content: start;
`;
export const SenderName = styled.h1`
  font-size: clamp(24px, 5vw, 50px);
  letter-spacing: 4px;
  color: var(--black);
`;

export const SenderAddress = styled.div`
  max-width: 245px;
  display: grid;
  grid-gap: 4px;
  color: #2e2e2ecc;
  font-size: clamp(8px, 2vw, 18px);
  letter-spacing: 2px;

  @media (max-width: 800px) {
    grid-gap: 2px;
  }

  span:nth-child(2) {
    transform: translateX(3px);
  }

  span:nth-child(3) {
    transform: translateX(-1px);
  }
`;

export const StampsPositionContainer = styled.div`
  width: clamp(100px, 17vw, 170px);
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const StampsInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 0;
`;

export const MarkStamp = styled.img`
  width: 100%;
  filter: drop-shadow(0px 0px 1px #c4c4c4);
`;

export const WavesStamp = styled.img`
  position: absolute;
  top: 22%;
  left: -35%;
  width: 64%;
  transform: rotate(8deg);
`;

export const RoundStamp = styled.img`
  position: absolute;
  bottom: -11%;
  left: -20%;
  width: 62%;
`;
