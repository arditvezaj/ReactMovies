const Input = (props) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="mt-6">{props.name}</label>
        <input type="text" className="rounded-md border" />
      </div>
    </>
  );
};
export default Input;
