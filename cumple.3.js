document.addEventListener('DOMContentLoaded', function() {
    const botonSorpresa = document.getElementById('boton-sorpresa');
    const mensajeSorpresa = document.getElementById('mensaje-sorpresa');
    const imagenPastel = document.getElementById('imagen-pastel');

    botonSorpresa.addEventListener('click', function() {
        if (mensajeSorpresa.classList.contains('oculto')) {
            mensajeSorpresa.classList.remove('oculto');
            botonSorpresa.textContent = 'Ocultar Sorpresa';
            // Pequeña animación para la imagen
            imagenPastel.style.transform = 'scale(1.1) rotate(5deg)';
        } else {
            mensajeSorpresa.classList.add('oculto');
            botonSorpresa.textContent = '¡Haz Clic Aquí!';
            imagenPastel.style.transform = 'scale(1) rotate(0deg)';
        }
    });

    // Opcional: Cambiar la imagen al pasar el mouse por encima
    imagenPastel.addEventListener('mouseover', function() {
        // Puedes tener otra imagen lista para cambiar
        // imagenPastel.src = "otra-imagen.png";
    });

    imagenPastel.addEventListener('mouseout', function() {
        // Volver a la imagen original si la cambiaste
        // imagenPastel.src = "https://i.imgur.com/tYyYQfX.png";
    });
});