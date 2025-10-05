const texts = [
  "Hai Niken Adelia 🎉",
  "Selamat ulang tahun yang ke-23 🩷",
  "Semoga hari ini penuh tawa dan kebahagiaan.",
  "Terus jadi sosok yang hangat dan ceria, ya.",
  "Semoga langkahmu selalu dipenuhi hal-hal indah.",
  "– Dari Bagus Akbar 💫"
];

let index = 0;
const textElement = document.getElementById("text");
const music = document.getElementById("bg-music");

function showText() {
  textElement.textContent = texts[index];
  textElement.style.opacity = 0;
  setTimeout(() => (textElement.style.opacity = 1), 100);
  index++;
  if (index < texts.length) {
    setTimeout(showText, 2500);
  }
}

function startMusicOnce() {
  music.play().then(() => {
    showText();
    document.removeEventListener("touchstart", startMusicOnce);
    document.removeEventListener("click", startMusicOnce);
  }).catch(err => {
    console.log("Autoplay diblokir, tunggu interaksi pengguna.");
  });
}

document.addEventListener("touchstart", startMusicOnce);
document.addEventListener("click", startMusicOnce);