document.addEventListener('DOMContentLoaded', function() {
    console.log('JDK GROUP website loaded successfully!');
    
    // Initialize elements
    const callButton = document.getElementById('callButton');
    const callPopup = document.getElementById('callPopup');
    const socialCards = document.querySelectorAll('.social-card');
    
    // Call button functionality - toggle popup
    if (callButton && callPopup) {
        callButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event bubbling
            callButton.classList.toggle('active');
        });

        // Close popup when clicking outside
        document.addEventListener('click', function(e) {
            if (!callButton.contains(e.target) && !callPopup.contains(e.target)) {
                callButton.classList.remove('active');
            }
        });
    }

    // Handle card interactions
    socialCards.forEach(card => {
        // Skip the call button for press effects to avoid interference
        if (!card.classList.contains('call')) {
            // Add press effect for mouse
            card.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(2px) scale(0.98)';
                this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
            });
            
            // Add press effect for touch
            card.addEventListener('touchstart', function(e) {
                this.style.transform = 'translateY(2px) scale(0.98)';
                this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
            }, { passive: true });
            
            // Remove press effect
            const removeEffects = function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            };
            
            card.addEventListener('mouseup', removeEffects);
            card.addEventListener('touchend', removeEffects, { passive: true });
            card.addEventListener('mouseleave', removeEffects);
        }
    });

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
