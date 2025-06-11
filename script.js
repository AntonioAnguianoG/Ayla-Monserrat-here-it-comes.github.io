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
