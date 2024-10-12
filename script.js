// script.js
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = "scale(1)";
    });
});
