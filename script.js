"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy! <a href='https://youtu.be/_F3HWF4EnKc?si=I0aKGgoI8lkTnUrk'>:3</a>";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}



function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure ?",
    "Pookie please",
    "Mai yak pen my vlt lhor ka :(",
    "Noi rrrr",
    "Jing lhor nong Yatie t-t",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `image/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

const button = document.getElementById('shakeButton');

button.addEventListener('click', function() {
    button.classList.add('shake');

    // Remove the 'shake' class after the animation completes
    setTimeout(function() {
        button.classList.remove('shake');
    }, 500); // Adjust the time to match the duration of the animation
});