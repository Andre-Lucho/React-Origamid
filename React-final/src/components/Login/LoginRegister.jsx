import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import useForm from '../Hooks/useForm.jsx';
import useFetch from '../Hooks/useFetch.jsx';

import { USER_POST } from '../../api.js';

import Input from '../Form/Input';
import Button from '../Form/Buttom';
import Loading from '../Helper/Loading.jsx';
import Error from '../Helper/Error.jsx';

const LoginRegister = () => {
  const username = useForm('');
  const email = useForm('email');
  const password = useForm('');

  const { userLogin, error: errorContext } = useContext(UserContext);
  const {
    request: requestReg,
    loading: loadingReg,
    error: errorReg,
  } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      const { url, body } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      try {
        const { response, json } = await requestReg(url, 'post', body, {});
        if ((response && response.status === 200) || response.status === 201) {
          await userLogin(username.value, password.value);
        }
      } catch (err) {
        console.log(err.response);
        throw err;
      }
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="font-secundary leading-1 text-4xl relative z-20 text-[#4799fd]">
        Cadastre-se
      </h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type={'text'} id={'username'} {...username} />
        <Input label="Email" type={'email'} id={'email'} {...email} />
        <Input label="Senha" type={'password'} id={'password'} {...password} />
        {loadingReg ? (
          <>
            <Button label="Cadastrar" disabled />
            <Loading loading={loadingReg} />
          </>
        ) : (
          <Button label="Cadastrar" />
        )}
        <Error error={errorReg} />
        <Error error={errorContext} />
      </form>
    </section>
  );
};

export default LoginRegister;
