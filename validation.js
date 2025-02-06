document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const destinationInput = document.getElementById("destination");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const submitButton = form.querySelector("button[type='submit']");
    const destinationError = document.getElementById("destination-error");
    const dateError = document.getElementById("date-error");
  
    // Initial state: Disable the submit button
    submitButton.disabled = true;
  
    // Validate the form on input change
    form.addEventListener("input", validateForm);
  
    // Handle form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default submission
      if (validateForm()) {
        alert("Form submitted successfully!");
        form.reset(); // Reset the form after successful submission
        validateForm(); // Revalidate to disable the submit button again
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validate destination input
      if (destinationInput.value.trim() === "") {
        destinationError.textContent = "Destination cannot be empty.";
        isValid = false;
      } else {
        destinationError.textContent = "";
      }
  
      // Validate dates
      const startDate = new Date(startDateInput.value);
      const endDate = new Date(endDateInput.value);
      if (!startDateInput.value || !endDateInput.value) {
        dateError.textContent = "Both start and end dates are required.";
        isValid = false;
      } else if (startDate >= endDate) {
        dateError.textContent = "Start date must be earlier than end date.";
        isValid = false;
      } else {
        dateError.textContent = "";
      }
  
      // Enable or disable the submit button
      submitButton.disabled = !isValid;
  
      return isValid;
    }
  });
  