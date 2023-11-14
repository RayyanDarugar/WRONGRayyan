
function checkQuiz() {
    // Define counters
    var correctAnswers = 0;
    var wrongAnswers = 0;

    // Check Question 1
    var q1Answer = document.getElementById("q1");
    if (q1Answer === "e") {
        correctAnswers += 1;
    }
    else {
        wrongAnswers += 1;
    }


    // Output result
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "You got " + correctAnswers + " correct and " + wrongAnswers + " wrong."; // add grade calculator if want
}