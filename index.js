document.addEventListener('DOMContentLoaded', function() {
    console.log('JDK GROUP website loaded successfully!');
    document.getElementById('saveContactBtn').addEventListener('click', function() {
        // Android devices
        if (/android/i.test(navigator.userAgent)) {
            window.location.href = 'content://com.android.contacts/contacts/people/editcontact?' +
                                 'phone=' + encodeURIComponent('+916355604903') + 
                                 '&name=' + encodeURIComponent('JDK GROUP');
        } 
        // iOS devices
        else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            const vCard = `BEGIN:VCARD
    VERSION:3.0
    FN:JDK GROUP
    TEL;TYPE=WORK,VOICE:+916355604903
    END:VCARD`;
            
            const blob = new Blob([vCard], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = 'JDK_GROUP.vcf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        // Other devices
        else {
            alert('Please save this contact:\nName: JDK GROUP\nPhone: +91 6355604903');
        }
    });
  
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
