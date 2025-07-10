document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 7000); // 5000 milisegundos = 5 segundos
});




document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("preload-audio");

  setTimeout(function () {
    document.body.classList.add("loaded");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, 7000);
});












  const imagen = document.getElementById('imagen-animada');

  setInterval(() => {
    imagen.classList.add('palpito');
    setTimeout(() => {
      imagen.classList.remove('palpito');
    }, 600); // duración de la animación
  }, 1300); // cada 5 segundos














  const imagenTemblor = document.getElementById('imagen-temblor');

  setInterval(() => {
    imagenTemblor.classList.add('temblor-efecto');
    setTimeout(() => {
      imagenTemblor.classList.remove('temblor-efecto');
    }, 600);
  }, 800);
