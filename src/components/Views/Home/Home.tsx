import BigProject from '../../BigProject/BigProject';
import { ContentContainer,
  HR,
  IntroP,
  MainCont,
  SectionCont,
  MiniP,
  BigP,
  IntroContainer,
} from './home.styles';
import Projects from '../../../projects';
import Project from '../../../types/Project';

const featuredProjects: Array<Project> = Projects.filter((project) => project.featured);

const Home = () => {
  return (
    <MainCont>
      <SectionCont>
        <IntroContainer>
          <IntroP>Hi, my name is</IntroP>
          <BigP>Matthew Logan.</BigP>
          <BigP>I bring ideas to life online.</BigP>
          <MiniP>I'm a full-stack developer creating exceptional digital experiences. I love systems thinking, gastronomy, continuous growth, and slow coffee. I'm a recent graduate from victoria, bc.</MiniP>
        </IntroContainer>
      </SectionCont>

      <SectionCont>
        <ContentContainer>
          {featuredProjects.map((item: Project ,index: number) =>
            (<BigProject project={item} key={index} isEven={index % 2 === 0} />
          ))}
        </ContentContainer>
      </SectionCont>
      <HR />
      <SectionCont>

      </SectionCont>
    </MainCont>
  )
}
export default Home;
