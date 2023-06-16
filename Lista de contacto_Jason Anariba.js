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

//Función para añadir un nuevo contacto a la lista
function agregarContacto(Nuevocontacto) {
  contactsdeltrabajo.push(Nuevocontacto);
  console.log("El siguiente contacto fue agregado con exito");
  console.log(Nuevocontacto);
}
//aqui se ingresan los nuevos contactos
agregarContacto("Fidel Reyes");

// Función para borrar un contacto existente de la lista
function borrarContacto(contacto) {
  const index = contactsdeltrabajo.indexOf(contacto);
  if (index !== -1) {
    contactsdeltrabajo.splice(index, 1);
    console.log("El siguiente contacto fue eliminado correctamente.");
  } else {
    console.log("El contacto no existe en la lista.");
  }

  console.log(contacto);
}

//aqui se ingresa el contacto que se desea borrar
borrarContacto("Samuel Mejia");

//Una vez ingresado un haber ingresado los contactos deseado y borrar otros se muestra lista actualizada

console.log("Nueva Lista");
imprimir();
