/*----------------- 
COLORES PARA LOS HOVER
-------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const colors = [
        'hover-blue',
        'hover-orange',
        'hover-green',
        'hover-pink',
        'hover-lightblue',
        'hover-yellow',
        'hover-red'
    ];

    // Seleccionar un color al azar del array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const links = document.querySelectorAll('.contenedor-header header nav ul li a');
    const linksRedes = document.querySelectorAll('.inicio .contenido-banner .redes a');
    const linksIntereses = document.querySelectorAll('.sobremi .fila .col .contenedor-intereses .interes');
    const linksCV = document.querySelectorAll('.sobremi button .overlay');
    const titleSobreMi = document.querySelectorAll('.sobremi .contenido-seccion p span');
    const textSobreMi = document.querySelectorAll('.sobremi .fila .col ul li strong');
    const bordeImg = document.querySelectorAll('.inicio .contenido-banner .contenedor-img');
    const barraSkills = document.querySelectorAll('.skills .skill .progreso');
    const circleSkills = document.querySelectorAll('.skills .skill .barra-skill span');
    const curri1 = document.querySelectorAll('.curriculum .fila .item .casa');
    const curri2 = document.querySelectorAll('.curriculum .fila .item .fecha');
    const BordeCurri1 = document.querySelectorAll('.curriculum .fila .izq');
    const BordeCurri2 = document.querySelectorAll('.curriculum .fila .der');
    const curri3 = document.querySelectorAll('.curriculum .fila .item .conectori');
    const curri4 = document.querySelectorAll('.curriculum .fila .item .conectori .circuloi');
    const curri5 = document.querySelectorAll('.curriculum .fila .item .conectord');
    const curri6 = document.querySelectorAll('.curriculum .fila .item .conectord .circulod');
    const portfolio = document.querySelectorAll('.portfolio .galeria .proyecto .overlay');
    const contacto1 = document.querySelectorAll('.contacto button .overlay');
    const contacto3 = document.querySelectorAll('.contacto #button .overlay');
    const contacto2 = document.querySelectorAll('.contacto .col .info ul li i');
    const footer = document.querySelectorAll('footer .arriba');
    const footerRedes = document.querySelectorAll('footer .redes a');

    // Combinar todos los enlaces en un solo array
    const allElements = [...links, ...footer, ...footerRedes, ...contacto1, ...contacto2, ...contacto3, ...portfolio, ...curri3, ...curri4, ...curri5, ...curri6, ...linksRedes, ...linksIntereses, ...linksCV, ...titleSobreMi, ...textSobreMi, ...bordeImg, ...barraSkills, ...circleSkills, ...curri1, ...curri2, ...BordeCurri1, ...BordeCurri2];

    // Aplicar el color seleccionado a todos los elementos
    allElements.forEach(element => {
        element.classList.add(randomColor);
    });
});

/*----------------- 
----- FUNCIONES -----
-------------------*/

let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

window.onscroll = function () {
    efectoHabilidades();
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("gestion");
    }
}

function descargarCV() {
    const link = document.createElement('a');
    link.href = 'pdf/CV - Ana Valentina Medina Vargas.pdf';
    link.download = 'CV - Ana Valentina Medina Vargas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function () {
    var imagenPrincipal = document.querySelector('.inicio .contenido-banner .imagen-principal');

    imagenPrincipal.addEventListener('mouseover', function () {
        imagenPrincipal.style.opacity = 0; // Inicia la transición de opacidad
        setTimeout(function () {
            imagenPrincipal.src = './img/yo - copia.jpg'; // Cambia el src después de la transición
            imagenPrincipal.style.opacity = 1; // Vuelve a mostrar la imagen con la nueva src
        }, 250); // El tiempo aquí debe coincidir con la duración de la transición en CSS
    });

    imagenPrincipal.addEventListener('mouseout', function () {
        imagenPrincipal.style.opacity = 0; // Inicia la transición de opacidad
        setTimeout(function () {
            imagenPrincipal.src = './img/yo-camara - copia.jpg'; // Cambia de vuelta el src después de la transición
            imagenPrincipal.style.opacity = 1; // Vuelve a mostrar la imagen con la src original
        }, 250); // El tiempo aquí debe coincidir con la duración de la transición en CSS
    });
});

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
    var from_name = document.getElementById('from_name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email_id = document.getElementById('email_id').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();

    if (!from_name || !phone || !email_id || !subject || !message) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Previene el envío del formulario
    } else {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_1zhrpcv';

        emailjs.sendForm(serviceID, templateID, this).then(() => {
            btn.value = 'Enviar mensaje ';
            alert('Mensaje enviado!');
            form.reset();
        }, (err) => {
            btn.value = 'Enviar mensaje ';
            alert("Error al enviar el mensaje: " + JSON.stringify(err));
        });
    }


});

function redirectToSlider(title, description) {
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description);
    window.location.href = `./slider.html?title=${encodedTitle}&description=${encodedDescription}`;
}