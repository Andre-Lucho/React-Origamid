import axios from 'axios';
export const API_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    body: body,
  };
};

export const TOKEN_VALIDATE_POST = (token) => {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: API_URL + '/api/user',
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: API_URL + '/api/user',
    body: body,
  };
};
