import { Link } from 'react-router-dom';

import ImageDifferent from '../../assets/different.jpg';
import ImageDifferent2 from '../../assets/different2.jpg';

import '../../styles/layout/different.scss';

export default function Different() {
  return (
    <section className="different">
      <div className="different__container">
        <div className="different__item">
          <img src={ImageDifferent} alt="Elevadores" />
          <h3>ELEVADORES</h3>
          <p>Empresa especializada na instalação e manutenção de elevadores, garantindo segurança e eficiência para seu empreendimento.</p>
          <Link to="/sobre">
            <button className="different__button">Saiba Mais</button>
          </Link>
        </div>

        <div className="different__item">
          <img src={ImageDifferent2} alt="Manutenção de Elevadores" />
          <h3>MANUTENÇÃO</h3>
          <p>Contamos com uma equipe altamente qualificada para oferecer o melhor serviço de manutenção para seu elevador.</p>
          <Link to="/servicos">
            <button className="different__button">Saiba Mais</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
