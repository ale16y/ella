// ===============================
// CARTA
// ===============================

const boton = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");

let abierta = false;

boton.addEventListener("click", () => {

    abierta = !abierta;

    if (abierta) {

        carta.classList.add("abierta");
        boton.innerHTML = "💖 Cerrar carta";

        crearCorazones(25);

        carta.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        carta.classList.remove("abierta");
        boton.innerHTML = "💌 Abrir carta";

    }

});

// ===============================
// CORAZONES
// ===============================

const contenedor = document.getElementById("hearts");

function crearCorazones(cantidad) {

    for (let i = 0; i < cantidad; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.top = (window.innerHeight - 50) + "px";

        heart.style.fontSize = (18 + Math.random() * 22) + "px";

        heart.style.animationDuration = (3 + Math.random() * 2) + "s";

        contenedor.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 5000);

    }

}

// ===============================
// CARRUSEL
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function mostrarSlide(n) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[n].classList.add("active");
    dots[n].classList.add("active");

}

function siguiente() {

    index++;

    if (index >= slides.length) {

        index = 0;

    }

    mostrarSlide(index);

}

function anterior() {

    index--;

    if (index < 0) {

        index = slides.length - 1;

    }

    mostrarSlide(index);

}

next.addEventListener("click", siguiente);
prev.addEventListener("click", anterior);

dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {

        index = i;

        mostrarSlide(index);

    });

});

// Cambio automático cada 5 segundos
setInterval(() => {

    siguiente();

}, 5000);

// ===============================
// ESTRELLAS EXTRA
// ===============================

setInterval(() => {

    crearCorazones(2);

}, 2500);
