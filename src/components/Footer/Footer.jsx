import { FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

import Logo from '../../assets/black-logo.png';
import ArrowUp from '../../assets/arrow_under.svg';

import '../../styles/layout/footer.scss';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footerLogo">
        <img src={Logo} alt="Logo da Empresa" />
      </div>
      <div className="footerContent">
        <div className="footerAddres">
          <h3>Onde estamos</h3>
          <p>
            <MdLocationOn size={20} /> Praça Haroldo Daltro, 394 - São Paulo, SP
          </p>
        </div>

        <div className="footerContact">
          <h3>Contatos</h3>
          <p>
            <MdPhone size={20} /> (11) 1234-5678
          </p>
          <p>
            <FaWhatsapp size={20} /> (11) 98765-4321
          </p>
          <p>
            <MdEmail size={20} /> comercial@eleconfortelevadores.com.br
          </p>
        </div>

        <div className="footerMidia">
          <h3>Redes socias</h3>
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} /> Facebook
            </a>
            <a className="iconInstagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footerCopyright">
        <p>&copy; {new Date().getFullYear()} Nome da Empresa. Todos os direitos reservados.</p>
      </div>

      <button className="scrollToTop" onClick={scrollToTop}>
        <img src={ArrowUp} alt="Voltar ao topo" className="arrow-icon" />
      </button>
    </footer>
  );
}
