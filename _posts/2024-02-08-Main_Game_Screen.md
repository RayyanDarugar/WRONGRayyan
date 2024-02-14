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
</head>

<body>
    <img id="map" src="https://i.postimg.cc/x1YqnQJZ/MapPos1.jpg" alt="Game Screen" usemap="#gameMap">
    <div class="black-box">
        <!-- Ex: You are currently at point 1 on the map. You can move to the points 2, 3. Please input the number of the point you would like to move to. -->
        <!-- "1", "2, 3" needs to change + "move" should be able to change to "move or attack" + add text saying there's an enemy 1 step away from you -->
        <h2 id="boxtext">You are currently at point <span id="currentposition"></span> on the map. <span id="enemyalert"></span>You can <span id="actions"></span> the points <span id="possibleactionpositions"></span>. Please input the number of the point you would like to act on in the respective action box.</h2>
        <input type="number" min="1" max="9" class="white-input" placeholder="Type here..." id="playerinputmove">
        <button onclick="movement()">Move</button><br>
        <input type="number" min="1" max="9" class="white-input" placeholder="Type here..." id="playerinputattack">
        <button onclick="attack()">Attack</button>
    </div>
</body>

<script>
    // Define function to calculate damage
    function calculateDamage(health) {
      //
    }
    
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

    // Define function to check if a number is in one of the possible actions
    var enemyposition = 9;
    var enemyspot = possibleActionPositions[enemyposition]
    function checkPosition(number, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
          document.getElementById("enemyalert").textContent = "The enemy is one step away from you! ";
          document.getElementById("actions").textContent = "move to or attack";
          return;
        }
        else {
          document.getElementById("enemyalert").textContent = "";
          document.getElementById("actions").textContent = "move to";
        }
      }
    };
    checkPosition(position, enemyspot);

    // Function to pick a random number from 1 to max, and this is how to decide what the enemy is going to do and where
    function enemychoice(max) {
      var randomnumber = Math.random();
      var scalednumber = randomnumber * max;
      var endnumber = Math.floor(scalednumber) + 1;
      return endnumber;
    };

    // Function to pick a random number from an inputted array
    function enemychoice2(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      var moveposition = array[randomIndex];
      return moveposition;
    };

    // Define function for enemy movement
    function enemymove() {
      var moveposition = enemychoice2(enemyspot);
      while (moveposition === position) {
        enemychoice2(possiblemoveposition)
      }
      enemyposition = moveposition;
      enemyspot = possibleActionPositions[enemyposition]
      console.log(enemyposition);
    };
        
    // Define function for AI attack
    function enemyattack() {
      var attackposition = enemychoice2(enemyspot);
      if (attackposition = position) {
        // code for when player gets hit
      }
    };

    // Define function for player movement
    function movement() {
      // Set inputValue to the number entered
      inputmovement = document.getElementById("playerinputmove");
      inputValue = inputmovement.value;
      possiblemoves = possibleActionPositions[position];
      for (var i = 0; i < possiblemoves.length; i++) {
        if (possiblemoves[i] == inputValue) {
          // Set number entered as new postion and update text for current position, the possible places to act on, and map
          position = inputValue
          document.getElementById("currentposition").textContent = position;
          document.getElementById("possibleactionpositions").textContent = possibleActionPositions[position];
          var map = document.getElementById("map")
          map.src = mapImages[position]
          // Enemy act
          var choice = enemychoice(2)
          if (choice == 1) {
            enemymove()
          }
          else if (choice == 2) {
            enemyattack()
          }
          // Check positions
          checkPosition(position, enemyspot)
          return;
        }
      }
      alert("Invalid number!")
    }

    // Define function for player attack
</script>
