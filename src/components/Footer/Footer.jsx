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
            <a href="https://www.google.com/maps?q=Praça+Haroldo+Daltro,+394+-+São+Paulo,+SP" target="_blank">
              <MdLocationOn size={20} /> Praça Haroldo Daltro, 394 - São Paulo, SP
            </a>
          </p>
        </div>

        <div className="footerContact">
          <h3>Contatos</h3>
          <p>
            <a href="tel:+551120517645" target="_blank">
              <MdPhone size={20} /> (11) 2051-7645
            </a>
          </p>
          <p>
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&text=Ol%C3%A1,%20Tudo%20bem?%20Gostaria%20de%20Saber%20Mais%20Informa%C3%A7%C3%B5es.&phone=5511991239476"
              target="_blank"
            >
              <FaWhatsapp size={20} /> (11) 99123-9476
            </a>
          </p>
          <p>
            <a href="mailto:comercial@eleconfortelevadores.com.br" target="_blank">
              <MdEmail size={20} /> comercial@eleconfortelevadores.com.br
            </a>
          </p>
        </div>

        <div className="footerMidia">
          <h3>Redes socias</h3>
          <div className="socialIcons">
            <a href="https://www.facebook.com/eleconfortelevadores" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} /> Facebook
            </a>
            <a className="iconInstagram" href="https://www.instagram.com/eleconfortelevadores/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footerCopyright">
        <p>&copy; {new Date().getFullYear()} Eleconfort. Todos os direitos reservados. By RastaIT</p>
      </div>

      <button className="scrollToTop" onClick={scrollToTop}>
        <img src={ArrowUp} alt="Voltar ao topo" className="arrow-icon" />
      </button>
    </footer>
  );
}
