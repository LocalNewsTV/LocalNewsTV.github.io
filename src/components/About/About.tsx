import { ContentContainer, SmallSectionCont } from '../Views/Home/home.styles';
import {
  AboutContainer,
  AboutContentContainer,
  AboutImage,
  AboutImageDiv,
  AccentSpan,
  BodyText,
  HeaderTwo,
  RecentSkills,
  SkillsItem,
  StyledLink,
} from './about.styles';
import myself from '/Matthew.jpeg';

const About = () => {
  const recentSkills: Array<string> = [
    'React',
    'TypeScript',
    'Express.js',
    'MongoDB',
    'Node.js',
    'Progressive Web Applications',
  ];
  return (
    <SmallSectionCont id="about" >
      <ContentContainer>
        <HeaderTwo>
          <AccentSpan>01.</AccentSpan> A Little About Me.
        </HeaderTwo>
        <AboutContainer>
          <AboutContentContainer>
            <BodyText>
              Hello, my name is Matthew, and I've been creating things for the internet since 2021.
              I have a diverse background, having spent 8 years as a Red Seal Chef before changing
              career paths. In 2023, I successfully graduated from
              <StyledLink to="https://camosun.ca/programs-courses/find-program/information-and-computer-systems-technologist-diploma">
                &nbsp;Camosun College's ICS Program.
              </StyledLink>
            </BodyText>
            <BodyText>
              Throughout my journey, I've had the opportunity to work across the full stack of
              applications during my studies, and I gained valuable experience during my Capstone
              semester with the
              <StyledLink to="https://github.com/bcgov/citz-imb-wayfinder">
                &nbsp;Ministry of Citizens' Services
              </StyledLink>
              &nbsp;in the summer of 2023.
            </BodyText>
            <BodyText>
              My main focus now is on continuing to grow my skillset through personal projects and
              gaining real-world experience. I'm passionate about full-stack development and excited
              to embark on new challenges in the field."
            </BodyText>
            <BodyText>Here is some of the technology I've been working with recently:</BodyText>
            <RecentSkills>
              {recentSkills.map((item, index) => (
                <SkillsItem key={index}>{item}</SkillsItem>
              ))}
            </RecentSkills>
          </AboutContentContainer>
          <AboutContentContainer>
            <AboutImageDiv id={'profile'}>
              <AboutImage src={myself} />
            </AboutImageDiv>
          </AboutContentContainer>
        </AboutContainer>
      </ContentContainer>
    </SmallSectionCont>
  );
};

export default About;
