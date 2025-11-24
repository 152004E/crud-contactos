import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { Boton } from "./Boton";
export const Bienvenida = () => {
  
  return (
    <div className="absolute inset-0 flex justify-center items-center px-6">
      <div className="flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-6xl">Bienvenido.</h1>
        <p className="text-white text-5xl text-center">
          ¿Deseas registrar un nuevo contacto?
        </p>
        
        <Boton text={"Ir a registrar"} to={"/registrar"} icon={ <FontAwesomeIcon icon={faUser} className="mr-3" /> } />
        
       
      </div>
    </div>
  );
};
