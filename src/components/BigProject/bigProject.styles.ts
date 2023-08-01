/**
 * @desc Styled Components for Big Projects on main section of Portfolio
 * @author LocalNewsTV
 */
import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { black, bluebox } from '../../assets/Theming';
import { Link } from 'react-router-dom';

type Props = {
  isEven?: boolean;
};

export const DescriptionBox = styled.div<Props>`
  text-align: ${({isEven}) => isEven ? ' right' : 'left' };
  font-size: 12pt; 
  margin: 0;
  background-color: ${bluebox};
  color: ${black};
  padding: 10pt;
  border-radius: 5pt;
  @media (min-width: ${mq.tablet}) {
    margin: 1em 0 auto 0;
  }
`;

export const DescriptionText = styled.p`
  font-size: 11pt;
`;

export const FeaturedProject = styled.p`
  margin: 0;
  padding: 0;
  color: #2F7872;
  font-size: 11pt;
  font-weight: 600;
`;

export const Icon = styled.img`
  height: 20pt;
  width: 20pt;
`;

export const Img = styled.img`

`;

export const ImgContent = styled.div<Props>`
  display: none;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  background-color: none;
  overflow: hidden;
  filter: grayscale(65%);
  @media (min-width: ${mq.tablet}){
    position: absolute;
    top: 0;
    ${({isEven}) => isEven ? 'left: 0' : 'right: 0'};
    display: flex;
    width: 50%;
  }
  &:hover {
    transition: 0.4s ease-in;
    filter: grayscale(0%);
  }
`;

export const ProjectCont = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  filter: grayscale(100%);
  box-sizing: content-box;
  width: 100%;
  min-height: 200pt;
  margin-top: 60pt;
  @media (min-width: ${mq.tablet}){
    width: 600pt;
    margin-top: 90pt;
    padding: 2em;
  }
  &:hover {
    transition: 0.4s ease-in;
    filter: grayscale(0%);
  }
  &:last-of-type{
    margin-bottom: 90pt;
  }
`;

export const ProjectHeader = styled.h3`
  margin: 0;
  padding: 0;
  color: ${black};
  font-size: 18pt;
`;

export const StyledLink = styled(Link)`
  &:nth-of-type(even){
    margin: 0 10pt;
  }
`;

export const TechTag = styled.p`
  margin: 0 10pt 0 0;
  padding: 2pt 4pt 2pt 0;
  font-size: 10pt;
  color: #C9504A;
  &:first-of-type{
    margin-left: 0;
    padding-left: 0;
  }
`;

export const TextContent = styled.div<Props>`
  display: flex;
  padding: 10pt;
  ${({isEven}) => (isEven ? 'right: 0' : 'left: 0') };
  align-items: ${({isEven}) => (isEven ? 'end' : 'start') };
  flex-direction: column;
  max-width: 100vw;
  min-height: 100%;
  @media (min-width: ${mq.tablet}){
    position: absolute;
    top: 0;
    box-sizing: border-box;
    width: 60%;
    z-index: 1;
  }
  background-color: none;
`;

export const ThinContainer = styled.div<Props>`
  display: flex;
  justify-content: ${({isEven}) => (isEven ? 'flex-end' : 'flex-start')};
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10pt;
  &:last-of-type{
    margin-bottom: auto;
  }
`;
