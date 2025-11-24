import { Link } from "react-router-dom";
export const Boton = ({ to, text, onClick, type = "button", icon }) => {
  const botonStyle =
    "px-3 py-2 border text-xl text-white border-Desaturated-Dark-Blue rounded-xl  hover:bg-Very-Dark-Grayish-Blue/30 transition-all duration-500 hover:scale-[1.05] cursor-pointer";
  if (to) {
    return (
      <Link to={to} className={botonStyle}>
        {icon}
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={botonStyle}>
      {icon}
      {text}
    </button>
  );
};
