import Buttons from '../../assets/butons.png';
import '../../styles/layout/herobanner.scss';

export const HeroBanner = () => {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${Buttons})` }}>
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h1>
            Pensou em conforto, pensou em <span className="highlight">Eleconfort</span>
          </h1>
          <p>Eleconfort Elevadores</p>
        </div>
      </div>
    </section>
  );
};
