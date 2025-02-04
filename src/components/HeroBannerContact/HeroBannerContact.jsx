import BannerContact from '../../assets/bannercontact.png';

import '../../styles/layout/herobannercontact.scss';

export const HeroBannerContact = () => {
  return (
    <section className="hero-banner" style={{ backgroundImage: `url(${BannerContact})` }}>
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h1>
            <span className="emphasis">Fale</span> conosco
          </h1>
          <p>Entre em contato conosco, temos uma equipe especializada para melhor atende-lo</p>
        </div>
      </div>
    </section>
  );
};
