import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Form/Input';
import Buttom from '../Form/Buttom';
import { TOKEN_POST } from '../../api.js';

const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  const { request, response, fetchData } = useFetch();

  const getUser = (token) => {};

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      request(url, options);
    } else {
      console.log('Formulário inválido. Corrija os erros.');
    }
  };

  useEffect(() => console.log(fetchData.token), [fetchData]);

  return (
    <section className="my-2">
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label={'Usuário'} type={'text'} id={'username'} {...username} />
        <Input
          label={'Senha'}
          type={'password'}
          id={'password'}
          {...password}
        />
        <Buttom label={'Entrar'} />
      </form>
      <Link to="/login/register">Cadastre-se</Link>
      <Link to="/login/lost">Perdeu seu senha?</Link>
    </section>
  );
};

export default LoginForm;
