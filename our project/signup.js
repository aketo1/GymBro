const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

const lengthRequirement = document.getElementById("length");
const numberRequirement = document.getElementById("number");
const letterRequirement = document.getElementById("letter");
const specialRequirement = document.getElementById("special");

passwordField.addEventListener("input", function() {
    const password = passwordField.value;

    // Check length
    if (password.length >= 8) {
        lengthRequirement.classList.remove("invalid");
        lengthRequirement.classList.add("valid");
    } else {
        lengthRequirement.classList.remove("valid");
        lengthRequirement.classList.add("invalid");
    }

    // Check for number
    const hasNumber = /\d/;
    if (hasNumber.test(password)) {
        numberRequirement.classList.remove("invalid");
        numberRequirement.classList.add("valid");
    } else {
        numberRequirement.classList.remove("valid");
        numberRequirement.classList.add("invalid");
    }

    // Check for letter
    const hasLetter = /[a-zA-Z]/;
    if (hasLetter.test(password)) {
        letterRequirement.classList.remove("invalid");
        letterRequirement.classList.add("valid");
    } else {
        letterRequirement.classList.remove("valid");
        letterRequirement.classList.add("invalid");
    }

    // Check for special character
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;
    if (hasSpecial.test(password)) {
        specialRequirement.classList.remove("invalid");
        specialRequirement.classList.add("valid");
    } else {
        specialRequirement.classList.remove("valid");
        specialRequirement.classList.add("invalid");
    }
});

confirmPasswordField.addEventListener("input", function() {
    if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordField.setCustomValidity("Passwords don't match");
    } else {
        confirmPasswordField.setCustomValidity("");
    }
});