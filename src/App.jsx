import { Content } from './components/Content/Content';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { HeroBanner } from './components/HeroBanner/HeroBanner';

import './styles/main.scss';

export function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Content />
      <Footer />
    </>
  );
}
