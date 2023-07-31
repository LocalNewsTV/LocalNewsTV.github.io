import { Builtwith, ContentContainer, HeaderTwo, Icon, StyledData, StyledLink, StyledRow, StyledTable, StyledTableHeader, SubHeader, ViewContainer } from "./archive.styles";
import projectsList from "../../projects";
import github from '/github.svg';
import external from '/external.svg';
import readmore from '/sticky.svg';

const ProjectTable = () => (
  <StyledTable>
    <StyledRow>
      <StyledTableHeader>Year</StyledTableHeader>
      <StyledTableHeader>Title</StyledTableHeader>
      <StyledTableHeader>Built With</StyledTableHeader>
      <StyledTableHeader>Link</StyledTableHeader>
    </StyledRow>
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
        &&  <StyledLink to={item.liveLink}>
              <Icon src={external} alt="External Link" />
            </StyledLink>}
        {item.moreInfo
        &&  <StyledLink to={item.moreInfo}>
              <Icon src={readmore} alt="Read More" />
            </StyledLink>}
        </StyledData>
      </StyledRow>
    )}
  </StyledTable>
)

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
