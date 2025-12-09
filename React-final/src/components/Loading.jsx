import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Loading = () => {
  const { loading } = useContext(UserContext);
  return <div>{loading && <span>Loading...</span>}</div>;
};

export default Loading;
