import { Routes, Route } from 'react-router-dom';
import Home from '../components/Views/Home/Home';
import Archive from '../components/Views/Archive/Archive';

export default function ViewRouter() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Archive" Component={Archive} />
      <Route path="*" Component={Home} />
    </Routes>
  )
}
