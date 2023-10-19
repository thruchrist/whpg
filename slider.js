// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let slideContainer = document.querySelector('.slide-container');
    
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Wrap around to the first slide
    }
    
    const slideWidth = slides[0].offsetWidth;
    const containerWidth = slideContainer.offsetWidth; // Get the width of the slide container
    
    // Calculate the position to slide the container
    const newPosition = (slideIndex * slideWidth);
    
    if (Math.abs(newPosition) > containerWidth) {
        slideIndex = 0; // Reset to the first slide when the last slide goes out of view
        newPosition = 0;
    }
    
    slideContainer.style.transform = `translateX(${newPosition}px)`;
    
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}




