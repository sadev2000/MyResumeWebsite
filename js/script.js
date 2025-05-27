// js/script.js

// JavaScript code to log a message when the page loads
window.onload = function() {
    console.log("Page loaded");
};

// Example function to handle button click
function handleClick() {
    alert("Button clicked!");
}

// JavaScript for toggling navbar links
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }
});

// Side Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  
//Bootstrap Tooltips

 document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
  
// Smooth scrolling for navbar links
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('a[href^="#"]');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Image Carousel
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.about-col-1 img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((image, idx) => {
            if (idx === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    if (images.length > 0) {
        showImage(currentIndex);

        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        if (nextBtn) nextBtn.addEventListener('click', nextImage);
        if (prevBtn) prevBtn.addEventListener('click', prevImage);
    }
});

// Active navbar link update on scroll
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {
        let currentSection = "";
        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();
});

// Scoped Slideshow for Wireframe Cards
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.projectimage').forEach(container => {
        const slides = container.querySelectorAll('.slide');
        let index = 0;

        if (slides.length === 0) return;

        function showSlides() {
            slides.forEach(slide => slide.style.display = "none");
            index = (index + 1) % slides.length;
            slides[index].style.display = "block";
            setTimeout(showSlides, 3000);
        }

        slides[0].style.display = "block";
        setTimeout(showSlides, 3000);
    });
});

// Bootstrap ScrollSpy initialization
document.addEventListener("DOMContentLoaded", function () {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbarNav',
        offset: 100
    });
});
