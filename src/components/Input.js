const Input = (props) => {
  return (
    <>
      <label className="flex justify-start items-start">{props.name}</label>
      <input type="text" className="rounded-md" />
    </>
  );
};
export default Input;
