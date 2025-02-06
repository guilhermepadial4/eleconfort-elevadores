import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';

import './styles/main.scss';
import { ScrollToTop } from './ScrollToTop';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}
