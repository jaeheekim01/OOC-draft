function generateQuestion() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  var categories = Array.from(checkboxes).map(function (checkbox) {
    return checkbox.value;
  });

  if (categories.length === 0) {
    alert("Please select at least one category.");
    return;
  }

  var validFiles = [];
  categories.forEach(function (category) {
    var categoryFiles = getFilesByCategory(category);
    validFiles.push(...categoryFiles);
  });

  if (validFiles.length === 0) {
    alert("No questions found for selected categories.");
    return;
  }

  var randomFile = validFiles[Math.floor(Math.random() * validFiles.length)];
  var correctAnswer = correctAnswers[randomFile]; // Get the correct answer from CorrectAnswers.js
  displayQuestion(randomFile, correctAnswer);
}

function getFilesByCategory(category) {
  var files = [
    "WHL_1.png",
    "FOR_2.png",
    "ARR_3.png",
    "WHL_4.png",
    "FOR_5.png",
    "FOR_6.png",
    "ARR_MET_FOR_7.png",
    "MET_8.png",
    "REF_9.png",
    "ARR_WHL_10.png",
    "ARR_WHL_11.png",
    "ARR_NST_FOR_12.png",
    "MET_FOR_13.png",
    "FOR_WHL_ARR_14.png",
    "ARR_MET_15.png",
    "ARR_MET_FOR_16.png",
    "MET_ARR_17.png",
    "WHL_18.png",
    "FOR_19.png",
    "NST_20.png",
    "WHL_21.png",
    "NST_22.png",
    "NST_23.png",
    "WHL_24.png",
    "MET_25.png",
    "MET_ARR_FOR_26.png",
    "MET_27.png",
    "MET_28.png",
    "WHL_29.png",
    "WHL_30.png",
    "WHL_31.png",
    "WHL_32.png",
    "NST_33.png",
    "NST_34.png",
    "NST_35.png",
    "WHL_36.png",
    "NST_37.png",
    "WHL_MET_38.png",
    "REF_39.png",
    "REF_40.png",
    "WHL_MET_41.png",
    "ARR_WHL_42.png",
    "ARR_MET_FOR_43.png",
    "ARR_FOR_MET_44.png",
    "ARR_MET_FOR_45.png",
    "ARR_FOR_MET_46.png",
    "ARR_FOR_MET_47.png",
    "ARR_MET_48.png",
    "MET_49.png",
    "ARR_MET_FOR_50.png",
  ];

  var matchingFiles = files.filter(function (file) {
    return file.includes(category);
  });

  return matchingFiles;
}


function displayQuestion(imageFileName, correctAnswer) {
  var questionDisplay = document.getElementById("questionDisplay");
  questionDisplay.innerHTML =
    "<h2>Generated Question:</h2><img src='../images/Questions/" + 
    imageFileName +
    "' alt='Question Image'>" +
    "<div id='answerContainer'></div>"; // Create a container for the answer elements

  var answerContainer = document.getElementById("answerContainer");

  // Create textarea element for user's answer
  var textarea = document.createElement("textarea");
  textarea.className = "input-box";
  textarea.setAttribute("data-answer", correctAnswer); // Set the data-answer attribute
  textarea.placeholder = "Enter your answer";
  textarea.rows = "11";
  answerContainer.appendChild(textarea); // Append textarea to the answer container

  // Create button element for submitting answer
  var button = document.createElement("button");
  button.className = "check-button";
  button.textContent = "Submit Answer";
  button.setAttribute("onclick", "checkAnswer(this)");
  answerContainer.appendChild(button); // Append button to the answer container

  // Create paragraph element for displaying answer result
  var answerResult = document.createElement("p");
  answerResult.id = "answerResult";
  answerContainer.appendChild(answerResult); // Append answer result paragraph to the answer container
}
