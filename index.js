// clase Proveedor

class Proveedor {
    constructor(nombre, email, password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

//Variables para trabajar en DOM

let arrayProveedores = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

//ver xq no funciona

let nombreI = miFormulario.children[1].value;
let emailI = miFormulario.children[3].value;
let passwordI = miFormulario.children[5].value;

let contenedor = document.querySelector("#proveedorIngresado");
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

//eventos en botones

miFormulario.addEventListener("submit", agregarProveedores);
btnMostrar.addEventListener("click", MostrarTodosProveedores);

inputNombre.focus();

// FUNCION = COMPROBAR IGNRESO DE DATOS

function validarForm () {
    nombreI = formulario.children[1].value;
    emailI = formulario.children[3].value;
    passwordI = formulario.children[5].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(passwordI);

    if (nombreI== `` || emailI == `` || passwordI == ``){
        alert(`ERROR - Debe completar todos los campos para continuar`);
        inputNombre.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}

//FUNCION = AGREGAR Proveedores

function agregarProveedores(e) {
    e.preventDefault ();
    validarForm(); // confirmar estado de los datos del formulario
    if (bandera == true) {
        let opcion = confirm("Esta seguro de agregar");
        if (opcion == true) {
            let formulario = e.target
            arrayProveedores.push(new Proveedor(nombreI, emailI, passwordI));
        } else {
            alert(`No se agregara el usuario`);
        }
        formulario.children[1].value = ``;
        formulario.children[3].value = ``;
        formulario.children[5].value = ``;
        contenedor.innerHTML = ``;
        AgregarAlDom();
        inputNombre.focus();
    } else {
        inputNombre.focus();
    }
}

// FUNCION = MOSTRAR EN DOM EL ULTIMO INGRESADO

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Ultimo Ingresado: </h3>
    <p><strong> Nombre: </strong> ${nombreI}</p>
    <p><strong> Email: </strong> ${emailI}</p>
    <p><strong> Password: </strong> ${passwordI}</p>
    <hr>`;
}

// FUNCION = MOSTRAR TODOS EN UN DIV EN DOM

function MostrarTodosProveedores(e) {
    e.preventDefault();
    let i =0;
    displayTodos.innerHTML = `<h3> Listado de todos los Proveedores</h3>`;
    for (const Proveedor of arrayProveedores){
        displayTodos.innerHTML += `
        <p><strong> Nombre: </strong> ${Proveedor.nombre}</p>
        <p><strong> Email: </strong> ${Proveedor.email}</p>
        <p><strong> Password: </strong> ${Proveedor.password}</p>
        <hr>`;
    }
}