import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HeroBanner } from '../components/HeroBanner/HeroBanner';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <HeroBanner />
      <Content />
      <Footer />
    </div>
  );
}
