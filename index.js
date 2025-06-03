// // You can add JavaScript functionality here if needed
// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Website loaded successfully!');
    
//     // Example: Add click event for call button
//     const callButton = document.querySelector('.call-button');
//     if (callButton) {
//         callButton.addEventListener('click', function() {
//             console.log('Call button clicked!');
//             // You could add additional functionality here
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    console.log('JDK GROUP website loaded successfully!');
    
    // Initialize all social cards
    const socialCards = document.querySelectorAll('.social-card');
    const callButton = document.getElementById('callButton');
    const callPopup = document.getElementById('callPopup');
    
    // Add hover/click effects to all social cards
    socialCards.forEach(card => {
        // Click animation
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(2px) scale(0.98)';
            this.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('call') || !this.classList.contains('active')) {
                this.style.transform = '';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Analytics tracking (example)
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
            
            // You could add actual analytics tracking here
            // Example: trackSocialMediaClick(platform);
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
            saveContactBtn.addEventListener('click', function() {
                // In a real app, this would use the Contacts API
                alert('Contact saved: JDK GROUP - +91 63556 04903');
                callButton.classList.remove('active');
                
                // Reset button styles
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