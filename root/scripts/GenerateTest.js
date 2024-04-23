function generateCodeContainers() {
  var container = document.getElementById("codeContainer");

  Object.entries(correctAnswers).forEach(function ([fileName, answer], index) {
    var codeDiv = document.createElement("div");
    codeDiv.className = "code-container";

    var questionLabel = document.createElement("div");
    questionLabel.className = "question-label";
    questionLabel.textContent = "Question " + (index + 1);
    codeDiv.appendChild(questionLabel);

    var img = document.createElement("img");
    img.src = "/root/images/Questions/" + fileName; // Adjust the path as needed
    img.alt = "Code " + (index + 1);
    codeDiv.appendChild(img);

    var textarea = document.createElement("textarea");
    textarea.className = "input-box";
    textarea.setAttribute("data-answer", answer); // Set the data-answer attribute
    textarea.placeholder = "Enter your answer";
    textarea.rows = "11";
    codeDiv.appendChild(textarea);

    var button = document.createElement("button");
    button.className = "check-button";
    button.textContent = "Check";
    button.setAttribute("onclick", "checkAnswer(this)");
    codeDiv.appendChild(button);

    container.appendChild(codeDiv);
  });
}
