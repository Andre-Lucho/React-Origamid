import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

import { FaRegPaperPlane } from 'react-icons/fa';
import { LuDoorOpen } from 'react-icons/lu';
// import Buttom from './Form/Buttom';

const Header = () => {
  const { userLogout, login, data } = useContext(UserContext);

  return (
    <header className="w-full py-1 px-0 fixed z-20 top-0 shadow-sm bg-[#2f4657ff]">
      <nav className="flex justify-between items-center mx-6 h-16">
        <Link to={'/'} aria-label="Home" className="py-2 px-0">
          {/* logo */}
          <FaRegPaperPlane className="mr-1.5 h-8 w-8 text-[#aac03eff]" />
        </Link>
        <div className="flex items-center">
          {login ? (
            <Link to={'/userPage'} className="flex items-center py-3 px-2">
              {data.nome}
              <button
                label={'Sair'}
                onClick={userLogout}
                className="py-2 px-3 ml-3 bg-purple-400 text-purple-900 rounded-md cursor-pointer transition-shadow duration-100 hover:outline-0 hover:shadow-[0_0_0_2px_#e9d4ff,0_0_0_3px_#b9a5cd] focus:outline-0 focus:shadow-[0_0_0_2px_#e9d4ff,0_0_0_3px_#b9a5cd] disabled:opacity-25"
              >
                Sair
              </button>
            </Link>
          ) : (
            <Link to={'/login'} className="py-3 px-2">
              Login / Criar
            </Link>
          )}
          <LuDoorOpen className="ml-1.5 mb-1 h-6 w-8 text-[#aac03eff]" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

/* bg-no-repeat --> impede que a imagem seja 'ladrilhada' - aplica 1 única vez!
o navegador tenta preencher todo o espaço desse elemento repetindo a imagem horizontal e verticalmente. É como se ele estivesse "ladrilhando" o fundo com a sua imagem.
Se o seu elemento for maior do que a imagem de fundo, a imagem será repetida infinitamente (em ambos os eixos X e Y) para cobrir toda a área. */
