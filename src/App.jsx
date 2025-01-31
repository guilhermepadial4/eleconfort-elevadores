import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';

import './styles/main.scss';

export function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
