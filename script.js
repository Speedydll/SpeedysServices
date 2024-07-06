// script.js

// Wait for the DOM to fully load before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Get the "Support Server" button element
    var supportServerButton = document.querySelector('.support-server button');

    // Add a click event listener to the button
    supportServerButton.addEventListener('click', function() {
        // Open the Discord invite link in a new tab
        window.open('https://discord.gg/ZjnBax3UdU', '_blank');
    });
});


// Example: Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.animate');

    window.addEventListener('scroll', function() {
        elements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
    });

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
