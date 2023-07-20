import styled from '@emotion/styled';
import mq from '../../../utilities/mq';
import { hero, section, black } from '../../../assets/Theming';

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${section};
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20pt;
  align-items: left;
  justify-content: space-between;
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
  &:first-of-type {
    background-color: ${hero};
    min-height: 100dvh;
    padding-top: 50pt;
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
  color: #CC3333;
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
  font-family: 'Open Sans Variable', sans-serif;
  margin: 0;
  padding: 0;
`;

export const MiniP = styled.p`
  font-family: 'Open Sans Variable', sans-serif;
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
