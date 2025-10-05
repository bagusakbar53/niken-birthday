const texts = [
  "Selamat ulang tahun, Niken Adelia!",
  "Hari ini adalah hari istimewa untukmu.",
  "Semoga setiap langkahmu penuh kebahagiaan.",
  "Tetap jadi pribadi yang hangat dan ceria.",
  "Selamat ulang tahun yang ke-23!",
  "- Dari Bagus Akbar"
];

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const mainContent = document.getElementById("main-content");
const textElement = document.getElementById("text");
const music = document.getElementById("bg-music");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  mainContent.classList.remove("hidden");
  music.play().catch(() => console.log("Autoplay diblokir, tekan layar untuk play musik."));
  showText();
});

let index = 0;
function showText() {
  if (index >= texts.length) return;
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1;
    index++;
    setTimeout(showText, 2500);
  }, 300);
}
