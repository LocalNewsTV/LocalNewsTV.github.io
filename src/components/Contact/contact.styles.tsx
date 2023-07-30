import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { accent, hero, sectionAccent } from '../../assets/Theming';


export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  // height: 100svh;
  padding: 55pt 0;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: ${mq.tablet};
  @media (min-width: ${mq.tablet}){
    flex-direction: column;
  }
`;

export const SmallSectionCont = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100svh;
  align-items: center;
  width: 100%;
  @media (min-width: ${mq.mobile}){
    padding: 50pt 5pt 0 15pt;
  }
`;

export const AccentSpan = styled.span`
  color: ${sectionAccent};
  font-size: 12pt;
`;

export const HeaderTwo = styled.h2`
  position: absolute;
  top: 0;
  font-size: 16pt;
  left: 20%;
  margin: 2em 0 0 0;
  padding: 0;
`;

export const HeaderThree = styled.h3`
  font-size: 28pt;
`;

export const ContactText = styled.p`
  font-size: 14pt;
  max-width: 95%;
  text-align: center;
  margin-bottom: 1.5em;
  @media (min-width: ${mq.tablet}){
    max-width: 60%;
  }
`;
export const Button = styled.button`
  width: 100pt;
  height: 40pt;
  border: 1pt solid ${accent};
  border-radius: 5pt;
  font-size: 12pt;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
  &:hover {
    transition: 0.2s;
    background-color: ${hero};
  }
`;
