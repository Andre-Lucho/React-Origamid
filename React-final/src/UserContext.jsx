import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api.js';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const login = async () => {
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
          // caso de erro no fetch, reseta todos os dados de login
          userLogout();
          throw err;
        } finally {
          setLoading(false);
        }
      }
    };
    login();
  }, [login]);

  useEffect(() => console.log(error), [error]);

  const getUser = async (token) => {
    const { url, config } = USER_GET(token);
    try {
      const UserRes = await axios.get(url, config);
      console.log(UserRes.data);
      setData(UserRes.data);
      setLogin(true);
    } catch (err) {
      console.error(err.response);
    }
  };

  const userLogin = async (username, password) => {
    const { url } = TOKEN_POST();
    try {
      setError(null);
      setLoading(true);
      const tokenRes = await axios.post(url, { username, password });
      // if (!tokenRes.ok) throw new Error('Token inválido');
      if (tokenRes.data) {
        // console.log(tokenRes.data);
        const token = tokenRes.data.token;
        localStorage.setItem('token', token);
        await getUser(token);
      }
    } catch (err) {
      const errorMessage = err.response.data.message || 'Erro desconhecido';
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
      const loginRes = await axios.post(url, {}, config);
      // console.log(loginRes.data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const userLogout = async () => {
    setLogin(false);
    setData(null);
    setLoading(false);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
