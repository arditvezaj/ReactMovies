const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className="px-6 mt-4 mr-3 py-2 rounded-md hover:bg-sky-300 bg-sky-400 text-white"
    >
      {props.name}
    </button>
  );
};

export default Button;
