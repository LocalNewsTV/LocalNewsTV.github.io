import {
  HR,
  MainCont,
} from './home.styles';
import About from '../../About/About';
import Intro from '../../Intro/Intro';
import Socials from '../../Socials/Socials';
import Projects from '../../Projects/Projects';
import Experience from '../../Experience/Experience';

const Home = () => {
  return (
    <MainCont>
      <Intro />
      <About />
      <HR />
      <Experience />
      <HR />
      <Projects />
      <Socials />
    </MainCont>
  )
}
export default Home;
