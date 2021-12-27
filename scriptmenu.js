let vMenu = document.querySelector(".visible-menu"),
  burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  vMenu.classList.toggle("active");
  burger.classList.toggle("active");
});

const playBtn = document.querySelector(".music");
const music = new Audio(); // Создаём новый элемент Audio
music.src = 'Diablo2sound.mp3'; // Указываем путь к звуку "клика"
music.volume = .2;
let isPlaying = false;
// audio.autoplay = true; // Автоматически запускаем

function toggleMusic() {
  playBtn.classList.toggle('music--active');
  isPlaying = !isPlaying;
  if(isPlaying) {
    music.play();
  } else {
    music.pause();
  }
}
playBtn.addEventListener("click", toggleMusic)