import Buttons from '../../assets/butons.png';
import '../../styles/layout/herobannerservices.scss';

export const HeroBannerServices = () => {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${Buttons})` }}>
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h1>
            <span className="highlight">Conheça</span> nossos serviços
          </h1>
        </div>
      </div>
    </section>
  );
};
