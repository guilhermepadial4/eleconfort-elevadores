import { CallToAction } from '../components/CallToAction/CallToAction';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/header/Header';
import { HeroBannerServices } from '../components/HeroBannerServices/HeroBannerServices';
import { ServicesPictures } from '../components/Services/Services';

export function Services() {
  return (
    <>
      <Header />
      <HeroBannerServices />
      <ServicesPictures />
      <CallToAction />
      <Footer />
    </>
  );
}
