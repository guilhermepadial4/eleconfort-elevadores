import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

import { CallToAction } from '../CallToAction/CallToAction';

import '../../styles/layout/contentcontact.scss';

export function ContentContact() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="main-card">
            <h2>ENTRE EM CONTATO CONOSCO</h2>
            <div className="divider"></div>
            <p>
              <strong>ENVIE UMA MENSAGEM OU VENHA NOS CONHECER</strong>
            </p>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <h3>Estamos Localizados</h3>
              <p>Praça Haroldo Daltro nº 394 - Vila Nova Manchester</p>
            </div>
            <div className="info-card">
              <FaEnvelope className="icon" />
              <h3>Email</h3>
              <p>comercial@eleconforteelevadores.com.br</p>
            </div>
            <div className="info-card">
              <FaWhatsapp className="icon" />
              <h3>WhatsApp</h3>
              <p>Entre em contato clicando</p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.580720582144!2d-46.5336333253746!3d-23.547578061084607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e0bd0e9c06b%3A0x1d8464edd0f1d098!2sPra%C3%A7a%20Haroldo%20Daltro%2C%20394%20-%20Vila%20Nova%20Manchester%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003444-090!5e0!3m2!1spt-BR!2sbr!4v1738176031800!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
