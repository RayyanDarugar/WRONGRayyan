---
layout: post
title: Game Screen (Jason copy)
hide: true
description: Game screen (Jason's copy) page for JWT authentication
permalink: /gamescreen
---

<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .black-box {
            background-color: black;
            color: white;
            padding: 100px;
            border-radius: 10px;
            border: 2px solid white;
            text-align: left;
            width: 880px;
        }
        .white-input {
            background-color: white;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 30%;
            box-sizing: border-box; /* Include padding and border in the width calculation */
        }
    </style>
    <!-- <script src="{{site_baseurl}}/_notebooks/JS_Scripts/2024-02-12-RandomNumbers.js"></script>  not loading :(-->
</head>

<body>
    <img id="map" src="https://i.postimg.cc/x1YqnQJZ/MapPos1.jpg" alt="Game Screen" usemap="#gameMap">
    <div class="black-box">
        <!-- Ex: You are currently at point 1 on the map. You can move to the points 2, 3. Please input the number of the point you would like to move to. -->
        <!-- "1", "2, 3" needs to change + "move" should be able to change to "move or attack" + add text saying there's an enemy 1 step away from you -->
        <h2 id="boxtext">You are currently at point <span id="currentposition"></span> on the map. <span id="enemyalert"></span>You can <span id="actions"></span> to the points <span id="possibleactionpositions"></span>. Please input the number of the point you would like to act on in the respective action box.</h2>
        <input type="number" min="1" max="9" class="white-input" placeholder="Type here..." id="playerinputmove">
        <button onclick="movement()">Move</button><br>
        <input type="number" min="1" max="9" class="white-input" placeholder="Type here..." id="playerinputattack">
        <button onclick="action()">Attack</button>
    </div>
</body>

<script>
    // Define variable for initial position and update it in text
    var position = 1
    document.getElementById("currentposition").textContent = position;

    // Define object for the map images (MapPos1 means at point 1)
    var mapImages = {
        1: "https://i.postimg.cc/x1YqnQJZ/MapPos1.jpg",
        2: "https://i.postimg.cc/GmQtpfvm/MapPos2.jpg",
        3: "https://i.postimg.cc/SK1K6zT0/MapPos3.jpg",
        4: "https://i.postimg.cc/SKxsYGG7/MapPos4.jpg",
        5: "https://i.postimg.cc/ZYdqNn6g/MapPos5.jpg",
        6: "https://i.postimg.cc/rsxF2Z8c/MapPos6.jpg",
        7: "https://i.postimg.cc/RFjV8xxX/MapPos7.jpg",
        8: "https://i.postimg.cc/637pY5g8/MapPos8.jpg",
        9: "https://i.postimg.cc/dtcVjFB0/MapPos9.jpg"
    };

    // Define object for possible actions (movement and attack) depending on initial position and update it in text
    var possibleActionPositions = {
        1: [2, 3],
        2: [1, 3, 4, 5],
        3: [1, 2, 5, 6],
        4: [2, 5, 7],
        5: [2, 3, 4, 6, 7, 8],
        6: [3, 5, 8],
        7: [4, 5, 8, 9],
        8: [5, 6, 7, 9],
        9: [7, 8]
    }
    document.getElementById("possibleactionpositions").textContent = possibleActionPositions[position];

    // Check for enemy position and alert if needed
    var enemyposition = 9
    function checkPosition(number, arr) { // not working sadge
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === number) {
                console.log(arr)
                document.getElementById("enemyalert").textContent = "The enemy is one step away from you!";
                document.getElementById("actions").textContent = "move or attack";
                return;
            }
            else {
                document.getElementById("actions").textContent = "move";
                return;
            }
        }
    };
    checkPosition(enemyposition, possibleActionPositions[position])

    // Define function for AI movement

    // Define function for AI attack

    // Define function for player movement
    function movement() {
        // Set inputValue to the number entered
        inputmovement = document.getElementById("playerinputmove");
        inputValue = inputmovement.value
        // Set number entered as new postion and update text for current position, the possible places to act on, and map
        var position = inputValue
        document.getElementById("currentposition").textContent = position;
        document.getElementById("possibleactionpositions").textContent = possibleActionPositions[position];
        var map = document.getElementById("map")
        map.src = mapImages[position]
        // Check positions
        checkPosition(enemyposition, possibleActionPositions[position])
    }

    // Define function for player attack

</script>
</html>