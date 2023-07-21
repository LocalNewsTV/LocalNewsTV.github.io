import { DescriptionBox, FeaturedProject, Icon, Img, ImgContent, ProjectCont, ProjectHeader, TechTag, TextContent, ThinContainer } from "./bigProject.styles"
import wayfinder from '/projects/wayfinder/Wayfinder.png';
import github from '/github.svg';
import external from '/external.svg';


const BigProject = () => {
  return (
    <ProjectCont>
    <TextContent>
      <FeaturedProject>Featured Project</FeaturedProject>
      <ProjectHeader>BC Wayfinder</ProjectHeader>
      <DescriptionBox>
        <p>So many words So many words So many words So many words
        Word words word</p>
        <p>So many words So many words So many words So many words
        Word words word</p>
      </DescriptionBox>
      <ThinContainer>
        <TechTag>React</TechTag>
        <TechTag>TypeScript</TechTag>
        <TechTag>Emotion</TechTag>
        <TechTag>PWA</TechTag>
      </ThinContainer>
      <ThinContainer>
        <Icon 
          src={github}
        />
        <Icon 
          src={external}
        />
      </ThinContainer>
    </TextContent>
    <ImgContent>
      <Img
        src={wayfinder}
      />
    </ImgContent>
  </ProjectCont>
  )

}

export default BigProject;
