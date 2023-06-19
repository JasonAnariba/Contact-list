// Esta variable sera para la lista de contactos inicial

let contactsdeltrabajo = [
  "Alex Lopez",
  "Duglas Hernandez",
  "Jason Anariba",
  "Melanie Anariba",
  "Claudia Anariba",
  "Samuel Mejia",
  "Alberto Castellon",
];

// Este codigo funciona para mostrar lista de contactsdeltrabajo en la consola.
function imprimir() {
  if (contactsdeltrabajo.length > 0) {
    console.log("Lista de contactos:");
    contactsdeltrabajo.forEach((contacto) => {
      console.log(contacto);
    });
  } else {
    console.log("No existen contactos en la lista");
  }
}

console.log("Contactos del Trabajo de Jason Anariba");
imprimir();

//variable que se le da al "Id" de cada objeto
let identidad = 1;

//Función para añadir un nuevo contacto a la lista
function agregarContacto(
  id,
  nombre,
  apellido,
  telefono,
  ubicacion,
  ciudad,
  direccion
) {
  const contacto = {
    id: identidad,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    ubicacion: ubicacion,
    ciudad: ciudad,
    direccion: direccion,
  };

  contactsdeltrabajo.push(contacto);
  console.log("El siguiente contacto fue agregado con exito");
  console.log(contacto);
  identidad++;
}

//aqui se ingresan los nuevos contactos
agregarContacto(
  identidad,
  "Luis",
  "Argueta",
  94667687,
  "Barrio Saragoza",
  "Siguatepeque",
  "3 cuadras de la cruz roja"
);

agregarContacto(
  identidad,
  "Marlon",
  "Ochoa",
  87788998,
  "Barrio El Carmen",
  "San Pedro Sula",
  "Colonia 3"
);
agregarContacto(
  identidad,
  "Merlin",
  "Delcid",
  45566788,
  "Barrio Suyapa",
  "Tegucigalpa",
  "Colonia el sitio"
);

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  const Index = contactsdeltrabajo.findIndex((contacto) => contacto.id === id);
  if (Index !== -1) {
    contactsdeltrabajo.splice(Index, 1);
    console.log("El siguiente contacto fue eliminado correctamente.");
  } else {
    console.log("El contacto no existe en la lista.");
  }

  console.log(id);
}

//aqui se ingresa el contacto que se desea borrar
borrarContacto(2);

//funcion para actualizar contacto

function actualizarContacto(
  id,
  NombreActualizado,
  ApellidoActualizado,
  TelefonoActualizado,
  UbicacionActualizada,
  Nuevaciudad,
  NuevaDireccion
) {
  let busquedaContacto = false;

  contactsdeltrabajo.forEach((contacto) => {
    if (id === contacto.id) {
      contacto.nombre = NombreActualizado;
      contacto.apellido =ApellidoActualizado;
      contacto.telefono = TelefonoActualizado;
      contacto.ubicacion = UbicacionActualizada;
      contacto.ciudad = Nuevaciudad;
      contacto.direccion = NuevaDireccion;
      busquedaContacto = true;
    }
  });

  if (busquedaContacto) {
    console.log("Actualizado con exito");
  } else {
    console.log("No se ha encontrado ese contacto");
  }
  console.log(id);
}

actualizarContacto(
  1,
"Mauricio",
  "Gomez",
  89898989,
  "Tegucigalpa",
  "Tegucigalpa",
  "colonia miraflores"
);

//Una vez ingresado un haber ingresado los contactos deseado y borrar otros se muestra lista actualizada

console.log("Nueva Lista");
imprimir();

///
