/*document.title='Curso clase de JS';
console.log(document.tittle);

const h1=document.createElement("h1");

h1.textContent= "Mi texto desde js"
document.body.appendChild(h1);

const parrafo = document.createElement("p");
parrafo.textContent= "Mi texto parrafo uwu"

document.body.appendChild(parrafo);*/
document.title = 'Iniciar sesión';

// Crear contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px';

// Crear título
const title = document.createElement('h2');
title.textContent = "Iniciar sesión";
container.appendChild(title);

// Crear el formulario
const form = document.createElement('form');

// Crear campo de nombre de usuario 
const usernamelabel = document.createElement('label');
usernamelabel.textContent = "Nombre de usuario";
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

// Crear campo de contraseña
const passwordlabel = document.createElement('label');
passwordlabel.textContent = "Contraseña";
const passwordInput = document.createElement('input');
passwordInput.required = true;
form.appendChild(passwordlabel);
form.appendChild(passwordInput);

// Crear botón de envío
const submitbutton = document.createElement('button');
submitbutton.textContent = 'Iniciar sesión';
form.appendChild(submitbutton);

// Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

// Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

// Datos de inicio de sesión predefinidos
const validaUsername = 'jade';
const validaPassword = '1234';

// Manejar el envío de formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar el nombre de usuario y la contraseña
    if (usernameInput.value === validaUsername && passwordInput.value === validaPassword) {
        message.textContent = 'Bienvenido';
        message.style.color = 'green';
    } else {
        message.textContent = 'Usuario o contraseña incorrectos';
        message.style.color = 'red'; 
    }
});
