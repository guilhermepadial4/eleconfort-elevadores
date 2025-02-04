import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { HeroBannerContact } from '../components/HeroBannerContact/HeroBannerContact';
import { ContentContact } from '../components/ContentContact/ContentContact';

export function Contact() {
  return (
    <>
      <Header />
      <HeroBannerContact />
      <ContentContact />
      <Footer />
    </>
  );
}
