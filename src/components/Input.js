const Input = (props) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="mt-5">{props.name}</label>
        <input type="text" className="rounded-md border py-1 px-2" />
      </div>
    </>
  );
};
export default Input;
