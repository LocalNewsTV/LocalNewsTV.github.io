import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { section, sectionAccent } from '../../assets/Theming';

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

export const ExperienceContainer = styled.div`

`;

export const ExperienceTabSection = styled.div`

`;

export const ExperienceList = styled.ul`

`;

export const ExperienceOption = styled.button`

`;
