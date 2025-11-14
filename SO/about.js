// Animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  function checkScroll() {
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check on initial load
});





// team section
// Intersection Observer for scroll animations
const facultyCards = document.querySelectorAll(".faculty-card");

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

facultyCards.forEach((card) => {
  observer.observe(card);
});

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random properties
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    particlesContainer.appendChild(particle);
  }
}

// Add floating animation to CSS
const style = document.createElement("style");
style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0) translateX(0); }
                25% { transform: translateY(-20px) translateX(10px); }
                50% { transform: translateY(-10px) translateX(20px); }
                75% { transform: translateY(-30px) translateX(-10px); }
            }
        `;
document.head.appendChild(style);

// Initialize particles when page loads
window.addEventListener("load", createParticles);

// Add hover effect to faculty cards
facultyCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.15)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
  });
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    facultyCards.forEach((card) => {
      if (
        filterValue === "all" ||
        card.getAttribute("data-department") === filterValue
      ) {
        card.style.display = "block";
        // Re-trigger animation
        card.classList.remove("animate");
        setTimeout(() => {
          card.classList.add("animate");
        }, 50);
      } else {
        card.style.display = "none";
      }
    });
  });
});
