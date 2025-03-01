const newPasswordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-btn');

const lengthCheck = document.getElementById('length-check');
const numberCheck = document.getElementById('number-check');
const symbolCheck = document.getElementById('symbol-check');
const confirmPasswordError = document.getElementById('confirm-password-error');

// Check password validity on input
newPasswordInput.addEventListener('input', function () {
    const password = newPasswordInput.value;

    // Check length
    if (password.length >= 8) {
        lengthCheck.classList.remove('invalid');
        lengthCheck.classList.add('valid');
    } else {
        lengthCheck.classList.remove('valid');
        lengthCheck.classList.add('invalid');
    }

    // Check for at least one number
    if (/\d/.test(password)) {
        numberCheck.classList.remove('invalid');
        numberCheck.classList.add('valid');
    } else {
        numberCheck.classList.remove('valid');
        numberCheck.classList.add('invalid');
    }

    // Check for at least one special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        symbolCheck.classList.remove('invalid');
        symbolCheck.classList.add('valid');
    } else {
        symbolCheck.classList.remove('valid');
        symbolCheck.classList.add('invalid');
    }

    // Enable submit button if all conditions are met
    if (password.length >= 8 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password) && password === confirmPasswordInput.value) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

// Check if passwords match
confirmPasswordInput.addEventListener('input', function () {
    const password = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // Enable submit button if both passwords match and meet all criteria
    if (confirmPassword === password && newPasswordInput.value.length >= 8 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        submitButton.enabled = true;
    } else {
        submitButton.enabled = false;
    }
});