import { Routes, Route } from 'react-router-dom';
import Home from '../components/Views/Home/Home';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/About" Component={Home} />
      <Route path="/Projects" Component={Home} />
      <Route path="/Contact" Component={Home} />
      <Route path="/Resume" Component={Home} />
      <Route path="*" Component={Home} />
    </Routes>
  )
}
