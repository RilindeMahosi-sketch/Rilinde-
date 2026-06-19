// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {

    /* 1. CONTACT FORM VALIDATION                   */

    var contactForm = document.getElementById('contactForm');
    var contactError = document.getElementById('contact-error');
    var contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the form from submitting normally
            event.preventDefault();

            // Clear previous messages
            if (contactError) contactError.textContent = '';
            if (contactSuccess) contactSuccess.textContent = '';

            // Get form values
            var name = document.getElementById('contactName').value.trim();
            var email = document.getElementById('contactEmail').value.trim();
            var phone = document.getElementById('phone').value.trim();
            var productInterest = document.getElementById('product-interest').value;
            var message = document.getElementById('message').value.trim();

            // Validation flag
            var isValid = true;
            var errorMessage = '';

            // Validate Name
            if (name === '') {
                errorMessage += 'Please enter your full name.\n';
                isValid = false;
            } else if (name.length < 2) {
                errorMessage += 'Name must be at least 2 characters.\n';
                isValid = false;
            }

            // Validate Email
            if (email === '') {
                errorMessage += 'Please enter your email address.\n';
                isValid = false;
            } else if (!email.includes('@') || !email.includes('.')) {
                errorMessage += 'Please enter a valid email address.\n';
                isValid = false;
            }

            // Validate Phone (optional but validate if provided)
            if (phone !== '' && phone.length < 10) {
                errorMessage += 'Phone number must be at least 10 digits.\n';
                isValid = false;
            }

            // Validate Product Interest
            if (productInterest === '') {
                errorMessage += 'Please select a product interest.\n';
                isValid = false;
            }

            // Validate Message
            if (message === '') {
                errorMessage += 'Please enter your message.\n';
                isValid = false;
            } else if (message.length < 10) {
                errorMessage += 'Message must be at least 10 characters.\n';
                isValid = false;
            }

            // Show error or success
            if (!isValid) {
                if (contactError) {
                    contactError.textContent = errorMessage;
                    contactError.style.color = '#DC2626';
                    contactError.style.backgroundColor = '#FEE2E2';
                    contactError.style.padding = '10px';
                    contactError.style.borderRadius = '5px';
                    contactError.style.marginTop = '10px';
                    contactError.style.border = '1px solid #DC2626';
                }
            } else {
                if (contactSuccess) {
                    contactSuccess.textContent = 'Thank you! Your message has been sent successfully. We will respond within 48 hours.';
                    contactSuccess.style.color = '#16A34A';
                    contactSuccess.style.backgroundColor = '#DCFCE7';
                    contactSuccess.style.padding = '10px';
                    contactSuccess.style.borderRadius = '5px';
                    contactSuccess.style.marginTop = '10px';
                    contactSuccess.style.border = '1px solid #16A34A';
                }
                // Reset the form after successful submission
                contactForm.reset();
            }
        });
    }

    /* 2. LEAFLET MAPS FOR CONTACT PAGE           */

    // Check if Leaflet is available and maps exist
    if (typeof L !== 'undefined') {

        // ----- Map 1: Main Store - Soweto -----
        var map1 = document.getElementById('map1');
        if (map1) {
            // Coordinates for Soweto (Vilakazi Street area)
            var map1Instance = L.map('map1').setView([-26.2380, 27.9080], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map1Instance);

            L.marker([-26.2380, 27.9080]).addTo(map1Instance)
                .bindPopup('<strong>Mahosi Mobile Accessories</strong><br>123 Vilakazi Street<br>Orlando West, Soweto<br>Johannesburg, 1804')
                .openPopup();
        }

        // ----- Map 2: Pickup Point - Braamfontein -----
        var map2 = document.getElementById('map2');
        if (map2) {
            // Coordinates for Braamfontein (Juta Street area)
            var map2Instance = L.map('map2').setView([-26.1900, 28.0300], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map2Instance);

            L.marker([-26.1900, 28.0300]).addTo(map2Instance)
                .bindPopup('<strong>Mahosi Mobile - Pickup Point</strong><br>45 Juta Street<br>Braamfontein, Johannesburg<br>2001')
                .openPopup();
        }

    } else {
        console.log('Leaflet library not loaded. Maps will not display.');
    }

    /* 3. WHATSAPP BUTTON TRACKING                 */

    var whatsappButtons = document.querySelectorAll('.whatsapp-button, .whatsapp-cta');
    whatsappButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log('WhatsApp button clicked. User redirected to WhatsApp.');
        });
    });

    /* 4. SMOOTH SCROLLING FOR NAVIGATION LINKS    */

    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Only apply to same-page links (anchor links)
            if (this.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                var targetId = this.getAttribute('href');
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log('Mahosi Mobile Accessories - JavaScript loaded successfully!');
});