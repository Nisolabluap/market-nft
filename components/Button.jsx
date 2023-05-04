const Button = ({ btnName, classStyles, handleClick }) => (
  <button
    type="button"
    className={`bg-gradient-to-bl from-pink-800 via-red-600 to-yellow-400 text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}

  </button>
);

export default Button;
