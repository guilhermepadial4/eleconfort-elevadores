import Banner from '../../assets/banner.png';

import '../../styles/layout/herobannerabout.scss';

export function HeroBannerAbout() {
  return (
    <div className="hero-banner-about">
      <img src={Banner} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>
          <span>Conheça</span> a <br /> Eleconfort
        </h1>
        <p>
          A Eleconfort Elevadores iniciou sua atividade com 2 sócios empreendedores com a missão de sermos referência em prestação de
          serviços de manutenção e modernização de elevadores. Levamos conforto e qualidade de vida, comodidade para nossos clientes.
        </p>
      </div>
    </div>
  );
}
