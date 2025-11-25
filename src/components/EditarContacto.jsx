import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUserPlus,
  faUser,
  faPhone,
  faCircleUser,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { Boton } from "../components/Boton";
import { useState , useEffect } from "react";
export const EditarContacto = ({contactoSeleccionado,setModalOpen , refrescarContactos}) => {

    const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");

    useEffect(()=>{
        if (contactoSeleccionado) {
            setNombre(contactoSeleccionado.nombre)
            setTelefono(contactoSeleccionado.telefono)
        }
    },[contactoSeleccionado])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nombreMayus = nombre.toUpperCase();
    if (telefono.length < 9) {
      alert("El numero tiene que tener mas de 10 numeros");
      return
    }

    try {
      const res = await fetch(`https://crud-contactos.onrender.com/contactos/${contactoSeleccionado.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: nombreMayus, telefono }),
      });

      if (!res.ok) throw new Error("Error al actualizar el contacto");

      alert("Contacto Actualizado exitosamente");
      setModalOpen(false)
      refrescarContactos();
      
    } catch (error) {
      console.error(error);
      alert("Hubo un error al actualizar");
    }
  };
  return (
    <div className="absolute flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-5xl text-center">
          Editar Contacto
        </h1>
        <form
          onSubmit={handleSubmit}
          className="border border-Desaturated-Dark-Blue w-[310px] p-6 rounded-2xl flex flex-col justify-center items-center "
        >
          <div className="flex flex-col w-[250px] relative">
            <label className="text-white text-xl mb-2">
              <FontAwesomeIcon icon={faUser} /> Nombre
            </label>

            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-Light-Grayish-Blue absolute bottom-7 left-2 text-xl"
            />
            <input
              type="text"
              className="border border-Light-Grayish-Blue py-2 rounded-xl mb-4 text-white pl-9 text-[18px]"
              placeholder="Nombre de tu contacto"
              name="nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-[250px] relative">
            <label className="text-white text-xl mb-2">
              <FontAwesomeIcon icon={faPhone} />
              Teléfono
            </label>
            <FontAwesomeIcon
              icon={faMobile}
              className="text-Light-Grayish-Blue absolute bottom-7 left-2 text-xl"
            />
            <input
              type="number"
              className="border border-Light-Grayish-Blue py-2 rounded-xl mb-4 text-white pl-9  text-[18px] "
              placeholder="Numero de tu contacto"
              name="telefono"
              value={telefono}
            onChange={(e)=> setTelefono(e.target.value)}
              required
            />
          </div>

          <div className=" flex flex-col justify-center items-center gap-5">
            <div className="flex  justify-center items-center gap-2">
              <Boton
                text={"Cancelar"}
                onClick={()=> {setModalOpen(false)}}
                icon={<FontAwesomeIcon icon={faArrowLeft} className="mr-1" />}
              />
              <Boton
                text="Actualizar"
                type="submit"
                icon={<FontAwesomeIcon icon={faUserPlus} className="mr-1" />}
              />
            </div>
            
          </div>
        </form>
      </div>
  )
}

