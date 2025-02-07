const quotes = [
  "You are enough just the way you are❤️",
  "I'm glad that i have you as my friend 💖",
  "Luqman, aku harap kita kekal berkawan selamanya 😊",
  "Jangan lupa bahagiakan diri sendiri✨",
  "Luqman, thank you sbb terima aku sebagai kawan kau💕",
  "Luqman, life is more fun with you by my side! 🤍",
];

const quoteElement = document.getElementById("quote");
let quoteIndex = 0;

function updateQuote() {
  quoteElement.innerText = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Play music when user interacts
document.addEventListener("click", function () {
  let audio = document.querySelector("audio");
  if (audio.paused) {
    audio.play();
  }
});

setInterval(updateQuote, 3000);
updateQuote();

// Floating Hearts Animation
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);
