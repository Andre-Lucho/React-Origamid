const Error = ({ error }) => {
  if (!error) return null;
  return <p className="text-red-500 text-[.8rem] my-1">{error}</p>;
};

export default Error;
