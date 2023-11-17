// Declare answerKey globally (kinda sus?)
// let answerKey; // this made it worse lowkey

// Checks if answerKey object exists. There is an error where if it is run the first time and defined and then rerun, it says error bc already declared.
// This checks if object exists, and if it does it just passes and if it doesn't it defines it
if (answerKey) {
    // Object answerKey exists
    delete answerKey;
    defineanswerKeyObject()
    // if the object exists, you can just not define and "pass" but not adding any code, or delete and redefine with the two lines above
  } else {
    // Object answerKey does not exist
    defineanswerKeyObject()
  }

// Define answerKey object
function defineanswerKeyObject() {
    answerKey = { // error is that thing is already declared, check chatgpt and update
        "https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597": 0,
        t: "t"
    }
}

// Check quiz answers and output score
function checkQuiz() {
    // Define counters
    var correctAnswers = 0;
    var wrongAnswers = 0;

    // Check Question 1
    // Get the user's answer
    var q1Answer = document.getElementById("q1").value;

    // Finds the correct answer based on the link of the image in the question and a dictionary
    var imageQuestionLink = document.getElementById("imageq1").src;
    var imageQuestionLinkWithQuotes = `"${imageQuestionLink}"`;
    var questionAnswer = answerKey[imageQuestionLinkWithQuotes];

    // testing
    console.log(answerKey["https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597"])
    console.log(imageQuestionLinkWithQuotes)
    console.log(questionAnswer)

    // Add 1 to correctAnswers if answer matches, add 1 to wrongAnswers if answer doesn't match
    if (q1Answer === questionAnswer) {
        correctAnswers += 1;
    }
    else {
        wrongAnswers += 1;
    }


    // Output result
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "You got " + correctAnswers + " correct and " + wrongAnswers + " wrong."; // add grade calculator if want
}