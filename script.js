// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // For now, just log the data and show an alert
    console.log('Form submission:', data);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset the form
    this.reset();
});

// Handle service buttons
document.querySelectorAll('.service .btn').forEach(button => {
    button.addEventListener('click', function() {
        const service = this.parentElement.querySelector('h2').textContent;
        alert(`More information about ${service} coming soon!`);
    });
});