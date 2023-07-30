import { useState } from 'react';
import {
  AccentSpan,
  Container,
  ContentContainer,
  EmployDate,
  Employer,
  ExperienceList,
  HeaderTwo,
  JobDetails,
  List,
  ListItem,
  SmallSectionCont,
  TabSection,
  Title,
} from './experience.styles';
import jobExperience from '../../content/JobExperience';

const Experience = () => {
  const [experience, setExperience] = useState<JobExperience>(jobExperience[0]);
  return (
    <SmallSectionCont id="experience">
      <ContentContainer>
        <HeaderTwo>
          <AccentSpan>02.</AccentSpan> Where I've Been.
        </HeaderTwo>
        <TabSection>
          <List>
            {jobExperience.map((item: JobExperience, index: number) => (
              <ListItem
                key={index}
                selected={item.ref === experience.ref}
                onClick={() => setExperience(item)}
              >
                {item.place}
              </ListItem>
            ))}
          </List>
        </TabSection>
        <Container>
          <Title>
            {experience.position}
            <Employer to={experience.link}>
              &nbsp;@&nbsp;
              {experience.place}
            </Employer>
          </Title>
          <EmployDate>
            {experience.start}
            &nbsp;&#8212;&nbsp;
            {experience.end}
          </EmployDate>
          <ExperienceList>
            {experience.details.map((item, index) => (
              <JobDetails key={index}>{item}</JobDetails>
            ))}
          </ExperienceList>
        </Container>
      </ContentContainer>
    </SmallSectionCont>
  );
};

export default Experience;
