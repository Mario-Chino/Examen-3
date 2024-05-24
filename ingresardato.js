const parqueoData = []; //Lista para almacenar los datos de parqueo
class Parqueo extends HTMLElement{
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Obtener los atributos del elemento
        const nombre = this.getAttribute('nombre');
        const apellido = this.getAttribute('apellido');
        const marca = this.getAttribute('marca');
        const modelo = this.getAttribute('modelo');
        const color = this.getAttribute('color');
        const placa = this.getAttribute('placa');
        const hora = this.getAttribute('hora');
        const lugar = this.getAttribute('lugar');

        // Crear elementos para mostrar los datos de parqueo
        const parContainer = document.createElement('div');
        parContainer.classList.add('parqueo');

        const nombreElement = document.createElement('h1');
        nombreElement.textContent = nombre;
        parContainer.appendChild(nombreElement);

        const apellidoElement = document.createElement('h1');
        apellidoElement.textContent = apellido;
        parContainer.appendChild(apellidoElement);

        const marcaElement = document.createElement('h1');
        marcaElement.textContent = marca;
        parContainer.appendChild(marcaElement);

        const modeloElement = document.createElement('h1');
        modeloElement.textContent = modelo;
        parContainer.appendChild(modeloElement);

        const colorElement = document.createElement('h1');
        colorElement.textContent = color;
        parContainer.appendChild(colorElement);

        const placaElement = document.createElement('h1');
        placaElement.textContent = placa;
        parContainer.appendChild(placaElement);

        const horaElement = document.createElement('h1');
        horaElement.textContent = hora;
        parContainer.appendChild(horaElement);


        const lugarElement = document.createElement('h1');
        lugarElement.textContent = lugar;
        parContainer.appendChild(lugarElement);

        shadow.appendChild(parContainer);
    }
}

customElements.define('parqueo-element', Parqueo);

// Función para manejar el envío del formulario
function handleSubmit(event) {
    event.preventDefault(); // Evita el vdefecto de envío del formulario
    const form = event.target; // Obtiene el formulario enviado
    const formData = new FormData(form); // Crea un objeto con los datos del formulario

    // Guardar los datos en la lista
    const datos = {};
    formData.forEach((value, key) => {
        datos[key] = value;
    });
    parqueoData.push(datos);

    // Aquí podrías enviar los datos a un servidor, almacenarlos localmente, etc.
    console.log(parqueoData);
}

// Agregar el evento de envío al formulario
const form = document.getElementById('parqueo-form');
form.addEventListener('submit', handleSubmit);

// Función para mostrar la lista de datos de parqueo
function mostrarLista() {
    const listaParqueo = document.getElementById('lista-parqueo');
    listaParqueo.innerHTML = ''; // Limpiar la lista antes de mostrar los nuevos usuarios

    parqueoData.forEach((datos) => {
        const item = document.createElement('li');
        item.textContent = `Nombre: ${datos.nombre}, Apellido: ${datos.apellido}, Marca: ${datos.marca}, Modelo: ${datos.modelo}, Color: ${datos.color}, Placa: ${datos.placa}, hr de entrada: ${datos.hora}, lugar: ${lugar}`;
        listaParqueo.appendChild(item);
    });
}

// Agregar evento de clic al botón para mostrar la lista
const mostrarListaBtn = document.getElementById('mostrar-lista');
mostrarListaBtn.addEventListener('click', mostrarLista);
