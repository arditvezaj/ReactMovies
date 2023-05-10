const Button = (props) => {
  return (
    <button type={props.type} className="px-4 mt-8 mr-3 py-1 rounded-md bg-orange-600 text-white">
      {props.name}
    </button>
  );
};

export default Button;
