// Avatar preview functionality with GIF support
const avatarUpload = document.getElementById('avatar-upload');
const avatarImage = document.querySelector('.avatar img');

avatarUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatarImage.src = e.target.result;
            
            // If it's a GIF, add a special indicator
            if (file.type === 'image/gif') {
                // Add a small indicator that it's an animated avatar
                const avatarContainer = document.querySelector('.avatar');
                
                // Remove existing indicator if any
                const existingIndicator = document.querySelector('.gif-indicator');
                if (existingIndicator) {
                    existingIndicator.remove();
                }
                
                // Create new indicator
                const indicator = document.createElement('div');
                indicator.className = 'gif-indicator';
                indicator.textContent = 'GIF';
                avatarContainer.appendChild(indicator);
            } else {
                // Remove indicator if not a GIF
                const existingIndicator = document.querySelector('.gif-indicator');
                if (existingIndicator) {
                    existingIndicator.remove();
                }
            }
        };
        reader.readAsDataURL(file);
    }
});

// Save button functionality
document.getElementById('save-button').addEventListener('click', function() {
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    
    // Hide the message after 3 seconds
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
});

// Password update functionality
document.getElementById('change-password-button').addEventListener('click', function() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all password fields');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
    }
    
    // In a real application, you would send this to your server
    alert('Password updated successfully!');
    
    // Clear the form
    document.getElementById('password-form').reset();
});
