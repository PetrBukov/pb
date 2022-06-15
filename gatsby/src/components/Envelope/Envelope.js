import React from 'react';
import {
  Container,
  Content,
  RoundStamp,
  SenderAddress,
  SenderInfo,
  SenderName,
  MarkStamp,
  StampsPositionContainer,
  StampsInnerWrapper,
  WavesStamp,
} from './Envelope.styles';
// TODO: buy licences for this images before the release
import tempMarkStamp from '../../assets/images/mark-stamp.png';
import wavesStamp from '../../assets/images/short-wave.svg';
import roundStamp from '../../assets/images/spb-stamp.svg';

export const Envelope = () => (
  <Container>
    <Content>
      <SenderInfo className="handwriting">
        <SenderName>Petr Bukov</SenderName>
        <SenderAddress>
          <span>Planet Earth, Solar System,</span>
          <span>Orion Arm, Milky Way,</span>
          <span>the Universe</span>
        </SenderAddress>
      </SenderInfo>
      {/* TODO: get this image from the backend */}
      <StampsPositionContainer>
        <StampsInnerWrapper>
          <MarkStamp src={tempMarkStamp} />
        </StampsInnerWrapper>
        <WavesStamp src={wavesStamp} />
        <RoundStamp src={roundStamp} />
      </StampsPositionContainer>
    </Content>
  </Container>
);
