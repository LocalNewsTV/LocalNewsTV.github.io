import styled from '@emotion/styled';
import mq from '../../../utilities/mq';
import { hero, section, black, accent } from '../../../assets/Theming';

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  align-items: center;
  width: 100%;
  background-color: ${section};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-items: center;
  max-width: ${mq.tablet};
`;

export const IntroContainer = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  max-width: ${mq.tablet};
`;

export const SectionCont = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  background-color: ${section};
  &:nth-of-type(1) {
    background-color: ${hero};
    min-height: 100dvh;
    padding: 50pt 5pt 0 15pt;
  }
  @media (min-width: ${mq.mobile}){
    
  }
`
export const HR = styled.hr`
  width: 55%;
  max-width: 450pt;
  color: #F5F5F5;
`
export const IntroP = styled.p`
  font-family: 'Open Sans Variable', sans-serif;
  color: ${accent};
  font-size: 14pt;
  margin: 0;
  padding: 0;
  @media (min-width: ${mq.mobile}){
    font-size: 16pt;
  }
`;

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

export const SubP = styled.p`
  margin: 0;
  padding: 0;
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

export const HeroImg = styled.img`
  width: 90%;
  max-width: 300pt;
`
export const HeaderTwo = styled.h2`

`;
