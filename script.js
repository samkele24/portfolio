// JavaScript to handle section switching
function changeSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Remove active class from all links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Show the clicked section
    document.getElementById(section).classList.add('active');

    // Add active class to the clicked link
    const activeLink = document.querySelector(`nav ul li a[href="#${section}"]`);
    activeLink.classList.add('active');
}

// JavaScript to handle form submission
function submitForm(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    document.getElementById('contact-form').reset();
}
