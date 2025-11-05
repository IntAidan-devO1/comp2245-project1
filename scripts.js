/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.newsletter form');
  const emailInput = document.querySelector('.newsletter input[type="email"]');
  const messageDiv = document.querySelector('.message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const email = emailInput.value.trim();

    if (email === '') {
      // If no email entered
      messageDiv.textContent = 'Please enter a valid email address';
      messageDiv.style.color = 'yellow';
    } else {
      // If email entered
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = 'white';
      emailInput.value = ''; // Clear the input after submitting
    }
  });
});
