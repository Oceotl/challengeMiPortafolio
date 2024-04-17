document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.querySelector('.formcontato__input[name="nombre"]').value.trim();
        const email = document.querySelector('.formcontato__input[name="email"]').value.trim();
        const asunto = document.querySelector('.formcontato__input[name="asunto"]').value.trim();
        const mensaje = document.querySelector('.formcontato__textarea').value.trim();

        if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Si todos los campos son válidos, puedes enviar el formulario aquí
        // Aquí podrías agregar el código para enviar los datos del formulario a tu servidor

        // Por ejemplo:
        // const formData = {
        //     nombre: nombre,
        //     email: email,
        //     asunto: asunto,
        //     mensaje: mensaje
        // };
        // console.log(formData); // Puedes ver los datos del formulario en la consola

        // Reiniciar el formulario después del envío exitoso
        form.reset();
    });
});
