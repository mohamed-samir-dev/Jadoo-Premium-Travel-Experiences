// Services Animation
document.addEventListener("DOMContentLoaded", function () {
  const servicesSection = document.querySelector(".services-section");
  const servicesHeadline = document.querySelector(".services-headline");
  const serviceCards = document.querySelectorAll(".service");

  // Function to add visible class when section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          servicesSection.classList.add("visible");
          servicesHeadline.classList.add("visible");
          serviceCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, 300 + index * 100);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(servicesSection);
});

// Top Selling Destinations Section Animation
document.addEventListener("DOMContentLoaded", function () {
  const topSellingSection = document.querySelector(".top-selling-section");
  const sectionSubtitle = topSellingSection.querySelector(".section-subtitle");
  const sectionTitle = topSellingSection.querySelector(".section-title");
  const destinationCards = document.querySelectorAll(".destination-card");

  // Set initial styles for animation
  sectionSubtitle.style.opacity = "0";
  sectionSubtitle.style.transform = "translateY(20px)";
  sectionTitle.style.opacity = "0";
  sectionTitle.style.transform = "translateY(20px)";
  destinationCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
  });

  // Intersection Observer to trigger animation when the section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateHeader();
          animateDestinationCards();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(topSellingSection);

  // Animate header elements
  function animateHeader() {
    sectionSubtitle.style.transition = "opacity 0.8s, transform 0.8s";
    sectionTitle.style.transition = "opacity 0.8s 0.2s, transform 0.8s 0.2s";
    sectionSubtitle.style.opacity = "1";
    sectionSubtitle.style.transform = "translateY(0)";
    setTimeout(() => {
      sectionTitle.style.opacity = "1";
      sectionTitle.style.transform = "translateY(0)";
    }, 200);
  }

  // Animate destination cards
  function animateDestinationCards() {
    destinationCards.forEach((card, index) => {
      const delay = 0.4 + index * 0.2;
      card.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  }
});

// Beauty Section Animation with Motion Effects
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements to animate
  const beautySection = document.querySelector(".beauty-section");
  const beautyHeader = beautySection.querySelector(".beauty-header");
  const beautyGallery = beautySection.querySelector(".beauty-gallery");
  const galleryItems = beautyGallery.querySelectorAll(".gallery-item");
  const beautyCta = beautySection.querySelector(".beauty-cta");
  const floatingElements = beautySection.querySelectorAll(".floating-element");

  // Set initial states (hidden)
  beautyHeader.style.opacity = "0";
  beautyHeader.style.transform = "translateY(30px)";
  galleryItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "scale(0.8)";
  });
  beautyCta.style.opacity = "0";
  beautyCta.style.transform = "translateY(30px)";

  // Create Intersection Observer to detect when section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBeautySection();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe the beauty section
  observer.observe(beautySection);

  // Animation for the beauty section
  function animateBeautySection() {
    // Animate header
    beautyHeader.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    beautyHeader.style.opacity = "1";
    beautyHeader.style.transform = "translateY(0)";

    // Animate gallery items with staggered delays
    galleryItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        item.style.opacity = "1";
        item.style.transform = "scale(1)";
      }, index * 100);
    });

    // Animate CTA
    setTimeout(() => {
      beautyCta.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      beautyCta.style.opacity = "1";
      beautyCta.style.transform = "translateY(0)";
    }, galleryItems.length * 100 + 500);

    // Animate floating elements
    animateFloatingElements();
  }

  // Animation for floating elements
  function animateFloatingElements() {
    floatingElements.forEach((element) => {
      element.style.animation = "float 3s ease-in-out infinite";
    });
  }
});

