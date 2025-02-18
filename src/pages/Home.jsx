import { Content } from '../components/Content/Content';
import ElevatorAnimation from '../components/ElevatorAnimation/ElevatorAnimation';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HeroBanner } from '../components/HeroBanner/HeroBanner';

export default function Home() {
  return (
    <div className="home">
      <ElevatorAnimation />
      <Header />
      <HeroBanner />
      <Content />
      <Footer />
    </div>
  );
}
