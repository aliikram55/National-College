// Carousel functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");

  function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // WhatsApp widget toggle
  const whatsappToggle = document.getElementById("whatsappToggle");
  const socialIcons = document.getElementById("socialIcons");

  whatsappToggle.addEventListener("click", () => {
    socialIcons.classList.toggle("active");
  });

  // Dropdown for mobile
  const dropdownParents = document.querySelectorAll(
    ".nav-links li:has(.dropdown)"
  );

  dropdownParents.forEach((parent) => {
    parent.addEventListener("click", function (e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const dropdown = this.querySelector(".dropdown");
        dropdown.classList.toggle("active");
      }
    });
  });
});





// Custom cursor functionality
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor-dot");

  // Move cursor with mouse
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  // Add hover effect on links and buttons
  const interactiveElements = document.querySelectorAll(
    "a, button, .btn, .hamburger, .social-icon"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });

    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
});

// Scroll animation functionality
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll(".scroll-element");

  // Function to check if element is in viewport
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  // Function to handle scroll animations
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        el.classList.add("scroll-in");
        el.classList.remove("scroll-out");
      } else {
        el.classList.remove("scroll-in");
        el.classList.add("scroll-out");
      }
    });
  };

  // Initial check on page load
  window.addEventListener("load", () => {
    handleScrollAnimation();
  });

  // Check on scroll
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
});
