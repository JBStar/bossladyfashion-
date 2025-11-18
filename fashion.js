/* AUTO-SLIDE CAROUSEL */
const slide = document.querySelector('.carousel-slide');
let counter = 0;

function autoSlide() {
    counter++;
    if (counter > 2) { counter = 0; }
    slide.style.transform = `translateX(-${counter * 100}%)`;
}

setInterval(autoSlide, 3000);

/* POPUP CONTROL */
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

