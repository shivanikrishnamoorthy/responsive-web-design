// JavaScript to handle the hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });
});

// JavaScript to handle form submission on the contact page
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send form data to your server or API
    // For demonstration purposes, we'll just log the data to the console
    console.log('Form submitted:', { name, email, message });

    // Show a confirmation message
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    document.querySelector('.contact-form').reset();
});
