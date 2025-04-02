/**
 * Color Temperature Study Presentation Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlighting
    highlightActiveNavLink();
    
    // Tab functionality
    initTabs();
    
    // Carousel functionality
    initCarousel();
    
    // Smooth scrolling for navigation
    initSmoothScroll();
});

/**
 * Highlight the active navigation link based on scroll position
 */
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

/**
 * Initialize tabs functionality
 */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the parent tab container
            const tabsContainer = this.closest('.visual-tabs');
            
            // Remove active class from all buttons in this container
            tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the tab to show
            const tabId = this.getAttribute('data-tab');
            
            // Hide all tabs
            tabsContainer.querySelectorAll('.tab-pane').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show the selected tab
            tabsContainer.querySelector('#' + tabId).classList.add('active');
        });
    });
}

/**
 * Initialize carousel functionality
 */
function initCarousel() {
    const carousels = document.querySelectorAll('.plot-carousel');
    
    carousels.forEach(carousel => {
        const items = carousel.querySelectorAll('.carousel-item');
        const dots = carousel.querySelectorAll('.dot');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        let currentIndex = 0;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Hide all slides
            items.forEach(item => {
                item.style.display = 'none';
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show the current slide
            items[index].style.display = 'block';
            
            // Add active class to current dot
            dots[index].classList.add('active');
            
            // Update current index
            currentIndex = index;
        }
        
        // Previous slide button
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                let index = currentIndex - 1;
                if (index < 0) {
                    index = items.length - 1;
                }
                showSlide(index);
            });
        }
        
        // Next slide button
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                let index = currentIndex + 1;
                if (index >= items.length) {
                    index = 0;
                }
                showSlide(index);
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
            });
        });
        
        // Initialize first slide
        showSlide(0);
        
        // Auto advance slides every 7 seconds
        setInterval(function() {
            let index = currentIndex + 1;
            if (index >= items.length) {
                index = 0;
            }
            showSlide(index);
        }, 7000);
    });
}

/**
 * Initialize smooth scrolling for navigation
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Add a header animation effect on scroll
 */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});
