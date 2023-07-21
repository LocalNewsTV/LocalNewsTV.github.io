import styled from '@emotion/styled';
import mq from '../../utilities/mq';
import { black, accent } from '../../assets/Theming';

export const ProjectCont = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 2em;
  box-content: content-box;
  width: 600pt;
  min-height: 200pt;
  max-height: 100%;
  margin-top: 15pt;
`;
export const ImgContent = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  background-color: none;
  overflow: hidden;
  filter: grayscale(100%);
  &:hover {
    transition: 0.6s ease-in;
    filter: grayscale(0%);
  }
`;

export const Img = styled.img`

`;
export const Icon = styled.img`
height: 20pt;
width: 20pt;
&:nth-of-type(even){
  margin: 0 10pt;
}
`;
export const TextContent = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  flex-direction: column;
  width: 60%;
  min-height: 100%;
  background-color: none;
`

export const FeaturedProject = styled.p`
  margin: 0;
  padding: 0;
  color: #8686A3;
  font-size: 11pt;
`;
export const ProjectHeader = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18pt;
`;

export const DescriptionBox = styled.div`
  font-size: 12pt;
  margin: 1em 0 auto 0;
  background-color: #79797955;
  color: ${black};
  padding: 10pt;
  border-radius: 5pt;
`;

export const ThinContainer = styled.div`
  display: flex;
  margin-bottom: 10pt;
  &:last-of-type{
    margin-bottom: auto;
  }
`;

export const TechTag = styled.p`
  margin: 0 5pt;
  padding: 2pt;
  font-size: 10pt;
  &:first-of-type{
    margin-left: 0;
    padding-left: 0;
  }
`;
