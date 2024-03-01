document.addEventListener('DOMContentLoaded', function() {
  var resultElement = document.getElementById('result');
  var generateButton = document.getElementById('generate-btn');
  var activateButton = document.getElementById('activate-btn');
  var activated = false;

  activateButton.addEventListener('click', function() {
    var correctCode = "6482$$2846";
    var enteredCode = prompt("Enter activation code:");

    if (enteredCode === correctCode) {
      activateButton.disabled = true;
      generateButton.disabled = false;
      activated = true;
      alert("Activation successful!");
    } else {
      alert("Invalid activation code. Please sign up below to get the activation Code.");
    }
  });

  generateButton.addEventListener('click', function() {
    if (!activated) {
      var paymentLink = "https://example.com/payment"; // Replace with your payment link
      var paymentMessage = "Please make a payment to generate an activation code: <a href='" + paymentLink + "' target='_blank'>Make Payment</a>";
      alert(paymentMessage);
      return;
    }

    var probability = Math.random();
    var targetNumber;

    if (probability < 0.8) {
      targetNumber = (Math.random() * (2.55 - 1.00) + 1.00).toFixed(2);
    } else if (probability < 0.95) {
      targetNumber = (Math.random() * (20 - 2.55) + 2.55).toFixed(2);
    } else {
      targetNumber = (Math.random() * (100 - 20) + 20).toFixed(2);
    }

    var currentNumber = 1.00;
    var step = (targetNumber - currentNumber) / (4 * 1000 / 50); // Increase the number gradually over 4 seconds

    var intervalId = setInterval(function() {
      currentNumber += step;
      resultElement.textContent = currentNumber.toFixed(2) + 'x'; // Concatenate 'x' to the end

      if (currentNumber >= targetNumber) {
        clearInterval(intervalId);
      }
    }, 50); // Update every 50 milliseconds
  });
});
/* sign up*/
const signupBtn = document.getElementById('signupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

signupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
