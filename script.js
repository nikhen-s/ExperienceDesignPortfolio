document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");
    const textContent = textElement.innerText;
    textElement.innerText = "";

    for (let i = 0; i < textContent.length; i++) {
        const span = document.createElement("span");
        span.innerText = textContent.charAt(i);
        span.style.animation = `typing 1s steps(1) ${i / 20}s forwards`;
        textElement.appendChild(span);
    }
});

function showNextPage() {
    document.body.style.backgroundColor = "#000"; // Change background to dark
    window.location.href = "week1.html"; // Redirect to the next page
};
const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;
    
function showNextSlide() {
    currentIndex = (currentIndex + 1) % slidesContainer.children.length;
    updateSlidesPosition();
 }
    
function updateSlidesPosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
    
setInterval(showNextSlide, 2000); // Change slide every 3 seconds