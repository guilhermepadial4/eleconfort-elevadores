import '../../styles/layout/contentabout.scss';
import { MissionVisionValues } from './MissionVisionValues/MissionVisionValues';
import { TestimonialCarousel } from './TestimonialCarousel/TestimonialCarousel';

export function ContentAbout() {
  return (
    <>
      <section className="content-about">
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
    </>
  );
}
