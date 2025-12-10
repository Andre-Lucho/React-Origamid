import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Buttom from '../Form/Buttom';
import { UserContext } from '../../UserContext';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

import { FaRegPaperPlane } from 'react-icons/fa';

const LoginForm = () => {
  const { userLogin, error, loading, login } = useContext(UserContext);
  const username = useForm('');
  const password = useForm('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      try {
        await userLogin(username.value, password.value);
        console.log('Login ok');
      } catch (error) {
        console.error('Erro no login:', error);
      }
    } else {
      console.log('Formulário inválido. Corrija os erros.');
    }
  };

  return (
    <section className="my-2 animeLeft">
      <div className="flex items-center">
        <h1 className="my-4 mx-0 font-secundary leading-1 text-4xl relative z-20 text-[#aac03eff]">
          Login
        </h1>
        <FaRegPaperPlane className="absolute z-10 block w-4 h-4 left-20 top-4 text-[#5a6621]" />
      </div>
      <form onSubmit={handleSubmit} className="mb-8">
        <Input label={'Usuário'} type={'text'} id={'username'} {...username} />
        <Input
          label={'Senha'}
          type={'password'}
          id={'password'}
          {...password}
        />
        {loading ? (
          <Buttom label={'Entrar'} disabled />
        ) : (
          <Buttom label={'Entrar'} />
        )}

        <Loading />
        <Error error={error} />
      </form>
      <Link
        to="/login/lost"
        className="inline-block py-2 text-[#7d7d7d] leading-1 after:inline-block after:h-0.5 after:w-full after:bg-current"
      >
        Perdeu seu senha?
      </Link>
      <div className="flex flex-col mt-10">
        <h2 className="font-secundary leading-1 text-2xl ">Cadastre-se</h2>
        <span className="bg-[#ddd] h-1.5 w-[120px] mt-2.5 rounded-4xl"></span>
      </div>
      <div className="my-4">
        <p className="mt-2 mb-3">Ainda não possui cadastro?</p>
        <Link
          to="/login/register"
          className="min-w-25 py-3 px-5 bg-[#aac03eff] text-ligth rounded-md cursor-pointer transition-shadow duration-100 hover:outline-0 hover:shadow-[0_0_0_2px_#f2ffb8,0_0_0_3px_#afbe63] focus:outline-0 focus:shadow-[0_0_0_2px_#f2ffb8,0_0_0_3px_#afbe63] disabled:opacity-25"
        >
          Cadastre-se
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
