import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { black, sectionAccent, section, hero } from '../../assets/Theming';

export const BigP = styled.p`
  font-family: 'Open Sans Variable', sans-serif;
  font-size: 26pt;
  color: ${black};
  margin: 0;
  padding: 0;
  &:nth-of-type(3){
    color: #8686A3;
  }
  @media (min-width: ${mq.mobile}){
    font-size: 53pt;
  }
`;

export const FullSectionCont = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10pt;
  align-items: center;
  width: 100%;
  background-color: ${section};
  &:nth-of-type(1) {
    background-color: ${hero};
    min-height: 100dvh;
    padding: 50pt 5pt 0 15pt;
  }
`;

export const IntroContainer = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  max-width: ${mq.tablet};
`;

export const IntroP = styled.p`
  font-family: 'Open Sans Variable', sans-serif;
  color: ${sectionAccent};
  font-size: 14pt;
  margin: 0;
  padding: 0;
  @media (min-width: ${mq.mobile}){
    font-size: 16pt;
  }
`;

export const MiniP = styled.p`
  font-size: 10pt;
  margin: 12pt 0 0 0;
  padding: 0;
  max-width: 450pt;
  color: #39394b;
  @media (min-width: ${mq.mobile}){
    font-size: 10pt;
  }
`;
