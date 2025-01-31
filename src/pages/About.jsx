import { Header } from '../components/header/Header';
import { HeroBannerAbout } from '../components/HeroBannerAbout/HeroBannerAbout';
import { Footer } from '../components/Footer/Footer';
import { CompanyDifferential } from '../components/CardDifferential/CardDifferential';
import { ContentAbout } from '../components/ContentAbout/Content';

export function About() {
  return (
    <>
      <Header />
      <HeroBannerAbout />
      <CompanyDifferential />
      <ContentAbout />
      <Footer />
    </>
  );
}
