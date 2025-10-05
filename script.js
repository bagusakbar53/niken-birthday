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

function showText() {
  textElement.textContent = texts[index];
  textElement.style.opacity = 0;
  setTimeout(() => (textElement.style.opacity = 1), 100);
  index++;
  if (index < texts.length) {
    setTimeout(showText, 2500);
  }
}

window.onload = showText;