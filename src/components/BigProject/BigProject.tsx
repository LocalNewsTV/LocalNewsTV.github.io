/**
 * @desc   Component for Large Projects displayed on Main page of Portfolio
 * @author LocalNewsTV
 */
import { DescriptionBox, DescriptionText, FeaturedProject, Icon, Img, ImgContent, ProjectCont, ProjectHeader, StyledLink, TechTag, TextContent, ThinContainer } from "./bigProject.styles"
import github from '/github.svg';
import external from '/external.svg';
import readmore from '/sticky.svg';
import Project from "../../types/Project";


type Props = {
  isEven?: boolean;
  project: Project;
}

const BigProject = ({
  isEven,
  project
}:Props) => {
  return (
    <ProjectCont>
    <TextContent isEven={isEven} >
      <FeaturedProject>Featured Project</FeaturedProject>
      <ProjectHeader>{project.projectTitle}</ProjectHeader>
      <DescriptionBox
        isEven={isEven}
      >
        {project.description.map((item, index) => <DescriptionText key={index}>{item}</DescriptionText>)}
      </DescriptionBox>
      <ThinContainer 
        isEven={isEven}
      >
        {project.tech.map((item) => <TechTag key={item}>{item}</TechTag>)}
      </ThinContainer>
      <ThinContainer
        isEven={isEven}
      >
        {project.repo
        &&  <StyledLink to={project.repo}>
              <Icon src={github} alt="GitHub Repository" />
            </StyledLink>}
        {project.liveLink
        &&  <StyledLink to={project.liveLink}>
              <Icon src={external} alt="External Link" />
            </StyledLink>}
        {project.moreInfo
        &&  <StyledLink to={project.moreInfo}>
              <Icon src={readmore} alt="Read More" />
            </StyledLink>}
      </ThinContainer>
    </TextContent>
    <ImgContent 
      isEven={isEven}
    >
      <Img
        src={project?.projectImage}
      />
    </ImgContent>
  </ProjectCont>
  )

}

export default BigProject;
