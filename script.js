// Home Page Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slider if it exists on the page
    if(document.querySelector('.slider')) {
        const slides = [
            {
                image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
                title: 'Learn Without Limits',
                description: 'Expand your career opportunities with our professional courses',
                buttonText: 'Get Started'
            },
            {
                image: 'https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg',
                title: 'Master New Skills',
                description: 'Learn from industry experts at your own pace',
                buttonText: 'Browse Courses'
            },
            // Additional slides would be added here
        ];

        const slider = document.querySelector('.slider');
        const slideContainer = document.querySelector('.slide');
        let currentSlide = 0;

        function showSlide(index) {
            const slide = slides[index];
            slideContainer.style.backgroundImage = `url('${slide.image}')`;
            slideContainer.innerHTML = `
                <div class="container mx-auto px-6 text-white">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">${slide.title}</h1>
                    <p class="text-xl mb-8">${slide.description}</p>
                    <a href="register.html" class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700">${slide.buttonText}</a>
                </div>
            `;
        }

        // Initialize first slide
        showSlide(currentSlide);

        // Auto-rotate slides every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Form validation for all forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if(!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if(!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
});