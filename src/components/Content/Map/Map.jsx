import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';

import '../../../styles/layout/map.scss';

export function Map() {
  return (
    <>
      <div className="contactUsWrapper">
        <div className="contactCard">
          <h2>Entre em contato conosco</h2>
          <p>Envie uma mensagem, ou ligue, e tire suas dúvidas.</p>
          <div className="containerButtons">
            <button>
              Enviar mensagem
              <FaWhatsapp size={20} color="white" />
            </button>

            <button>
              Ligar agora
              <MdOutlineLocalPhone size={20} color="white" />
            </button>
          </div>
        </div>
        <div className="googleMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.580720582144!2d-46.5336333253746!3d-23.547578061084607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e0bd0e9c06b%3A0x1d8464edd0f1d098!2sPra%C3%A7a%20Haroldo%20Daltro%2C%20394%20-%20Vila%20Nova%20Manchester%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003444-090!5e0!3m2!1spt-BR!2sbr!4v1738176031800!5m2!1spt-BR!2sbr"
            style={{ border: '0' }}
            loading="lazy"
          />
        </div>
      </div>
      <div className='divider'></div>
    </>
  );
}
