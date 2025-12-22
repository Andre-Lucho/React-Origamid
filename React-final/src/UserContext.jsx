import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api.js';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          await tokenValidate(token);
          await getUser(token);
        } catch (err) {
          const errorMessage = err.response.data.message || 'Erro desconhecido';
          setError(errorMessage);
          userLogout();
          throw err;
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, []);

  const getUser = async (token) => {
    const { url, config } = USER_GET(token);
    try {
      const UserRes = await axios.get(url, config);
      console.log(UserRes.data);
      if (UserRes.data) {
        setData(UserRes.data);
        setLogin(true);
      }
    } catch (err) {
      console.error(err.response);
    }
  };

  const userLogin = async (username, password) => {
    const { url, body } = TOKEN_POST({ username, password });
    try {
      setError(null);
      setLoading(true);
      const tokenRes = await axios.post(url, body);
      // if (!tokenRes.ok) throw new Error('Token inválido');
      if (tokenRes.data) {
        // console.log(tokenRes.data);
        const token = tokenRes.data.token;
        localStorage.setItem('token', token);
        await getUser(token);
        navigate('/userPage');
      }
    } catch (err) {
      const errorMessage =
        'Nome de usuário ou senha inválida. Verifique seus dados novamente' ||
        'Erro desconhecido';
      setError(errorMessage);
      setLogin(false);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const tokenValidate = async (token) => {
    const { url, config } = TOKEN_VALIDATE_POST(token);
    try {
      const loginRes = await axios.post(url, {}, config); // {} = data = vazio
      // console.log(loginRes.data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const userLogout = () => {
    try {
      setLogin(false);
      setData(null);
      setLoading(false);
      localStorage.removeItem('token');
      setTimeout(() => {
        navigate('/login');
      }, 0);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        navigate('/');
      }, 0);
    }
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
