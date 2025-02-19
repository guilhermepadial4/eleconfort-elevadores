import { Link, useLocation } from 'react-router-dom';
import {
  FaHeadset,
  FaTools,
  FaThumbsUp,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import '../../styles/layout/footer.scss';
import Logo from '../../assets/black-logo.png';
import SecureSite from '../../assets/secure-site.png';

export function Footer() {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <div className="info-item">
            <FaHeadset />
            <div>
              <span>Suporte 24h</span>
              <p>Atendimento rápido e eficiente a qualquer hora.</p>
            </div>
          </div>
          <div className="info-item">
            <FaTools />
            <div>
              <span>Técnicos Especializados</span>
              <p>Profissionais altamente qualificados para te ajudar.</p>
            </div>
          </div>
          <div className="info-item">
            <FaThumbsUp />
            <div>
              <span>Satisfação Garantida</span>
              <p>Compromisso com a melhor experiência para você.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="footer-bottom">
        <div className="footer-contact">
          <h2 className="footer-contact-title">Atendimento</h2>
          <div className="footer-contact-item">
            <FaRegClock className="footer-contact-icon" />
            <p>Seg a Sex: 08h - 18h</p>
          </div>
          <div className="footer-contact-item">
            <FaPhoneAlt className="footer-contact-icon" />
            <p>(11) 2051-7645</p>
          </div>
          <div className="footer-contact-item">
            <FaWhatsapp className="footer-contact-icon" />
            <p>(11) 99123-9476</p>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope className="footer-contact-icon" />
            <p>comercial@eleconfortelevadores.com.br</p>
          </div>
        </div>

        <div className="container-address-social">
          <div className="footer-address">
            <h2 className="footer-address-title">Endereço</h2>
            <div className="footer-address-item">
              <FaMapMarkerAlt className="footer-address-icon" />
              <p className="footer-address-text">Praça Haroldo Daltro, 394 - São Paulo, SP</p>
            </div>
          </div>

          <div className="footer-social">
            <h2 className="footer-social-title">Redes Sociais</h2>
            <div className="footer-social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <h2 className="footer-menu-title">Menu</h2>
          <ul className="footer-menu-list">
            <li>
              <Link to="/" className={isActive('/')}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className={isActive('/sobre')}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/servicos" className={isActive('/servicos')}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" className={isActive('/contato')}>
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="container-images">
          <img src={Logo} alt="Logo da empresa" />
          <img src={SecureSite} alt="Certificado" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Eleconfort. Todos os direitos reservados. By RastaIT.</p>
      </div>
    </footer>
  );
}
