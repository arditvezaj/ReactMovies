const Button = (props) => {
  return (
    <button type={props.type} className="px-6 mt-8 mr-3 py-2 rounded-md hover:bg-sky-300 bg-sky-400 text-white">
      {props.name}
    </button>
  );
};

export default Button;
