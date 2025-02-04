import Buttons from '../../assets/butons.png';

import '../../styles/layout/herobannercontact.scss';

export const HeroBannerContact = () => {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${Buttons})` }}>
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h1>
            <span className="highlight">Fale</span> conosco
          </h1>
          <p>Entre em contato conosco, temos uma equipe especializada para melhor atende-lo</p>
        </div>
      </div>
    </section>
  );
};
