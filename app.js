function getUserName() {
  let enterName = prompt("Enter your name");
  while (enterName === "") {
    enterName = prompt("Enter your name");
  }
  if (enterName === null) {
    enterName = "Not Entered";
  }
  document.getElementById("name-display").innerHTML = enterName;
}

getUserName();

function printNumbers() {
  let userInput = parseInt(prompt("How many pictures do you want to display?"));
  document.write("<p>" + userInput + "</p>");
  for (let i = 0; i < userInput; i++) {
    count = i + 1;
    document.write('<img src="./images/GantryCrane.JPG">' + "Count:" + count);
  }
}
