import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

import Logo from '../../assets/logo.png';

import '../../styles/layout/header.scss';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="containerHeader">
      <Link to="/">
        <img src={Logo} alt="Logo da empresa Eleconfort" />
      </Link>

      <div className="containerLinks">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Início
        </Link>
        <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''}>
          Sobre nós
        </Link>
        <Link to="/servicos" className={location.pathname === '/servicos' ? 'active' : ''}>
          Serviços
        </Link>
        <Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''}>
          Contato
        </Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
          Início
        </Link>
        <Link to="/sobre" className={location.pathname === '/sobre' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
          Sobre nós
        </Link>
        <Link to="/servicos" className={location.pathname === '/servicos' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
          Serviços
        </Link>
        <Link to="/contato" className={location.pathname === '/contato' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
          Contato
        </Link>
      </div>
    </header>
  );
}
