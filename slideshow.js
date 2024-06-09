let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides img');
    
    // Reset all slides to be hidden
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    
    // Ensure slideIndex is within bounds
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    
    // Display the current slide
    slides[slideIndex].style.display = 'block';  
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}
