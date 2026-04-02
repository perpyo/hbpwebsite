// main.js

// 1️⃣ Accordion
document.querySelectorAll('.accordion').forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
});

// 2️⃣ Form Submission with EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

document.querySelectorAll('.booking-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const agree = form.querySelector('input[name="agree"]');
    if (!agree.checked) {
      alert("You must agree to the policies before booking.");
      return;
    }

    const formData = {};
    new FormData(form).forEach((value, key) => {
      formData[key] = value;
    });
    formData['service'] = form.dataset.service;

    // Send confirmation to client
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then(() => {
        form.querySelector('.confirmation').textContent =
          `Thank you ${formData.name}! Your ${formData.service} appointment has been booked.`;
        form.querySelector('.confirmation').classList.remove('hidden');
        form.reset();
      }, (err) => {
        alert("Booking failed. Try again.");
        console.error(err);
      });

    // Send notification to yourself (optional: create another template for admin notifications)
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_ADMIN_TEMPLATE_ID', formData);
  });
});