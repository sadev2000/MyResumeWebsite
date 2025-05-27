// js/script.js

// Lenis Setup
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP + ScrollTrigger Plugin Registration
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  // Navbar Toggle Button
  const toggleButton = document.querySelector('.toggle-button');
  const navbarLinks = document.querySelector('.navbar-links');
  if (toggleButton && navbarLinks) {
    toggleButton.addEventListener('click', () => navbarLinks.classList.toggle('active'));
  }

  // Bootstrap Tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    new bootstrap.Tooltip(el);
  });

  // Smooth Scroll using Lenis
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement);
      }
    });
  });

  // Zoom Modal for Carousel Images
  document.querySelectorAll(".carousel-inner img").forEach(img => {
    img.addEventListener("click", () => {
      const modalImg = document.getElementById("modalImage");
      modalImg.src = img.src;
      new bootstrap.Modal(document.getElementById("imageModal")).show();
    });
  });

  // Image Slideshow for .projectimage
  document.querySelectorAll('.projectimage').forEach(container => {
    const slides = container.querySelectorAll('.slide');
    let index = 0;
    if (slides.length > 0) {
      const showSlides = () => {
        slides.forEach(slide => slide.style.display = "none");
        index = (index + 1) % slides.length;
        slides[index].style.display = "block";
        setTimeout(showSlides, 3000);
      };
      slides[0].style.display = "block";
      setTimeout(showSlides, 3000);
    }
  });

  // Active Navbar Highlight on Scroll (Manual)
  const navLinks = document.querySelectorAll(".nav-link");
  const updateActiveNav = () => {
    let currentSection = "";
    document.querySelectorAll("section").forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        currentSection = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();

  // ScrollSpy Init
  new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav',
    offset: 100
  });

  // GSAP Animations
  gsap.from(".header-text h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out"
  });

  gsap.from(".chatbutton", {
    opacity: 0,
    scale: 0.8,
    delay: 0.5,
    duration: 0.6,
    ease: "back.out(1.7)"
  });

  gsap.from(".about-col-2", {
    scrollTrigger: ".about-col-2",
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power2.out"
  });

  // Animate carousel items
  document.querySelectorAll('.carousel-item').forEach(item => {
    gsap.from(item, {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      scrollTrigger: {
        trigger: item,
        toggleActions: "play none none reset"
      }
    });
  });

  // ScrollTrigger for navbar highlight
  gsap.utils.toArray("section").forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      onEnter: () => {
        const id = section.getAttribute("id");
        document.querySelectorAll(".nav-link").forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});

// Side Nav Functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
