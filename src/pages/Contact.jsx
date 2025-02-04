import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { HeroBannerContact } from '../components/HeroBannerContact/HeroBannerContact';
import { ContentContact } from '../components/ContentContact/ContentContact';

export function Contact() {
  return (
    <div className='contact'>
      <Header />
      <HeroBannerContact />
      <ContentContact />
      <Footer />
    </div>
  );
}
