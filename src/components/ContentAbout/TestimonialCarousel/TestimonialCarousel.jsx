import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../../styles/layout/testimonialcarousel.scss';

const testimonials = [
  {
    name: 'Anselmo Florencio',
    role: 'Morador',
    company: 'Condomínio Esmeralda',
    stars: 5,
    review:
      'Após a Eleconfort por a boteiras para chamada dos elevadores dentro das normas ficou melhor para acessibilidade dos cadeirantes do prédio',
  },
  {
    name: 'Gustavo Rodrigues',
    role: 'Sindico',
    company: 'Condomínio Europa',
    stars: 5,
    review:
      'A Eleconfort trouxe o conforto para os elevadores, os moradores adoraram além de confortaveis nossos elevadores ficaram modernos se adaptando a atualidade',
  },
  {
    name: 'Alef Lima',
    role: 'Sindico',
    company: 'Condomino Residencial Souza Campos',
    stars: 5,
    review:
      'O trabalho realizado na casa de máquinas foi sensacional, a Eleconfort organizou, pintou e modernizou a casa de máquinas trazendo segurança ',
  },
];

export function TestimonialCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="testimonial-section">
      <h2>O que nossos clientes dizem</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="review">{testimonial.review}</p>
            <div className="stars">
              {[...Array(testimonial.stars)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p className="name">{testimonial.role}</p>
            <p className="company">{testimonial.company}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
