const Button = ({ title, onClick, type, variant }) => {
  
  let color;
  if (variant === "primary") {
    color = "bg-violet-500 hover:bg-violet-400";
  } else if (variant === "secondary") {
    color = "bg-gray-400 hover:bg-gray-300";
  } else if (variant === "danger") {
    color = "bg-red-400 hover:bg-red-300";
  }

  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 mt-4 mr-3 py-2 rounded-md text-white ${color}`}
    >
      {title}
    </button>
  );
};

export default Button;
