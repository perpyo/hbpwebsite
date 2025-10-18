document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("bookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const hairstyle = document.getElementById("hairstyle").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
  
      confirmationMessage.textContent = `Thank you, ${name}! Your ${hairstyle} appointment has been booked for ${date} at ${time}. You’ll receive a confirmation email soon.`;
      confirmationMessage.classList.remove("hidden");
  
      form.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion");
  
    accordions.forEach(acc => {
      acc.addEventListener("click", () => {
        // Toggle active class
        acc.classList.toggle("active");
  
        // Toggle panel display
        const panel = acc.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    });
  });
  