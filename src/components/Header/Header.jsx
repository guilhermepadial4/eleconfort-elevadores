import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import '../../styles/layout/header.scss';

export function Header() {
  return (
    <header className="containerHeader">
      <Link to="/">
        <img src={Logo} alt="Logo da empresa Eleconfort" />
      </Link>

      <div className="containerLinks">
        <Link to="/">Inicio</Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  );
}
