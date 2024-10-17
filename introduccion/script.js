
document.title = 'Iniciar Sesión';

//Crear el contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px';

//Crear el título
const title = document.createElement('h2');
title.textContent = 'Iniciar Sesion';
container.appendChild(title);

//Crear el formulario
const form = document.createElement('form');

//Crear campo de nombre de usuario
const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de Usuario';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;         //Debe ser un campo requerido que debe de ingresar
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

//Crear contraseña
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña';

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.required = true;    //Debe ser un campo requerido
form.appendChild(passwordLabel);
form.appendChild(passwordInput);

//Crear Boton de Envio
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Iniciar Sesion';
form.appendChild(submitButton);

//Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFINIDA 
const validarUser = 'Juanito';
const validarPassword = '2589';

//Validar el user y el password
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //validar el nombre y el password
    if(usernameInput.value == "Juanito" && passwordInput.value == "2589"){
        message.textContent = '¡BIENVENIDO!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Nombre de usuario o contraseña incorrecto';
        message.style.color = 'red';
    }

    //limpiar los input
    usernameInput.value = '';
    passwordInput.value = '';

})