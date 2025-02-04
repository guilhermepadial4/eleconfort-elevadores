import BannerService from '../../assets/bannerservice.png';
import '../../styles/layout/herobannerservices.scss';

export const HeroBannerServices = () => {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${BannerService})`,
      }}
    >
      <div className="hero-banner__overlay">
        <div className="hero-banner__content">
          <h1>
            <span className="highlights">Conheça</span> nossos serviços
          </h1>
        </div>
      </div>
    </section>
  );
};
