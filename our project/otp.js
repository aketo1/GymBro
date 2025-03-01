document.addEventListener("DOMContentLoaded", function () {
    // جزء OTP
    const inputs = document.querySelectorAll(".otp-inputs input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            if (e.target.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && !e.target.value) {
                inputs[index - 1].focus();
            }
        });
    });

    // جزء البريد الإلكتروني
    const emailInput = document.getElementById("email");
    const resetButton = document.getElementById("reset-password");

    // التحقق إذا كان البريد الإلكتروني موجودًا لتفعيل الزر
    emailInput.addEventListener("input", function () {
        if (emailInput.value) {
            resetButton.disabled = false; // تفعيل الزر إذا كان هناك قيمة
        } else {
            resetButton.disabled = true; // تعطيل الزر إذا كان الحقل فارغ
        }
    });
});