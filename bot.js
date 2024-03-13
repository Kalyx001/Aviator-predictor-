document.addEventListener('DOMContentLoaded', function() {
  var resultElement = document.getElementById('result');
  var generateButton = document.getElementById('generate-btn');
  var activateButton = document.getElementById('activate-btn');
  var activated = false;
  var generateCount = 0; // Add a counter for generate button clicks
  var usedCodes = {}; // Object to store used activation codes and their timestamps

  activateButton.addEventListener('click', function() {
    var allowedCodes = ["rty", "ssp", "tycoon", "spl4"]; // List of allowed activation codes

    var enteredCode = prompt("Enter activation code:");

    if (allowedCodes.includes(enteredCode)) {
      if (!usedCodes.hasOwnProperty(enteredCode) || (Date.now() - usedCodes[enteredCode]) > (60 * 60 * 1000)) {
        usedCodes[enteredCode] = Date.now(); // Record the activation timestamp
        activateButton.disabled = true;
        generateButton.disabled = false;
        activated = true;
        alert("Activation successful!");
      } else {
        alert("This activation code has already been used today.");
      }
    } else {
      alert("Invalid activation code.  Activation need Payed Subscription.  Please sign up below to get the activation Code.");
    }
  });

  generateButton.addEventListener('click', function() {
    // Check if the button is already disabled
    if (generateButton.disabled) {
      alert("Please wait until the previous code generation process finishes.");
      return;
    }

    // Disable the generate button when code generation starts
    generateButton.disabled = true;

    if (!activated) {
      var paymentLink = "https://example.com/payment"; // Replace with your payment link
      var paymentMessage = "Please make a payment of $25 to generate an activation code: <a href='" + paymentLink + "' target='_blank'>Make Payment</a>";
      alert(paymentMessage);
      // Enable the generate button when code generation finishes
      generateButton.disabled = false;
      return;
    }

    if (generateCount >= 5) {
      alert("You have reached the limit of activation code .");
      generateButton.disabled = true; // Disable the button after 5 clicks
      // Enable the generate button when code generation finishes
      generateButton.disabled = false;
      return;
    }

    generateCount++; // Increment generate button click count

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
        // Enable the generate button when code generation finishes
        setTimeout(function() {
          resultElement.classList.add('glowing'); // Apply glowing effect
          setTimeout(function() {
            resultElement.classList.remove('glowing'); // Remove glowing effect after 2 seconds
            generateButton.disabled = false; // Enable the generate button
          }, 2000);
        }, 0); // Apply glowing effect immediately after the code is generated
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
