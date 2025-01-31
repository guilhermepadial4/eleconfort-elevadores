import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { About } from './pages/about';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
    </Routes>
  );
}
