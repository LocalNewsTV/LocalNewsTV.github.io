/**
 * @desc   Styled Components for the Experience Section
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { accent, bluebox, sectionAccent } from '../../assets/Theming';
import { NavLink } from 'react-router-dom';

type ExperienceProps = {
  selected: boolean;
};

export const AccentSpan = styled.span`
  color: ${sectionAccent};
  font-size: 12pt;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (min-width: ${mq.tablet}){
    padding-left: 1.25em;
    margin-left: 1.25em;
    max-width: 55%;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 55pt 0;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  max-width: ${mq.tablet};
  @media (min-width: ${mq.tablet}){
    flex-direction: row;
  }
`;

export const Employer = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;
  color: ${accent};
`;

export const EmployDate = styled.p`
  font-size: 10pt;
`;

export const ExperienceList = styled.ul`
  list-style-image: url('/ListMarker.svg');
  margin: 0;
  padding: 1em;
`;

export const HeaderTwo = styled.h2`
  position: absolute;
  top: 0;
  font-size: 16pt;
  left: 20%;
  margin: 0;
  padding: 0;
`;

export const JobDetails = styled.li`
  font-size: 12pt;
  padding-bottom: 8pt;
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  max-width: 100%;
  margin: 0;
  padding: 0;
  height: auto;
  margin-bottom: 1em;
  overflow-x: auto;
  @media (min-width: ${mq.tablet}){
   flex-direction: column;
   overflow-x: initial;
  }
`;

export const ListItem = styled.li<ExperienceProps>`
  display: flex;
  white-space: nowrap;
  width: 100%;
  color: ${({selected}) => (selected ? accent : 'inherit')};
  font-size: 11pt;
  align-items: center;
  padding: 0.25em 0.5em;
  height: 2em;
  margin: 0;
  background-color: ${({selected}) => (selected ? '#EAEAEA' : 'inherit')};
  &:hover {
    transition: 0.35s ease-in;
    background-color: ${bluebox};
    cursor: pointer;
  }
  @media (min-width: ${mq.tablet}){
    padding: 0.5em;
    border-radius: 0 5pt 5pt 0;
    border-left: ${({selected}) => (selected ? `1px solid ${accent}` : 'none')};
  }
`;

export const SmallSectionCont = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 50pt 5pt 0 15pt;
  min-height: 40svh;
  align-items: center;
  width: 100%;
`;

export const TabSection = styled.div`
  display: flex;
  width: 100%;
  align-items: ;
  @media (min-width: ${mq.tablet}){
    height: 100%;
    max-width: 15%;
  }
`;

export const Title = styled.p`
  font-size: 16pt;
  margin: 0;
  padding: 0;
`;
