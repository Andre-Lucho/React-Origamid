import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Loading = (loading) => {
  return <p>{loading && <span>Loading...</span>}</p>;
};

export default Loading;
