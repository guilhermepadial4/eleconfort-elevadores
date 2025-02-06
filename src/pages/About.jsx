import { Header } from '../components/Header/Header';
import { HeroBannerAbout } from '../components/HeroBannerAbout/HeroBannerAbout';
import { Footer } from '../components/Footer/Footer';
import { CompanyDifferential } from '../components/CardDifferential/CardDifferential';
import { ContentAbout } from '../components/ContentAbout/Content';

import '../styles/main.scss';

export function About() {
  return (
    <div className="about">
      <Header />
      <HeroBannerAbout />
      <CompanyDifferential />
      <ContentAbout />
      <Footer />
    </div>
  );
}
