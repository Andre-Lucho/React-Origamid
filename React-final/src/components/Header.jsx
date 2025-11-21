import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