// booking-process-section
document.addEventListener("DOMContentLoaded", function () {
  // Get elements to animate
  const bookingSection = document.querySelector(".booking-process-section");
  const bookingHeader = bookingSection.querySelector(".booking-header");
  const bookingSteps = bookingSection.querySelectorAll(".booking-step");
  const bookingCta = bookingSection.querySelector(".booking-cta");
  const tripCard = bookingSection.querySelector(".trip-card");
  const testimonialBubble = bookingSection.querySelector(".testimonial-bubble");

  // Set initial hidden states
  bookingHeader.style.opacity = "0";
  bookingHeader.style.transform = "translateY(30px)";
  bookingSteps.forEach((step) => {
    step.style.opacity = "0";
    step.style.transform = "translateY(20px)";
  });
  bookingCta.style.opacity = "0";
  bookingCta.style.transform = "translateY(30px)";
  tripCard.style.opacity = "0";
  tripCard.style.transform = "translateY(30px)";
  testimonialBubble.style.opacity = "0";
  testimonialBubble.style.transform = "translateY(30px)";

  // Intersection observer to detect when section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBookingSection();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe the booking section
  observer.observe(bookingSection);

  // Animation for the booking section
  function animateBookingSection() {
    // Animate header
    bookingHeader.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    bookingHeader.style.opacity = "1";
    bookingHeader.style.transform = "translateY(0)";

    // Animate booking steps with delays
    bookingSteps.forEach((step, index) => {
      setTimeout(() => {
        step.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        step.style.opacity = "1";
        step.style.transform = "translateY(0)";
      }, index * 200);
    });

    // Animate CTA section
    setTimeout(() => {
      bookingCta.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      bookingCta.style.opacity = "1";
      bookingCta.style.transform = "translateY(0)";
    }, bookingSteps.length * 200 + 500);

    // Animate trip card and testimonial
    setTimeout(() => {
      tripCard.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      tripCard.style.opacity = "1";
      tripCard.style.transform = "translateY(0)";
    }, bookingSteps.length * 200 + 800);

    setTimeout(() => {
      testimonialBubble.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
      testimonialBubble.style.opacity = "1";
      testimonialBubble.style.transform = "translateY(0)";
    }, bookingSteps.length * 200 + 1100);
  }
});

// Testimonial Section Animation and Functionality
document.addEventListener("DOMContentLoaded", function () {
  const testimonialSection = document.querySelector(".testimonial-section");
  const testimonialHeader = testimonialSection.querySelector(
    ".testimonial-header"
  );
  const testimonialCards =
    testimonialSection.querySelectorAll(".testimonial-card");

  // Set initial opacity and transform values for the header
  testimonialHeader.style.opacity = "0";
  testimonialHeader.style.transform = "translateY(30px)";

  // Set initial opacity and transform values for all testimonial cards
  testimonialCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateX(50px)";
  });

  // Create IntersectionObserver to start animations when the section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateTestimonialSection();
          observer.unobserve(entry.target); // Stop observing after starting animation
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(testimonialSection);

  // Function to trigger animations for the testimonial section
  function animateTestimonialSection() {
    setTimeout(() => {
      testimonialHeader.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
      testimonialHeader.style.opacity = "1";
      testimonialHeader.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
      testimonialCards.forEach((card) => {
        card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateX(0)";
      });
    }, 800);
  }
});

// Partners Section Animation
document.addEventListener("DOMContentLoaded", function () {
  // Get the partners section elements
  const partnersSection = document.querySelector(".partners-section");
  const partnersHeader = document.querySelector(".partners-header");
  const partnerLogos = document.querySelectorAll(".partner-logo");
  const partnersCta = document.querySelector(".partners-cta");

  // Set initial states (hidden)
  partnersHeader.style.opacity = "0";
  partnersHeader.style.transform = "translateY(30px)";

  partnerLogos.forEach((logo) => {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.8)";
  });

  partnersCta.style.opacity = "0";
  partnersCta.style.transform = "translateY(30px)";

  // Create Intersection Observer to detect when section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animations when section is visible
          animatePartnersSection();
          // Unobserve after triggering animations
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe the partners section
  observer.observe(partnersSection);

  // Main animation function
  function animatePartnersSection() {
    // 1. Animate header
    setTimeout(() => {
      partnersHeader.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
      partnersHeader.style.opacity = "1";
      partnersHeader.style.transform = "translateY(0)";
    }, 300);

    // 2. Animate partner logos with staggered delay
    setTimeout(() => {
      partnerLogos.forEach((logo, index) => {
        setTimeout(() => {
          logo.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          logo.style.opacity = "1";
          logo.style.transform = "scale(1)";
        }, index * 100); // Stagger each logo by 100ms
      });
    }, 600);

    // 3. Animate CTA section
    setTimeout(() => {
      partnersCta.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      partnersCta.style.opacity = "1";
      partnersCta.style.transform = "translateY(0)";
    }, 1000);
  }
});

