document.addEventListener("DOMContentLoaded", function () {
  // elements
  const prevArrow = document.querySelector(".prev-arrow");
  const nextArrow = document.querySelector(".next-arrow");
  const indicators = document.querySelectorAll(".indicator");
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  let currentIndex = 0;
  const totalTestimonials = testimonialCards.length;

  // update testimonials
  function updateTestimonials() {
    testimonialCards.forEach((card, index) => {
      card.classList.remove("active", "next");
      if (index === currentIndex) {
        card.classList.add("active");
      } else if (index === (currentIndex + 1) % totalTestimonials) {
        card.classList.add("next");
      }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Initialize testimonials
  updateTestimonials();

  // Next button
  nextArrow.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    updateTestimonials();
  });

  // Previous button
  prevArrow.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    updateTestimonials();
  });

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      currentIndex = index;
      updateTestimonials();
    });
  });

  // Auto-slide every 5 seconds
  setInterval(function () {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    updateTestimonials();
  }, 5000);
});

// Partners Section Interactivity
document.addEventListener("DOMContentLoaded", function () {
  const partnerLogos = document.querySelectorAll(".partner-logo");
  const partnersTrack = document.querySelector(".partners-track");
  // Pause animation on mouse over
  partnersTrack.addEventListener("mouseenter", function () {
    this.style.animationPlayState = "paused";
  });

  // Resume animation on mouse leave
  partnersTrack.addEventListener("mouseleave", function () {
    this.style.animationPlayState = "running";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  //fact items
  const factItems = document.querySelectorAll(
    ".natural-beauty-section .fact-item"
  );

  // counter
  function Counter(element, target, duration = 2000, suffix = "") {
    let start = 0;
    const increment = target / (duration / 16); // For smooth animation at 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target + suffix;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start) + suffix;
      }
    }, 16);
  }

  // start counter
  function startCounters() {
    factItems.forEach((item) => {
      const counter = item.querySelector("h4");
      const counterText = counter.textContent;
      let targetValue = parseInt(counterText);
      let suffix = "";

      // Handle special cases
      if (counterText.includes("+")) {
        targetValue = parseInt(counterText.replace("+", ""));
        suffix = "+";
      } else if (counterText.includes("/")) {
        targetValue = parseInt(counterText.split("/")[0]);
        suffix = "/7";
      } else if (counterText.includes("%")) {
        targetValue = parseInt(counterText.replace("%", ""));
        suffix = "%";
      }
      // Start with 0
      counter.textContent = "0";
      //  target value
      Counter(counter, targetValue, 2000, suffix);
    });
  }

  // Start counters on load
  startCounters();
});

// Menu Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
  // elements
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.appendChild(overlay);
  // Toggle menu function
  function toggleMenu() {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    // Prevent body scrolling when menu is open
    if (navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  // Add click event to menu toggle
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when clicking on overlay
  overlay.addEventListener("click", function () {
    toggleMenu();
  });

  // Close menu when clicking on links
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (window.innerWidth <= 992) {
        toggleMenu();
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 992 && navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });

  // Close menu with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });
});
