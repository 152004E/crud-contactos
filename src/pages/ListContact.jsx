import { Boton } from "../components/Boton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { EditarContacto } from "../components/EditarContacto";
export const ListContact = () => {
  const [contactos, setContactos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactoSeleccionado, setContactoSeleccionado] = useState({});

  useEffect(() => {
    fetch("https://crud-contactos.onrender.com/contactos")
      .then((res) => res.json())
      .then((data) => setContactos(data))
      .catch((error) => {
        console.error("Error al encontrar los datos", error);
      });
  }, []);

  const refrescarContactos = () => {
    fetch("https://crud-contactos.onrender.com/contactos")
      .then((res) => res.json())
      .then((data) => setContactos(data))
      .catch((error) => {
        console.error("Error al encontrar los datos", error);
      });
  };

  const eliminarContacto = async (id) => {
    let respuesta = confirm("¿Seguro que deseas eliminar?");
    if (respuesta == true) {
      try {
        const res = await fetch(`https://crud-contactos.onrender.com/contactos/${id}`, {
          method: "DELETE",
        });

        if (!res.ok) throw new Error("Error al Eliminar el contacto");

        refrescarContactos();
      } catch (error) {
        console.error(error);
        alert("Hubo un error al Eliminar el contacto");
      }
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
      <div className="flex flex-col gap-4 items-center justify-center bg-Very-Dark-Grayish-Blue/30 px-4 py-5 backdrop-blur-xs  rounded-2xl">
        <h1 className="text-white text-6xl text-center">tabla de contactos.</h1>
        <table className="border border-Very-Dark-Grayish-Blue  bg-Very-Dark-Grayish-Blue/50 w-full py-3 px-4  text-[21px] text-Light-Grayish-Blue">
          <thead>
            <tr>
              <th className="border border-Very-Dark-Grayish-Blue">contacto</th>
              <th className="border border-Very-Dark-Grayish-Blue">Número</th>
              <th className="border border-Very-Dark-Grayish-Blue">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => {
              return (
                <tr
                  key={contacto.id}
                  className="text-center hover:bg-Desaturated-Dark-Blue  duration-400"
                >
                  <td className="border border-Very-Dark-Grayish-Blue">
                    {contacto.nombre}
                  </td>
                  <td className="border border-Very-Dark-Grayish-Blue">
                    {contacto.telefono}
                  </td>
                  <td className="border border-Very-Dark-Grayish-Blue">
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        setModalOpen(true);
                        setContactoSeleccionado(contacto);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} className="mr-1" />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => {
                        eliminarContacto(contacto.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="mr-1" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" flex justify-center items-center gap-5">
          <Boton
            text={"Regresar"}
            to="/"
            icon={<FontAwesomeIcon icon={faArrowLeft} className="mr-1" />}
          />
          <Boton
            text={"Ir a Registar"}
            to={"/registrar"}
            type="submit"
            icon={<FontAwesomeIcon icon={faUserPlus} className="mr-1" />}
          />
        </div>
      </div>

      {modalOpen && (
        <EditarContacto
          contactoSeleccionado={contactoSeleccionado}
          setModalOpen={setModalOpen}
          refrescarContactos={refrescarContactos}
        />
      )}
    </div>
  );
};
