import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Loading = () => {
  const { loading } = useContext(UserContext);
  return <p>{loading && <span>Loading...</span>}</p>;
};

export default Loading;
