import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import '../../styles/layout/header.scss';

export function Header() {
  return (
    <>
      <header className="containerHeader">
        <img src={Logo} alt="Logo da empresa Eleconfort" />

        <div className="containerLinks">
          <p>Inicio</p>
          <Link to="/about">Sobre nós</Link> 
          <p>Serviços</p>
          <p>Contato</p>
        </div>
      </header>
    </>
  );
}
