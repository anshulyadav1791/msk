const dynamicText = document.querySelector("p span");
const words = [
  "Software Developer",
  "Game Developer",
  "Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "AI/ML Developer",
  "Python Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 140);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 70);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1100);
  }
};

typeEffect();


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector ('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');


function openPopup() {
      popup.classList.add("active");
    }

    function closePopup() {
      popup.classList.remove("active");
    }

console.log("anshu");


