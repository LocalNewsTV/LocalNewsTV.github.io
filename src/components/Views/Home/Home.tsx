/**
 * @desc   Main View for landing page of Portfolio
 * @author LocalNewsTV
 */
import {
  HR,
  MainCont,
} from './home.styles';
import About from '../../About/About';
import Intro from '../../Intro/Intro';
import Projects from '../../Projects/Projects';
import Experience from '../../Experience/Experience';
import Contact from '../../Contact/Contact';
import Socials from '../../Socials/Socials';

const Home = () => {
  return (
    <MainCont>
      <Intro />
      <About />
      <HR />
      <Experience />
      <HR />
      <Projects />
      <HR />
      <Contact />
      <Socials />
    </MainCont>
  )
}
export default Home;
