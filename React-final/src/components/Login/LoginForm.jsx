import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../Hooks/useForm';
import Input from '../Form/Input';
import Buttom from '../Form/Buttom';
import { UserContext } from '../../UserContext';
import Loading from '../Loading';

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
      <form action="" onSubmit={handleSubmit}>
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
        {error && <span>{error}</span>}
      </form>
      <Link to="/login/register">Cadastre-se</Link>
      <Link to="/login/lost">Perdeu seu senha?</Link>
    </section>
  );
};

export default LoginForm;
