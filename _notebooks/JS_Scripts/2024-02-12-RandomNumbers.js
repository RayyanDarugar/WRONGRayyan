// Two choices (attack/move, two places to move) + outputs 1 or 2
function twochoices() {
    var number = Math.random();
    if (number > 0.5) {
        return 1;
    }
    else {
        return 2;
    }
}

// Three choices (three places to move) + outputs 1, 2, or 3
function threechoices() {
    var number = Math.random();
    if (number < 1/3) {
        return 1;
    }
    else if (number < 2/3 ) {
        return 2;
    }
    else {
        return 3;
    }
}

// Four choices (four places to move) + outputs 1, 2, 3, or 4
function fourchoices() {
    var number = Math.random();
    if (number < 1/4) {
        return 1;
    }
    else if (number < 2/4) {
        return 2;
    }
    else if (number < 3/4) {
        return 3;
    }
    else {
        return 4;
    }
}

// Six choices (six places to move) + outputs 1, 2, 3, 4, 5, or 6
function sixchoices() {
    var number = Math.random();
    if (number < 1/6) {
        return 1;
    }
    else if (number < 2/6) {
        return 2;
    }
    else if (number < 3/6) {
        return 3;
    }
    else if (number < 4/6) {
        return 4;
    }
    else if (number < 5/6){
        return 5;
    }
    else {
        return 6;
    }
}
    