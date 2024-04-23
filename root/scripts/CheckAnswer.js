// Function to check the answer
function checkAnswer(button) {
  var inputBox = button.previousElementSibling;
  var answer = inputBox.value.replace(/\s+/g, " ").trim(); // Replace consecutive whitespace with a single space and trim the string
  var correctAnswer = inputBox
    .getAttribute("data-answer")
    .replace(/\s+/g, " ")
    .trim(); // Get the correct answer and normalize it
  var message = inputBox.nextElementSibling; // Get the next element for displaying message

  // Compare the normalized user's answer with the normalized correct answer
  if (answer === correctAnswer) {
    // If the answers match, mark the input box as correct and display a success message
    inputBox.classList.remove("incorrect");
    inputBox.classList.add("correct");
    message.textContent = "Correct!";
  } else {
    // If the answers don't match, mark the input box as incorrect, clear the input box, and display a failure message
    inputBox.classList.remove("correct");
    inputBox.classList.add("incorrect");
    message.textContent = "Try again!";
    inputBox.value = ""; // Clear the input box
  }
}
