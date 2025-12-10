import useForm from '../../Hooks/useForm';

const Input = ({
  id,
  label,
  type,
  error,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <div className="my-4">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="
        p-2 bg-[#2f4657ff] border-[#181f2b] border-2 rounded-md transition-all duration-200 hover:outline-0 hover:bg-[#3e5c72] hover:border-ligth hover:shadow-[0_0_0_2px_#a2bdd0,0_0_0_2px_#5781a0] focus:outline-0 focus:border-ligth focus:bg-[#3e5c72] focus:shadow-[0_0_0_2px_#a2bdd0,0_0_0_2px_#5781a0]"
        {...props}
      />
      {error && <p className="text-red-500 text-[.8rem] my-1">{error}</p>}
    </div>
  );
};

export default Input;
