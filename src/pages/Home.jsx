import { Content } from '../components/Content/Content';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/header/Header';
import { HeroBanner } from '../components/HeroBanner/HeroBanner';

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Content />
      <Footer />
    </>
  );
}
