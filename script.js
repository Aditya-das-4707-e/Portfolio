// Animate skill bars on scroll
window.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        setTimeout(() => {
            skill.style.width = skill.parentElement.previousElementSibling.lastElementChild.textContent;
        }, 500);
    });
});
    //   // Particle Animation
    //   const particles = document.querySelectorAll('.particle');
    //   particles.forEach(particle => {
    //       const x = Math.random() * 100;
    //       const y = Math.random() * 100;
    //       particle.style.transform = `translate(${x}vw, ${y}vh)`;
    //   });

    //   // Smooth Scroll
    //   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //       anchor.addEventListener('click', function(e) {
    //           e.preventDefault();
    //           document.querySelector(this.getAttribute('href')).scrollIntoView({
    //               behavior: 'smooth'
    //           });
    //       });
    //   });