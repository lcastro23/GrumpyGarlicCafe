// Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email) {
            alert('Please fill in Name and Email fields.');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If phone number is provided, validate format
        if (phone && !validatePhoneNumber(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Simulate form submission for demo purpose
        alert('Reservation successfully made!');
        form.reset();
    });
});

// Phone number validation function
function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
}

//Hamburger Menu Function
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
}

// JavaScript for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}