import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Service00 from '../../assets/service-00.png';
import Service01 from '../../assets/service-01.png';
import Service02 from '../../assets/service-02.png';
import Service03 from '../../assets/service-03.png';
import Service04 from '../../assets/service-04.png';
import Service05 from '../../assets/service-05.png';
import Service06 from '../../assets/service-06.png';
import Service07 from '../../assets/service-07.png';

import '../../styles/layout/services.scss';

export function ServicesPictures() {
  const images = [
    { src: Service00, name: 'Cabine' },
    { src: Service01, name: 'Casa de Máquinas' },
    { src: Service02, name: 'Painel de Controle' },
    { src: Service03, name: 'Elevador Modernizado' },
    { src: Service04, name: 'Plataforma Elevatória' },
    { src: Service05, name: 'Fiação Elétrica' },
    { src: Service06, name: 'Piso do Elevador' },
    { src: Service07, name: 'Porta do Elevador' },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <span className="image-label">{image.name}</span>
            <img src={image.src} alt={image.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
