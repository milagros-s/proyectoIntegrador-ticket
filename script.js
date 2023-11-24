const valorTicket = 200;
const descuentoEstudiante = 0.8; //0.5
const descuentoTrainee = 0.5;//.2
const descuentoJunior = 0.15; //15

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail = document.getElementById("mail");
const cantidadTickets = document.getElementById("cantidad");
const categoriaSelect = document.getElementById("categoria");




function calcularTotal() {

  if (/^(?!.* $)[A-Z][a-z ]+$/.test(nombre.value)) {
    nombre.classList.remove("is-invalid");
  } else if (nombre.value === "") {
    nombre.classList.add("is-invalid");
    nombre.focus();
  }

  const validarMail = (
    mail // aqui empieza
  ) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(mail.value); //+\.[a-zA-Z]{2,}$/
  };

  if (!validarMail(mail)) {
    mail.classList.add("is-invalid");
    mail.focus();
    // alert("Error!!!!");
  } else {
    mail.classList.remove("is-invalid");
  }


   let resumenTotal;
  const categoriaSeleccionada = parseInt(categoriaSelect.value, 10); // Convertir a número
  const cantidadTicketsValue = parseInt(cantidadTickets.value, 10);

  if (categoriaSeleccionada === 0) {
    resumenTotal = valorTicket * cantidadTicketsValue;
  }
  if (categoriaSeleccionada === 1) {
    resumenTotal = (valorTicket * descuentoEstudiante) * cantidadTicketsValue;
  }
  if (categoriaSeleccionada === 2) {
    resumenTotal = (valorTicket * descuentoTrainee) * cantidadTicketsValue;
  }
  if (categoriaSeleccionada === 3) {
    resumenTotal = (valorTicket * descuentoJunior) * cantidadTicketsValue;
  }

  console.log(categoriaSeleccionada);
  console.log(cantidadTicketsValue);
   document.getElementById('totalPagar').innerText = resumenTotal;

    alert(`Compra realizada:
      Nombre: ${nombre.value}
      Apellido: ${apellido.value}
      Email: ${mail.value}
      Cantidad de Tickets: ${cantidadTicketsValue}  
      Categoría: ${categoriaSeleccionada} 
      Precio Total: ${resumenTotal}`);
  }


const BTNCLIK = document.getElementById("btnResumen");
BTNCLIK.addEventListener("click", calcularTotal);
