import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      LoginForm
      <Link to="/login/register">Cadastre-se</Link>
      <Link to="/login/lost">Perdeu seu senha?</Link>
    </>
  );
};

export default LoginForm;
