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
        <BigProject />
        <BigProject />
        <BigProject />
      <SectionCont>
        <ContentContainer>

        </ContentContainer>
      </SectionCont>
      <HR />
      <SectionCont>

      </SectionCont>
    </MainCont>
  )
}
export default Home;
