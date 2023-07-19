import { Routes, Route } from 'react-router-dom';
import Home from '../components/Views/Home/Home';
import About from '../components/Views/About/About';
import Projects from '../components/Views/Projects/projects';
import Contact from '../components/Views/Contact/Contact';
import Resume from '../components/Views/Resume/Resume';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/About" Component={About} />
      <Route path="/Projects" Component={Projects} />
      <Route path="/Contact" Component={Contact} />
      <Route path="/Resume" Component={Resume} />
      <Route path="*" Component={Home} />
    </Routes>
  )
}
