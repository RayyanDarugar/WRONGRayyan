// Array for Images
// var imageArray = [
//     'images/image0.JPG',
//     'images/image1.JPG',
//     'images/image2.JPG',
//     'images/image3.JPG',
//     'images/image4.JPG',
//     'images/image5.JPG',
//     'images/image6.JPG',
//     'images/image7.JPG',
//     'images/image8.JPG',
//     'images/image9.JPG',
//     'images/image10.JPG',
//     'images/image11.JPG',
//     'images/image12.JPG',
//     'images/image13.JPG',
//     'images/image14.JPG',
//     'images/image15.JPG',
//     'images/image16.JPG',
//     'images/image17.JPG',
//     'images/image18.JPG',
//     'images/image19.JPG',
//     'images/image20.JPG',
//     'images/image21.JPG',
//     'images/image22.JPG',
//     'images/image23.JPG',
//     'images/image24.JPG',
//     'images/image25.JPG',
//     'images/image26.JPG',
//     'images/image27.JPG',
//     'images/image28.JPG',
//     'images/image29.JPG',
//     'images/image30.JPG',
//     'images/image31.JPG'
// ];

// below is testing
var imageArray = [
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'https://media.discordapp.net/attachments/851214581955297320/1174284467548995704/image.png?ex=656708a2&is=655493a2&hm=b33d947914ee42eb9ffaaa6ae5cd1a7d96a50f620a6077915a47eab937124e1f&=&width=802&height=597',
    'images/image13.JPG',
    'images/image14.JPG',
    'images/image15.JPG',
    'images/image16.JPG',
    'images/image17.JPG',
    'images/image18.JPG',
    'images/image19.JPG',
    'images/image20.JPG',
    'images/image21.JPG',
    'images/image22.JPG',
    'images/image23.JPG',
    'images/image24.JPG',
    'images/image25.JPG',
    'images/image26.JPG',
    'images/image27.JPG',
    'images/image28.JPG',
    'images/image29.JPG',
    'images/image30.JPG',
    'images/image31.JPG'
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