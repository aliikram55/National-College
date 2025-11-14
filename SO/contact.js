// Initialize map
function initMap() {
  // Coordinates for National College of Technology (Sargodha)
  const collegeLocation = [32.062837864378345, 72.69424519600791];

  // Create map
  const map = L.map("map").setView(collegeLocation, 15);

  // Add tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add marker with full address + directions link
  L.marker(collegeLocation)
    .addTo(map)
    .bindPopup(
      `
            <b>National College of Technology</b><br>
            3M7V+4P6, University Road,<br>
            Peer Muhommad Colony,<br>
            Sargodha, 40120, Pakistan<br><br>
            📞 Phone: 0316-7772003<br>
            🌐 <a href="https://nationalcollege.edu.pk" target="_blank">Visit Website</a><br>
            🚗 <a href="https://www.google.com/maps/dir//32.0836,72.6711" target="_blank">Get Directions</a>
        `
    )
    .openPopup();
}

// Initialize map when page loads
document.addEventListener("DOMContentLoaded", function () {
  initMap();

  // Form validation and submission
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !phone || !message) {
      showFormStatus("Please fill all required fields", "error");
      return;
    }

    // Phone number validation
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(phone)) {
      showFormStatus("Please enter a valid phone number", "error");
      return;
    }

    // If email is provided, validate it
    const email = document.getElementById("email").value;
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormStatus("Please enter a valid email address", "error");
        return;
      }
    }

    // Simulate form submission (in a real scenario, you would send data to a server)
    showFormStatus("Sending your message...", "success");

    setTimeout(function () {
      showFormStatus(
        "Your message has been sent successfully! We will contact you soon.",
        "success"
      );
      contactForm.reset();
    }, 2000);
  });

  function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = "form-status " + type;
  }

  // Animation on scroll
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

