import { useState } from 'react';
import { urlBase } from './url.js';

const PhotoPost = () => {
  const [token, setToken] = useState('');

  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: devo passar como string
      body: {},
    };

    const formResponse = await fetch(urlBase + 'api/photo', options);
    console.log(formResponse);
    const formJson = await formResponse.json();
    console.log(formJson);
  };

  // const { username, email, password } = form;

  return (
    <form onSubmit={handleSubmit} className="mx-3 my-5 block">
      <label htmlFor="token">Token</label>
      <input
        type="text"
        id="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
        className="my-3 block border-2 border-blue-500"
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        className="my-3 block border-2 border-blue-500"
      />
      <label htmlFor="weight">Peso</label>
      <input
        type="text"
        id="weight"
        value={weight}
        onChange={({ target }) => setWeight(target.value)}
        className="my-3 block border-2 border-blue-500"
      />
      <label htmlFor="age">Idade</label>
      <input
        type="text"
        id="age"
        value={age}
        onChange={({ target }) => setAge(target.value)}
        className="my-3 block border-2 border-blue-500"
      />
      <label className="mt-10 block" htmlFor="img">
        Postar Imagem
      </label>
      <input
        type="file"
        id="img"
        onChange={({ target }) => setImg(target.files[0])}
        className="mt-5 py-2 px-3 bg-red-400 border-2 border-red-700 text-black block"
      />
    </form>
  );
};

export default PhotoPost;
