const Error = ({ error }) => {
  if (!error) return null;
  return <span className="text-red-500 text-[.8rem] my-1">{error}</span>;
};

export default Error;
