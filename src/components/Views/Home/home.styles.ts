import styled from '@emotion/styled';
import mq from '../../../utilities/mq';
import { hero, section, sectionAccent } from '../../../assets/Theming';

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  align-items: center;
  width: 100%;
  background-color: ${section};
`;

export const BodyText = styled.p`
  margin: 8pt 0;
  padding: 0;
  text-align: left;
`;
export const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-items: center;
  max-width: ${mq.tablet};
`;

export const SkillsItem = styled.li`
  font-size: 10pt;
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
  @media (min-width: ${mq.mobile}){
    
  }
`

export const SmallSectionCont = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10pt;
  min-height: 40svh;
  align-items: center;
  width: 100%;
  background-color: ${section};
  @media (min-width: ${mq.mobile}){
    
  }
`;
export const HR = styled.hr`
  width: 35%;
  max-width: 450pt;
  color: #F5F5F5;
`


export const SubP = styled.p`
  margin: 0;
  padding: 0;
`;

export const HeroImg = styled.img`
  width: 90%;
  max-width: 300pt;
`;
export const HeaderTwo = styled.h2`
  position: absolute;
  top: 0;
  font-size: 16pt;
  left: 20%;
  margin: 2em 0 0 0;
  padding: 0;
`;
export const AccentSpan = styled.span`
  color: ${sectionAccent};
  font-size: 12pt;
`;
