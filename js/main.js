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
    const galleryFolder = 'assets/images/';
    const images = [
        'IMG_0710.JPG',
        'IMG_0719.JPG',
        'IMG_0724.JPG',
        'IMG_0726.JPG',
        'IMG_0734.JPG',
    ]; // Replace with actual image file names in the folder.
    const gallery = document.getElementById('gallery');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    let currentIndex = 0;

    // Load images dynamically
    images.forEach((image, index) => {
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4 col-lg-3';
        col.innerHTML = `
            <img src="${galleryFolder}${image}" 
                 alt="Image ${index + 1}" 
                 class="img-fluid rounded shadow-sm gallery-img" 
                 style="cursor: pointer;" 
                 data-index="${index}">
        `;
        gallery.appendChild(col);
    });

    // Open modal on image click
    gallery.addEventListener('click', function (e) {
        if (e.target.classList.contains('gallery-img')) {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            showImage();
            imageModal.show();
        }
    });

    // Show image in modal
    function showImage() {
        modalImage.src = `${galleryFolder}${images[currentIndex]}`;
    }

    // Navigate to previous image
    document.getElementById('prevImage').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage();
    });

    // Navigate to next image
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
