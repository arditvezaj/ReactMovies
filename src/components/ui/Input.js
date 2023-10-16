const Input = ({ label, type, onChange, value }) => {
  return (
    <div className="w-full flex flex-col">
      <label className="mt-4 mb-1">{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="rounded-md border py-[6px] px-2"
      />
    </div>
  );
};
export default Input;
