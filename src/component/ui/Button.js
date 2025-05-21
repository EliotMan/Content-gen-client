const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-xl font-semibold text-white ${
        disabled ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
      } focus:outline-none shadow`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
