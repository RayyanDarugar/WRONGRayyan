// Array for Images
var imageArray = [
    'e/e/e/e/number.jpg',
    'e/e/e/e/number.jpg',
    'e/e/e/e/number.jpg',
    'e/e/e/e/number.jpg',
    'e/e/e/e/number.jpg',
    'e/e/e/e/number.jpg',
    'e/e/e/e/number.jpg',
    // add more if needed, but im guessing 32?
];

// Function to set put random images from image array into question
function randomImage() {
    // Set random image for question 1
    var randomIndex = Math.random(0,31);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq1').src = randomImage;

    // Set random image for question 2
    var randomIndex = Math.random(0,31);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq2').src = randomImage;

    // Set random image for question 3
    var randomIndex = Math.random(0,31);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq3').src = randomImage;

    // Set random image for question 4
    var randomIndex = Math.random(0,31);
    var randomImage = imageArray[randomIndex];
    document.getElementById('imageq4').src = randomImage;
} // note: redundant, so maybe try to find a way (maybe loop? and like concatenate strings with imageq + 1, 2, 3, 4) to make cleaner

randomImage();