// Natural Beauty Section Animation
document.addEventListener("DOMContentLoaded", function () {
  // Get the natural beauty section elements
  const beautySection = document.querySelector(".natural-beauty-section");
  const beautyHeader = beautySection.querySelector(".beauty-header");
  const factItems = beautySection.querySelectorAll(".fact-item");

  // Set initial states (hidden)
  beautyHeader.style.opacity = "0";
  beautyHeader.style.transform = "translateY(30px)";

  factItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
  });

  // Create Intersection Observer to detect when section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animations when section is visible
          animateBeautySection();
          // Unobserve after triggering animations
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe the beauty section
  observer.observe(beautySection);

  // Main animation function
  function animateBeautySection() {
    // 1. Animate header with a fade-in and slide-up effect
    setTimeout(() => {
      beautyHeader.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      beautyHeader.style.opacity = "1";
      beautyHeader.style.transform = "translateY(0)";
    }, 300);

    // 2. Animate fact items with staggered delay
    factItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 600 + index * 200); // Stagger each item by 200ms
    });
  }
});
// subscribe-section
document.addEventListener("DOMContentLoaded", function () {
  // Get the subscribe section elements
  const subscribeSection = document.querySelector(".subscribe-section");
  const subscribeHeader = subscribeSection.querySelector(".subscribe-header");
  const subscribeForm = subscribeSection.querySelector(".subscribe-form");

  // Set initial states (hidden)
  subscribeHeader.style.opacity = "0";
  subscribeHeader.style.transform = "translateY(30px)";

  subscribeForm.style.opacity = "0";
  subscribeForm.style.transform = "translateY(30px)";

  // Create Intersection Observer to detect when section is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animations when section is visible
          animateSubscribeSection();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe the subscribe section
  observer.observe(subscribeSection);

  // Main animation function
  function animateSubscribeSection() {
    // Animate header with a fade-in and slide-up effect
    setTimeout(() => {
      subscribeHeader.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";
      subscribeHeader.style.opacity = "1";
      subscribeHeader.style.transform = "translateY(0)";
    }, 300);

    // Animate form with a slight delay
    setTimeout(() => {
      subscribeForm.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      subscribeForm.style.opacity = "1";
      subscribeForm.style.transform = "translateY(0)";
    }, 600);
  }
});

// Footer Animation
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".site-footer");
  const footerColumns = footer.querySelectorAll(".footer-column");
  const footerLogo = footer.querySelector(".footer-logo");
  const footerTagline = footer.querySelector(".footer-tagline");
  const footerLinks = footer.querySelectorAll(".footer-links ul li");
  const socialIcons = footer.querySelectorAll(".social-icon");
  const appButtons = footer.querySelectorAll(".app-button");
  const footerBottom = footer.querySelector(".footer-bottom");

  // Set initial states (hidden)
  footerColumns.forEach((column) => {
    column.style.opacity = "0";
    column.style.transform = "translateY(30px)";
  });

  if (footerLogo) {
    footerLogo.style.opacity = "0";
    footerLogo.style.transform = "translateY(20px)";
  }

  if (footerTagline) {
    footerTagline.style.opacity = "0";
  }

  footerLinks.forEach((link) => {
    link.style.opacity = "0";
    link.style.transform = "translateX(-20px)";
  });

  socialIcons.forEach((icon) => {
    icon.style.opacity = "0";
    icon.style.transform = "scale(0.8)";
  });

  appButtons.forEach((button) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(15px)";
  });

  if (footerBottom) {
    footerBottom.style.opacity = "0";
  }

  // Create Intersection Observer to detect when footer is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateFooter();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(footer);

  function animateFooter() {
    footerColumns.forEach((column, index) => {
      setTimeout(() => {
        column.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        column.style.opacity = "1";
        column.style.transform = "translateY(0)";
      }, 300 + index * 150);
    });

    if (footerLogo) {
      setTimeout(() => {
        footerLogo.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        footerLogo.style.opacity = "1";
        footerLogo.style.transform = "translateY(0)";
      }, 500);
    }

    if (footerTagline) {
      setTimeout(() => {
        footerTagline.style.transition = "opacity 0.8s ease";
        footerTagline.style.opacity = "1";
      }, 800);
    }

    footerLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        link.style.opacity = "1";
        link.style.transform = "translateX(0)";
      }, 1000 + index * 100);
    });

    socialIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        icon.style.opacity = "1";
        icon.style.transform = "scale(1)";
      }, 1200 + index * 150);
    });

    appButtons.forEach((button, index) => {
      setTimeout(() => {
        button.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
      }, 1500 + index * 150);
    });

    if (footerBottom) {
      setTimeout(() => {
        footerBottom.style.transition = "opacity 0.8s ease";
        footerBottom.style.opacity = "1";
      }, 1800);
    }
  }
});
