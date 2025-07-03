const typingElement = document.querySelector('.typing');
const words = ['Artificial Intelligence and Data Science Engineer', 'Data-Oriented Problem Solver'];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;


function typeEffect() {
    let currentWord = words[wordIndex];

    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    if (!isDeleting && letterIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 200);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Animate Progress Bars
    document.querySelectorAll(".progress").forEach((bar) => {
        let percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
    });

    // Animate Circular Progress with Percentage Count
    document.querySelectorAll(".circle").forEach((circle) => {
        let percent = parseInt(circle.getAttribute("data-percent"));
        let textElement = circle.querySelector(".circle-text");
        let startValue = 0;
        let endValue = percent;
        let speed = 20; // Adjust animation speed

        let progressAnimation = setInterval(() => {
            startValue++;
            textElement.textContent = startValue + "%";
            circle.style.background = `conic-gradient(cyan ${startValue * 3.6}deg, #1c2541 ${startValue * 3.6}deg)`;

            if (startValue === endValue) {
                clearInterval(progressAnimation);
            }
        }, speed);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact");
    contactSection.style.opacity = 0;
    contactSection.style.transform = "translateY(50px)";
    setTimeout(() => {
        contactSection.style.transition = "opacity 1s ease, transform 1s ease";
        contactSection.style.opacity = 1;
        contactSection.style.transform = "translateY(0)";
    }, 500);
});

typeEffect();
