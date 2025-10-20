// stacked images section
gsap.from(".stacked-images img", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".stacked-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
  // النصوص
  const text = document.querySelector(".text-container");
  if (text) {
    gsap.from(text, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }

gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {
  try {
    // نافبار
    const navbar = document.querySelector(".site-header");
    if (navbar) {
      gsap.from(navbar, { y: -100, opacity: 0, duration: 1, ease: "power2.out" });
    }

    // دروب داون
    const dropdown = document.querySelector(".nav-item.dropdown");
    if (dropdown) {
      const menu = dropdown.querySelector(".dropdown-menu");
      dropdown.addEventListener("mouseenter", () => {
        menu?.classList.add("show");
        if (menu) {
          menu.style.opacity = "1";
          menu.style.visibility = "visible";
        }
      });
      dropdown.addEventListener("mouseleave", () => {
        menu?.classList.remove("show");
        if (menu) {
          menu.style.opacity = "0";
          menu.style.visibility = "hidden";
        }
      });
    }


  // الصورة العائمة
  const floating = document.querySelector(".floating-image");
  if (floating) {
    gsap.to(floating, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }



    // فوتر
    const footer = document.querySelector("footer");
    if (footer) {
      gsap.from(footer, { y: 100, opacity: 0, duration: 1, delay: 1, ease: "power2.out" });
    }

    // الكاردات
    const cardLeft = document.querySelector(".card-left");
    if (cardLeft) {
      gsap.to(cardLeft, { y: -20, duration: 2, repeat: -1, yoyo: true, ease: "power1.inOut" });
    }

    const cardRight = document.querySelector(".card-right");
    if (cardRight) {
      gsap.to(cardRight, { y: -20, duration: 2.5, repeat: -1, yoyo: true, ease: "power1.inOut" });
    }

    // سايدبار الكارت
    const cartSidebar = document.getElementById("cartSidebar");
    const closeCart = document.getElementById("closeCart");
    const desktopToggle = document.getElementById("cartToggleDesktop");
    const mobileToggle = document.getElementById("cartToggleMobile");

    function openCart(e) {
      e.preventDefault();
      cartSidebar?.classList.add("active");
    }

    desktopToggle?.addEventListener("click", openCart);
    mobileToggle?.addEventListener("click", openCart);

    closeCart?.addEventListener("click", () => {
      cartSidebar?.classList.remove("active");
    });

  } catch (err) {
    console.error("JS Error:", err);
  }
});


// about section
gsap.from(".about-section img", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});


gsap.from(".about-section .section-text", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
// mission section (تاني section-block بعد الـ hero)
const mission = document.querySelectorAll(".section-block")[1];
if (mission) {
  gsap.from(mission.querySelector("img"), {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: mission,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(mission.querySelector(".section-text"), {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: mission,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}


// journey section
gsap.from(".timeline-section .card-left", {
  opacity: 0,
  x: -50,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeline-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from(".timeline-section .card-right", {
  opacity: 0,
  x: 50,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".timeline-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// features section
gsap.from(".features-section .feature-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".features-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// services section
gsap.from(".services-section .service-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

// contact section
gsap.from(".contact-section img", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from(".contact-section form", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

const sections = [
      ".about-section",
      ".section-block",
      ".stats-section",
      ".mission-section",
      ".timeline-section",
      ".features-section",
      ".four-cards-section",
      ".pre-footer",
      ".footer",
      ".last-footer"
    ];

    sections.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // يبدأ لما القسم يدخل الشاشة
            toggleActions: "play none none none"
          }
        });
      }
    });

