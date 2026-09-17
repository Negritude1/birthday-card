// INTRO → BIRTHDAY REVEAL

const openButton = document.querySelector(".open-button");
const introSection = document.querySelector(".intro");
const birthdaySection = document.querySelector(".birthday-section");
const birthdayContinueButton = document.querySelector(".birthday-continue-button");

openButton.addEventListener("click", function() {
    introSection.style.display = "none";
    birthdaySection.style.display = "flex";
});


// BIRTHDAY → PERSONAL LETTER

const messageSection = document.querySelector(".message-section");

birthdayContinueButton.addEventListener("click", function() {
    birthdaySection.style.display = "none";
    messageSection.style.display = "flex";
});


// PERSONAL LETTER → APPRECIATION

const letterContinueButton = document.querySelector(".letter-continue-button");
const appreciationSection = document.querySelector(".appreciation-section");

letterContinueButton.addEventListener("click", function() {
    messageSection.style.display = "none";
    appreciationSection.style.display = "block";
});


// APPRECIATION CARDS

const nextButton = document.querySelector(".next-button");
const surpriseSection = document.querySelector(".surprise-section");

let currentCard = 1;

nextButton.addEventListener("click", function() {

    document.querySelector("#card" + currentCard).style.display = "none";

    currentCard++;

    if (currentCard <= 4) {

        document.querySelector("#card" + currentCard).style.display = "block";

        if (currentCard === 4) {
            nextButton.textContent = "Finish ✨";
        }

    } else {

        appreciationSection.style.display = "none";
        surpriseSection.style.display = "flex";

    }
});


// SURPRISE

const surpriseButton = document.querySelector(".surprise-button");
const awardIntro = document.querySelector(".award-intro");
const awardCard = document.querySelector(".award-card");

surpriseButton.addEventListener("click", function() {

    awardIntro.style.display = "none";
    awardCard.style.display = "block";

});


// SURPRISE → FINAL SCREEN

const continueButton = document.querySelector(".continue-button");
const finalSection = document.querySelector(".final-section");

continueButton.addEventListener("click", function() {

    surpriseSection.style.display = "none";
    finalSection.style.display = "block";

});


// FINAL WISH + MUSIC + CONFETTI

const wishButton = document.querySelector(".wish-button");
const wishMessage = document.querySelector(".wish-message");
const confettiContainer = document.querySelector(".confetti-container");
const music = document.querySelector("#birthdayMusic");

wishButton.addEventListener("click", function() {

    wishMessage.style.display = "block";
    wishButton.style.display = "none";

    music.play();

    for (let i = 0; i < 50; i++) {

        const confetti = document.createElement("span");

        confetti.textContent = "✨";
        confetti.classList.add("confetti");

confetti.style.left = Math.random() * 100 + "%";
confetti.style.animationDelay = Math.random() * 2 + "s";
confetti.style.fontSize = Math.random() * 20 + 10 + "px";
confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";

        confettiContainer.appendChild(confetti);
    }

});