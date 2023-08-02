/**
 * @desc   Styled Components for Projects section of Portfolio
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { accent, hero, section, sectionAccent } from '../../assets/Theming';
import { NavLink } from 'react-router-dom';

export const AccentSpan = styled.span`
  color: ${sectionAccent};
  font-size: 12pt;
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

export const HeaderTwo = styled.h2`
  position: absolute;
  top: 0;
  font-size: 16pt;
  left: 20%;
  margin: 2em 0 0 0;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: ${accent};
  }
`;
