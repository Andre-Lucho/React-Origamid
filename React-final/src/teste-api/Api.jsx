import React from 'react';
import UserPost from './endpoint/UserPost';
import TokenPost from './endpoint/TokenPost';
import PhotoPost from './endpoint/PhotoPost';

const Api = () => {
  return (
    <div>
      <h2>Post</h2>
      <UserPost />
      <h2>Token</h2>
      <TokenPost />
      <h2>Fotos</h2>
      <PhotoPost />
    </div>
  );
};

export default Api;
