document.addEventListener('DOMContentLoaded', function() {
    console.log('JDK GROUP website loaded successfully!');
    
    // Initialize elements
    const socialCards = document.querySelectorAll('.social-card');
    const callButton = document.getElementById('callButton');
    const callPopup = document.getElementById('callPopup');
    
    // Handle all card interactions with a single approach
    socialCards.forEach(card => {
        // Press effect
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
            this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
            this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
        }, { passive: true });
        
        // Release effect
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-5px) scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(-5px) scale(1.03)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        }, { passive: true });
        
        // Reset when leaving
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('call') || !this.classList.contains('active')) {
                this.style.transform = '';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Click tracking
        card.addEventListener('click', function(e) {
            if (this.classList.contains('call')) {
                e.preventDefault();
                return;
            }
            
            const platform = this.classList.contains('instagram') ? 'Instagram' :
                           this.classList.contains('linkedin') ? 'LinkedIn' :
                           this.classList.contains('facebook') ? 'Facebook' :
                           this.classList.contains('whatsapp') ? 'WhatsApp' :
                           this.classList.contains('map') ? 'Map' : 'Call';
            console.log(`JDK GROUP: ${platform} button clicked`);
        });
    });
    
    // Call button functionality
    if (callButton) {
        callButton.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.style.transform = 'translateY(-10px) scale(1.05)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            } else {
                this.style.transform = '';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Save contact button functionality
        const saveContactBtn = callPopup.querySelector('.save-contact');
        if (saveContactBtn) {
            saveContactBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                alert('Contact saved: JDK GROUP - +91 63556 04903');
                callButton.classList.remove('active');
                callButton.style.transform = '';
                callButton.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        }
    }
    
    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (callButton && !callButton.contains(e.target)) {
            callButton.classList.remove('active');
            callButton.style.transform = '';
            callButton.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });

    // Optional: Add animation for logo when page loads
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