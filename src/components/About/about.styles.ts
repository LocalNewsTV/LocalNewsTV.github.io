import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { black, accent, sectionAccent } from '../../assets/Theming';
import { Link } from 'react-router-dom';

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

export const HeaderTwo = styled.h2`
  position: absolute;
  top: 0;
  font-size: 16pt;
  left: 20%;
  margin: 2em 0 0 0;
  padding: 0;
`;

export const BodyText = styled.p`
  margin: 8pt 0;
  padding: 0;
  text-align: left;
`;


export const SkillsItem = styled.li`
  font-size: 10pt;
`;

export const AccentSpan = styled.span`
  color: ${sectionAccent};
  font-size: 12pt;
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
    & #profile {
      margin-top: 0;
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
    margin-top: 25pt;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${accent};
`;
