import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ModernizationService } from './ModernizationService/ModernizationService';
import ElevatorOperation from '../../assets/elevator-operation.png';
import { Map } from './Map/Map';

import Service00 from '../../assets/service-01.png';
import Service01 from '../../assets/service-04.png';
import Service02 from '../../assets/service-07.png';
import Service03 from '../../assets/service-02.png';
import '../../styles/layout/content.scss';

const services = [
  {
    title: 'Máquina de tração',
    description: 'Substituição do cabo de aço',
    image: Service00,
  },

  {
    title: 'Botoeira de cabine',
    description: 'Modernização das botoeiras',
    image: Service01,
  },

  {
    title: 'Botoeira do pavimento',
    description: 'Modernização das botoeiras',
    image: Service02,
  },

  {
    title: 'Quadro de comando',
    description: 'Modernização do quadro',
    image: Service03,
  },
];

export function Content() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <main className="containerContent">
        <div className="contentWrapper">
          <div className="textContainer">
            <h2 className="title">
              VOCÊ CONHECE SEU ELEVADOR?
              <span>ENTENDA COMO ELE FUNCIONA.</span>
            </h2>
          </div>
          <img src={ElevatorOperation} alt="Funcionamento Elevador" className="elevatorImage" />
        </div>
      </main>

      <div className="divider"></div>

      <section className="servicesContainer">
        <h3>Alguns dos Nossos Serviços Prestados</h3>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={`Imagem do serviço ${service.title}`} className="service-image" />
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </Slider>
      </section>

      <ModernizationService />

      <div className="divider"></div>

      <Map />
    </>
  );
}
