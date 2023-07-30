import projectsList from '../../projects';
import Project from '../../types/Project';
import BigProject from '../BigProject/BigProject';
import { AccentSpan, ContentContainer, FullSectionCont, HeaderTwo, StyledLink } from './projects.styles';

const Projects = () => {
  const featuredProjects: Array<Project> = projectsList.filter((project) => project.featured);
  return (
    <FullSectionCont id="work">
      <ContentContainer>
        <HeaderTwo>
          <AccentSpan>03.</AccentSpan> Some Things I've Built.
        </HeaderTwo>
        {featuredProjects.map((item: Project ,index: number) =>
          (<BigProject project={item} key={index} isEven={index % 2 === 0} />
        ))}
        <StyledLink to="/Archive">Looking for more? View the Archive</StyledLink>
      </ContentContainer>
    </FullSectionCont>
  )
};

export default Projects;
