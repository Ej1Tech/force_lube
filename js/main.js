// ======================== JavaScript for the Webpage ========================

// ======================== Language Selection ========================
document.addEventListener('DOMContentLoaded', function () {
    const languageSelect = document.getElementById('languageSelect');

    // Load the saved language from local storage or default to 'ar'
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ar';
    languageSelect.value = savedLanguage;
    document.body.lang = savedLanguage;
    document.body.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    loadLanguage(savedLanguage);

    languageSelect.addEventListener('change', function () {
        // Change language and direction
        const selectedLang = this.value;
        document.body.lang = selectedLang;
        document.body.dir = selectedLang === 'ar' ? 'rtl' : 'ltr'; // Set text direction

        // Save the selected language in local storage
        localStorage.setItem('selectedLanguage', selectedLang);

        // Load the corresponding language JSON file
        loadLanguage(selectedLang);
    });

    function loadLanguage(lang) {
        // Fetch the language JSON file
        fetch(`langs/${lang}/${lang}.json`)
            .then(response => response.json())
            .then(data => updateTranslations(data))
            .catch(error => console.error('Error loading language file:', error));
    }

    // Update all elements with the `data-translate` attribute
    function updateTranslations(translations) {
        const translateElements = document.querySelectorAll('[data-translate]');

        translateElements.forEach(element => {
            const translationKey = element.getAttribute('data-translate');
            if (translations[translationKey]) {
                element.textContent = translations[translationKey];
            }
        });
    }
});


// ======================== Smooth Scrolling for Navigation Links ========================
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Smooth scroll to the section
                });
            }
        });
    });
});

// ======================== Navbar Scroll Behavior and Active Link Highlight ========================
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        // Add or remove the 'scrolled' class based on scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Highlight the current section link
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id'); // Get the current section ID
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

// ======================== Dynamic Image Gallery ========================
document.addEventListener('DOMContentLoaded', function () {
    const galleryFolder = 'assets/images/';
    const images = [
        'IMG_0710.JPG',
        'IMG_0719.JPG',
        'IMG_0724.JPG',
        'IMG_0726.JPG',
        'IMG_0734.JPG',
    ]; // Replace with actual image file names
    const gallery = document.getElementById('gallery');
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    let currentIndex = 0;

    // Dynamically load gallery images
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

    // Show the modal when an image is clicked
    gallery.addEventListener('click', function (e) {
        if (e.target.classList.contains('gallery-img')) {
            currentIndex = parseInt(e.target.getAttribute('data-index'));
            showImage();
            imageModal.show();
        }
    });

    // Update the modal image
    function showImage() {
        modalImage.src = `${galleryFolder}${images[currentIndex]}`;
    }

    // Navigate through images in the modal
    document.getElementById('prevImage').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage();
    });

    document.getElementById('nextImage').addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage();
    });
});

// ======================== Current Year in Footer ========================
document.addEventListener('DOMContentLoaded', function () {
    const currentYearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear; // Display the current year
});

// ======================== Go to Top Button ========================

// Get the button element
const goToTopButton = document.getElementById("goToTop");

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.style.display = "flex"; // Show the button
    } else {
        goToTopButton.style.display = "none"; // Hide the button
    }
});

// Add a click event listener to scroll to the top
goToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});
