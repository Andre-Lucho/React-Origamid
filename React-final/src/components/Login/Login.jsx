import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/lost" element={<LoginLost />} />
        <Route path="/reset" element={<LoginReset />} />
      </Routes>
    </div>
  );
};

export default Login;
