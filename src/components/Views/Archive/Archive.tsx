/**
 * @desc   View Container for the Archive section of the portfolio
 * @author LocalNewsTV
 */

import { Builtwith, ContentContainer, HeaderTwo, Icon, StyledData, StyledLink, StyledRow, StyledTable, StyledTableHeader, SubHeader, ViewContainer } from "./archive.styles";
import projectsList from "../../../projects";
import github from '/github.svg';
import external from '/external.svg';
import readmore from '/sticky.svg';

/**
 * @desc    Projects table to display current and past projects/tools created
 *          along with the tools and links to live demos 
 */
const ProjectTable = () => (
  <StyledTable>
    <thead>
      <StyledRow>
        <StyledTableHeader>Year</StyledTableHeader>
        <StyledTableHeader>Title</StyledTableHeader>
        <StyledTableHeader>Built With</StyledTableHeader>
        <StyledTableHeader>Link</StyledTableHeader>
      </StyledRow>
    </thead>
    <tbody>
    {projectsList.map((item, index) =>
      <StyledRow key={index}>
        <StyledData>{item.year}</StyledData>
        <StyledData>{item.projectTitle}</StyledData>
        <Builtwith>{item.tech.join(" • ")}</Builtwith>
        <StyledData>
        {item.repo
        &&  <StyledLink to={item.repo}>
              <Icon src={github} alt="GitHub Repository" />
            </StyledLink>}
        {item.liveLink
        &&  <StyledLink to={item.liveLink} target="_blank" >
              <Icon src={external} alt="External Link" />
            </StyledLink>}
        {item.moreInfo
        &&  <StyledLink to={item.moreInfo}>
              <Icon src={readmore} alt="Read More" />
            </StyledLink>}
        </StyledData>
      </StyledRow>
    )}
    </tbody>
  </StyledTable>
)
/**
 * @desc Main Component for the Archive View, 
 */
const Archive = () => {
  return (
    <ViewContainer>
      <ContentContainer>
        <HeaderTwo>Archive</HeaderTwo>
          <SubHeader>
            A big list of things I've worked on
          </SubHeader>
        <ProjectTable />
      </ContentContainer>
    </ViewContainer>
  )
}

export default Archive;
