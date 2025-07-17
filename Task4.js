document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }
        if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.style.color = 'green';
        form.reset();
    });

    function validateEmail(email) {
        return /^\S+@\S+\.\S+$/.test(email);
    }
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Alternate direction: even = left, odd = right
                const section = entry.target;
                const idx = Array.from(sections).indexOf(section);
                const direction = idx % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
                section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .edu-desc, .skills-btn, input, textarea, label').forEach(el => {
                    el.classList.add(direction);
                });
                observer.unobserve(section);
            }
        });
    }, observerOptions);
    sections.forEach(section => {
        section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .edu-desc, .skills-btn, input, textarea, label').forEach(el => {
            el.classList.remove('slide-in-left', 'slide-in-right');
        });
        observer.observe(section);
    });
}); 