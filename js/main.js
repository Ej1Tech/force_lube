// JavaScript for the webpage

document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');

    languageSelect.addEventListener('change', function () {
        document.body.lang = this.value;
        document.body.dir = this.value === 'ar' ? 'rtl' : 'ltr';
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const galleryFolder = 'assets/images/';
    const images = [
        'IMG_0710.jpg',
        'IMG_0719.jpg',
        'IMG_0724.JPG',
        'IMG_0726.jpg',
        'IMG_0734.JPG',
    ]; // Replace with actual image file names in the folder.

    let currentIndex = 0;

    // Attach click event listeners to images already in the HTML
    gallery.querySelectorAll('.gallery-img').forEach((img, index) => {
        img.setAttribute('data-index', index); // Update data-index attribute to match the index
        img.addEventListener('click', function () {
            currentIndex = parseInt(img.getAttribute('data-index'));
            showImage();
            imageModal.show();
        });
    });

    // Show the image in the modal
    function showImage() {
        modalImage.src = `${galleryFolder}${images[currentIndex]}`;
    }

    // Navigate to the previous image
    document.getElementById('prevImage').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage();
    });

    // Navigate to the next image
    document.getElementById('nextImage').addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
});



// Get the button element
const goToTopButton = document.getElementById("goToTop");

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.style.display = "flex"; // Show the button
    } else {
        goToTopButton.style.display = "none"; // Hide the button
    }
});

// Add a click event listener to scroll to the top
goToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});
