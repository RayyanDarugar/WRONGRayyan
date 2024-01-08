// Define answerKey object
function defineanswerKeyObject() {
    answerKey = {
        "https://i.postimg.cc/15d5F4NG/csptest.jpg": 0,
        "https://i.postimg.cc/nhkXW02q/cspimage1.jpg": 1,
        "https://i.postimg.cc/nzsMCZJ1/cspimage2.jpg": 2,
        "https://i.postimg.cc/XqdJk8XG/cspimage3.jpg": 3,
        "https://i.postimg.cc/dtcDtzS8/cspimage4.jpg": 4,
        "https://i.postimg.cc/7LZ5r0td/cspimage5.jpg": 5,
        "https://i.postimg.cc/wT5Mt0Sn/cspimage6.jpg": 6,
        "https://i.postimg.cc/Y2Wh7p8r/cspimage7.jpg": 7,
        "https://i.postimg.cc/CxF1bb05/cspimage8.jpg": 8,
        "https://i.postimg.cc/cHVC3j1G/cspimage9.jpg": 9,
        "https://i.postimg.cc/YSDhr0J9/cspimage10.jpg": 10,
        "https://i.postimg.cc/pLqdCyVZ/cspimage11.jpg": 11,
        "https://i.postimg.cc/jj1SV97n/cspimage12.jpg": 12,
        "https://i.postimg.cc/XvqYz3p0/cspimage13.jpg": 13,
        "https://i.postimg.cc/NMrfQ46J/cspimage14.jpg": 14,
        "https://i.postimg.cc/fynWy95w/cspimage15.jpg": 15,
        "https://i.postimg.cc/PJWXw5F1/cspimage16.jpg": 16,
        "https://i.postimg.cc/XNd7hs7X/cspimage17.jpg": 17,
        "https://i.postimg.cc/ncxctqC2/cspimage18.jpg": 18,
        "https://i.postimg.cc/BQCZZtF0/cspimage19.jpg": 19,
        "https://i.postimg.cc/YSvtx3sr/cspimage20.jpg": 20,
        "https://i.postimg.cc/Qdx8FsgW/cspimage21.jpg": 21,
        "https://i.postimg.cc/NjJgTVbC/cspimage22.jpg": 22,
        "https://i.postimg.cc/k5LqYb0x/cspimage23.jpg": 23,
        "https://i.postimg.cc/pT8xwdv3/cspimage24.jpg": 24,
        "https://i.postimg.cc/5yV1bMNy/cspimage25.jpg": 25,
        "https://i.postimg.cc/BbB3vwXg/cspimage26.jpg": 26,
        "https://i.postimg.cc/Dfrn5mBX/cspimage27.jpg": 27,
        "https://i.postimg.cc/gkGd7dTB/cspimage28.jpg": 28,
        "https://i.postimg.cc/dV1Fq6v2/cspimage29.jpg": 29,
        "https://i.postimg.cc/GhzrwV03/cspimage30.jpg": 30,
        "https://i.postimg.cc/pL6HyjXg/cspimage31.jpg": 31
    }
}

// Check quiz answers and output score
function checkQuiz() {
    // Ensures that answerKey is defined
    if (typeof answerKey === 'undefined') {
    defineanswerKeyObject();
    }

    // Define counters
    var correctAnswers = 0;
    var wrongAnswers = 0;

    // Check Question 1
    // Get the user's answer
    var q1Answer = document.getElementById("q1").value;

    // Finds the correct answer based on the link of the image in the question and a dictionary
    var imageQuestion1Link = document.getElementById("imageq1").src;
        // var imageQuestionLinkWithQuotes = `"${imageQuestionLink}"`; // no need to add quotes
    var questionAnswer1 = answerKey[imageQuestion1Link];

    // Add 1 to correctAnswers if answer matches, add 1 to wrongAnswers if answer doesn't match
    if (q1Answer == questionAnswer1) {
        correctAnswers += 1;
    }
    else {
        wrongAnswers += 1;
    }

    // Check Question 2
    var q2Answer = document.getElementById("q2").value;
    var imageQuestion2Link = document.getElementById("imageq2").src;
    var questionAnswer2 = answerKey[imageQuestion2Link];
    if (q2Answer == questionAnswer2) {
        correctAnswers += 1;
    }
    else {
        wrongAnswers += 1;
    }

    // Check Question 3
    var q3Answer = document.getElementById("q3").value;
    var imageQuestion3Link = document.getElementById("imageq3").src;
    var questionAnswer3 = answerKey[imageQuestion3Link];
    if (q3Answer == questionAnswer3) {
        correctAnswers += 1;
    }
    else {
        wrongAnswers += 1;
    }

    // Check Question 4
    var q4Answer = document.getElementById("q4").value;
    var imageQuestion4Link = document.getElementById("imageq4").src;
    var questionAnswer4 = answerKey[imageQuestion4Link];
    if (q4Answer == questionAnswer4) {
        correctAnswers += 1;
    }
    else {
        wrongAnswers += 1;
    }

    // Output result
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "You got " + correctAnswers + " correct and " + wrongAnswers + " wrong.";
}