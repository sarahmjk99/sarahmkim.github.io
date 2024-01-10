// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animation for navigation buttons
const navButtons = document.querySelectorAll('.nav-button');

navButtons.forEach(button => {
    button.addEventListener('mouseover', function () {
        button.style.backgroundColor = "#001F3F"; // Darker color on hover
        button.style.color = "#fff"; // White text on hover
        button.style.transition = "background-color 0.3s, color 0.3s";
    });

    button.addEventListener('mouseout', function () {
        button.style.backgroundColor = "transparent";
        button.style.color = "#001F3F";
        button.style.transition = "background-color 0.3s, color 0.3s";
    });
});
