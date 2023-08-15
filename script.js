// Agregar un evento 'submit' al formulario que previene el comportamiento por defecto
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario

    // Validar nombre
    let entradaNombre = document.getElementById('name'); // Obtener el campo de entrada del nombre
    let errorNombre = document.getElementById('nameError'); // Obtener el elemento para mostrar errores de nombre

    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduce tu nombre'; // Mostrar mensaje de error
        errorNombre.classList.add('error-message'); // Agregar una clase CSS para resaltar el mensaje de error
    } else {
        errorNombre.textContent = ''; // Limpiar el mensaje de error
        errorNombre.classList.remove('error-message'); // Remover la clase CSS de error si es necesario
    }

    // Validar correo electrónico
    let emailEntrada = document.getElementById('email'); // Obtener el campo de entrada de correo electrónico
    let emailError = document.getElementById('emailError'); // Obtener el elemento para mostrar errores de correo

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Patrón de validación de correo

    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introduce un email válido'; // Mostrar mensaje de error
        emailError.classList.add('error-message'); // Agregar una clase CSS para resaltar el mensaje de error
    } else {
        emailError.textContent = ''; // Limpiar el mensaje de error
        emailError.classList.remove('error-message'); // Remover la clase CSS de error si es necesario
    }

    // Validar contraseña
    let contrasenaEntrada = document.getElementById('password'); // Obtener el campo de entrada de contraseña
    let contrasenaError = document.getElementById('passwordError'); // Obtener el elemento para mostrar errores de contraseña

    if (contrasenaEntrada.value.length < 8) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres'; // Mostrar mensaje de error
        contrasenaError.classList.add('error-message'); // Agregar una clase CSS para resaltar el mensaje de error
    } else {
        contrasenaError.textContent = ''; // Limpiar el mensaje de error
        contrasenaError.classList.remove('error-message'); // Remover la clase CSS de error si es necesario
    }

    // Si todos los campos son válidos, mostrar un mensaje de éxito y reiniciar el formulario
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        alert('El formulario se ha enviado con éxito');
        document.getElementById('formulario').reset(); // Reiniciar el formulario
    }
});
