import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { About } from './pages/about';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/servicos" element={<Services />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  );
}
