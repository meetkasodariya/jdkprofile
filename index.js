document.addEventListener('DOMContentLoaded', function() {
    console.log('JDK GROUP website loaded successfully!');
    
    // Initialize elements
    const callButton = document.getElementById('callButton');
    const socialCards = document.querySelectorAll('.social-card');
    
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window;
    
    // Handle card interactions
    socialCards.forEach(card => {
        // Add press effect for both mouse and touch
        card.addEventListener('mousedown', addPressEffect);
        card.addEventListener('touchstart', addPressEffect, { passive: true });
        
        // Remove press effect
        card.addEventListener('mouseup', removePressEffect);
        card.addEventListener('touchend', removePressEffect, { passive: true });
        card.addEventListener('mouseleave', removePressEffect);
        
        // For touch devices, add hover effect on touch
        if (isTouchDevice) {
            card.addEventListener('touchend', function() {
                this.classList.add('hover-effect');
                setTimeout(() => {
                    this.classList.remove('hover-effect');
                }, 300);
            });
        }
    });
    
    // Call button functionality - toggle popup
    if (callButton) {
        callButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
        });
    }
    
    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (callButton && !callButton.contains(e.target)) {
            callButton.classList.remove('active');
        }
    });

    // Helper functions
    function addPressEffect() {
        if (!this.classList.contains('active')) {
            this.style.transform = 'translateY(2px) scale(0.98)';
            this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
        }
    }
    
    function removePressEffect() {
        if (!this.classList.contains('active')) {
            this.style.transform = '';
            this.style.boxShadow = '';
        }
    }

    // Logo animation
    const logo = document.querySelector('.logo');
    if (logo) {
        setTimeout(() => {
            logo.style.transform = 'scale(1.1)';
            setTimeout(() => {
                logo.style.transform = '';
            }, 300);
        }, 1000);
    }
});