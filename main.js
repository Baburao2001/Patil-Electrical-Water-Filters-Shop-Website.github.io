// ===== Mobile Menu Toggle =====
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// ===== Dynamic Years of Experience =====
document.addEventListener("DOMContentLoaded", function () {
  const startYear = 2016; // Start year of experience
  const currentYear = new Date().getFullYear(); // Current year like 2025
  const experience = currentYear - startYear; // Calculate experience

  const experienceElement = document.getElementById("experienceYears");
  if (experienceElement) {
    experienceElement.textContent = experience;
  } else {
    console.log("Element with ID 'experienceYears' not found.");
  }
});




// ===== Contact Form Submission =====
document.addEventListener("DOMContentLoaded", function () {
  const whatsappForm = document.getElementById("whatsappForm");

  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name ||  !phone || !service || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const fullMessage = `Hello, I am ${name}.
Phone: ${phone}
Service: ${service}
Message: ${message}`;

      const whatsappNumber = "+917558775670"; // Your WhatsApp number (no + or space)
      const encodedMessage = encodeURIComponent(fullMessage);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  }
});

