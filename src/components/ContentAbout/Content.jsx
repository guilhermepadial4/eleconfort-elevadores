import '../../styles/layout/contentabout.scss';
import { CallToAction } from '../CallToAction/CallToAction';

import { MissionVisionValues } from './MissionVisionValues/MissionVisionValues';
import { TestimonialCarousel } from './TestimonialCarousel/TestimonialCarousel';

import backgroundImage from '../../assets/buttons.png';

export function ContentAbout() {
  return (
    <>
      <section className="content-about" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>
            Somos referência em embelezamento
            <span>Elevadores modernos</span>
          </h1>
        </div>
      </section>
      <MissionVisionValues />
      <div className="divider"></div>
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}
