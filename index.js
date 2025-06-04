document.addEventListener('DOMContentLoaded', function() {
    console.log('JDK GROUP website loaded successfully!');
    
    // Initialize elements
    const socialCards = document.querySelectorAll('.social-card');
    const callButton = document.getElementById('callButton');
    const callPopup = document.getElementById('callPopup');
    const saveContactBtn = document.getElementById('saveContact');
    
    // Add touch/click effects to all social cards
    socialCards.forEach(card => {
        // Touch/click start
        card.addEventListener('mousedown', handlePressStart);
        card.addEventListener('touchstart', handlePressStart);
        
        // Touch/click end
        card.addEventListener('mouseup', handlePressEnd);
        card.addEventListener('touchend', handlePressEnd);
        card.addEventListener('mouseleave', handlePressEnd);
        
        // Click analytics
        card.addEventListener('click', trackSocialClick);
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
                resetButtonStyles(this);
            }
        });
    }
    
    // Save contact button functionality
    if (saveContactBtn) {
        saveContactBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            saveContact();
            if (callButton) {
                callButton.classList.remove('active');
                resetButtonStyles(callButton);
            }
        });
    }
    
    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (callButton && !callButton.contains(e.target)) {
            callButton.classList.remove('active');
            resetButtonStyles(callButton);
        }
    });
    
    // Helper functions
    function handlePressStart(e) {
        if (e.type === 'touchstart') e.preventDefault();
        this.style.transform = 'translateY(2px) scale(0.98)';
        this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
    }
    
    function handlePressEnd(e) {
        if (!this.classList.contains('call') || !this.classList.contains('active')) {
            resetButtonStyles(this);
        }
    }
    
    function resetButtonStyles(button) {
        button.style.transform = '';
        button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
    
    function trackSocialClick(e) {
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
    }
    
    function saveContact() {
        // In a real app, this would use the Contacts API
        const phoneNumber = '+91 63556 04903';
        alert(`Contact saved: JDK GROUP - ${phoneNumber}`);
        
        // For actual implementation, you might use:
        // window.open(`tel:${phoneNumber}`, '_blank');
    }
    
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