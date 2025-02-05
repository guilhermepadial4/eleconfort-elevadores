import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import Logo from '../../assets/logo.png';

import '../../styles/layout/header.scss';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="containerHeader">
      <Link to="/">
        <img src={Logo} alt="Logo da empresa Eleconfort" />
      </Link>

      <div className="containerLinks">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre nós</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Início
        </Link>
        <Link to="/sobre" onClick={() => setMenuOpen(false)}>
          Sobre nós
        </Link>
        <Link to="/servicos" onClick={() => setMenuOpen(false)}>
          Serviços
        </Link>
        <Link to="/contato" onClick={() => setMenuOpen(false)}>
          Contato
        </Link>
      </div>
    </header>
  );
}
