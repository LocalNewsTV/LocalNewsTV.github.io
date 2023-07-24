import styled from '@emotion/styled';
import mq from '../../../utilities/mq';
import { hero, section, black, accent, bluebox, sectionAccent } from '../../../assets/Theming';
import { Link } from 'react-router-dom';

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: content-box;
  align-items: center;
  width: 100%;
  background-color: ${section};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${accent};
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

export const IntroContainer = styled.div`
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
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
  box-sizing: content-box;
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
  box-sizing: content-box;
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

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  filter: grayscale(100%);
  height: auto;
  min-height: 400pt;
  margin: 85pt 0;
  max-width: ${mq.tablet};
  &:hover {
    transition: 0.3s;
    filter: grayscale(0);
  }
  
`;

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: auto;
  justify-content: center;
  align-items: center;
  @media (min-width: ${mq.tablet}){
    &:nth-of-type(odd){
      margin-right: 1em;
      padding: 10pt;
    }
    position: absolute;
    align-items: start;
    top: 0;
    width: 50%;
    & #profile:hover {
      border: 3px solid #00688B;
    }
  }
  & #profile {
    background-color: #f5fdfe;
  }
  &:nth-of-type(odd){
    left: 0;
    border-radius: 10pt;

  }
  &:nth-of-type(even){
    right: 0;
  }
`;
export const AboutImageDiv = styled.div`

  height: 250pt;
  width: 250pt;
  border-radius: 3pt;
  filter: grayscale(50%);
  @media (min-width: ${mq.tablet}){
    border: 3px solid ${black};
    position: absolute;
    left: 50pt;
    top: 30pt;
      & img {
    left: -10pt;
    top: -10pt;
  }
  &:hover {
    transition: 0.3s ease-in;
    filter: grayscale(0);
    left: 55pt;
    top: 35pt;
    & img {
      transition: 0.3s ease-in;
      left: -20pt;
      top: -20pt;
    }
  }
`;
export const AboutImage = styled.img`
  position: relative;
  height: 250pt;
  width: 250pt;
  z-index: 2;
  border-radius: 3pt;
`

export const RecentSkills = styled.ul`
  columns: 2;
  list-style-image: url('/ListMarker.svg');
`;

export const ExperienceContainer = styled.div`

`;

export const ExperienceTabSection = styled.div`

`;

export const ExperienceList = styled.ul`

`;

export const ExperienceOption = styled.button`

`;
