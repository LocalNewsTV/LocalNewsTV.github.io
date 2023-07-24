import {useState, useRef, useEffect} from 'react';

import BigProject from '../../BigProject/BigProject';
import { ContentContainer,
  HR,
  IntroP,
  MainCont,
  FullSectionCont,
  MiniP,
  BigP,
  IntroContainer,
  HeaderTwo,
  AccentSpan,
  SmallSectionCont,
  AboutContainer,
  AboutContentContainer,
  AboutImageDiv,
  AboutImage,
  RecentSkills,
  StyledLink,
  BodyText,
  SkillsItem,
} from './home.styles';
import Projects from '../../../projects';
import Project from '../../../types/Project';
import myself from '/Matthew.jpeg';

const featuredProjects: Array<Project> = Projects.filter((project) => project.featured);

const IntroSection = () => (
  <FullSectionCont>
    <IntroContainer>
      <IntroP>Hi, my name is</IntroP>
      <BigP>Matthew Logan.</BigP>
      <BigP>I bring ideas to life online.</BigP>
      <MiniP>I'm a full-stack developer creating exceptional digital experiences. I love systems thinking, gastronomy, continuous growth, and slow coffee. I'm a recent graduate from victoria, bc.</MiniP>
    </IntroContainer>
  </FullSectionCont>
);

const AboutSection = () => {
  const recentSkills: Array<string> = [
    'React',
    'TypeScript',
    'Express.js',
    'MongoDB',
    'Node.js',
    'Progressive Web Applications',
  ]
  return (
    <SmallSectionCont>
      <ContentContainer>
        <HeaderTwo>
          <AccentSpan>01.</AccentSpan> A Little About Me.
        </HeaderTwo>
        <AboutContainer>
          <AboutContentContainer>
            <BodyText>Hello, my name is Matthew, and I've been creating things for the internet since 2021. I have a diverse background, having spent 8 years as a Red Seal Chef before changing career paths. In 2023, I successfully graduated from
              <StyledLink to="https://camosun.ca/programs-courses/find-program/information-and-computer-systems-technologist-diploma">
                &nbsp;Camosun College's ICS Program.
              </StyledLink>
            
            </BodyText>
            <BodyText>Throughout my journey, I've had the opportunity to work across the full stack of applications during my studies, and I gained valuable experience during my Capstone semester with the
              <StyledLink to="https://github.com/bcgov/citz-imb-wayfinder">
                &nbsp;Ministry of Citizens' Services
              </StyledLink>
                &nbsp;in the summer of 2023.</BodyText>
            <BodyText>
              My main focus now is on continuing to grow my skillset through personal projects and gaining real-world experience. I'm passionate about full-stack development and excited to embark on new challenges in the field."
            </BodyText>
            <BodyText>
              Here is some of the technology I've been working with recently:
            </BodyText>
            <RecentSkills>
              {recentSkills.map((item, index) => (<SkillsItem key={index}>{item}</SkillsItem>))}
            </RecentSkills>
          </AboutContentContainer>
          <AboutContentContainer>
            <AboutImageDiv id={"profile"}>
              <AboutImage
                src={myself}
              />
            </AboutImageDiv>
          </AboutContentContainer>
        </AboutContainer>
      </ContentContainer>
    </SmallSectionCont>
);}

const ExperienceSection = () => (
  <SmallSectionCont>
    <ContentContainer>
      <HeaderTwo>
        <AccentSpan>02.</AccentSpan> Where I've Been.
      </HeaderTwo>
    </ContentContainer>
  </SmallSectionCont>
);

const ProjectsSection = () => (
  <FullSectionCont>
    <ContentContainer>
      <HeaderTwo>
        <AccentSpan>03.</AccentSpan> Some Things I've Built.
      </HeaderTwo>
      {featuredProjects.map((item: Project ,index: number) =>
        (<BigProject project={item} key={index} isEven={index % 2 === 0} />
      ))}
    </ContentContainer>
  </FullSectionCont>
);

const Home = () => {
  return (
    <MainCont>
      <IntroSection />
      <AboutSection />
      <HR />
      <ExperienceSection />
      <HR />
      <ProjectsSection />
    </MainCont>
  )
}
export default Home;
