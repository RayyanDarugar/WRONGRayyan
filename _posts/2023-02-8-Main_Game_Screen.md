---
permalink: gamescreen
---

<img src="https://i.postimg.cc/MKSYj4dq/image.png" alt="Game Screen" usemap="#gameMap">

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
      width: 900px;
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
  <title>Black Box with White Input</title>
</head>
<body>
  <div class="black-box">
    <h2>text</h2>
    <input type="text" class="white-input" placeholder="Type here..." id="playerinput">
    <button onclick="sendInput">TEST</button>
  </div>


</body>
<script>
    function sendInput(input) {
         input = document.getElementById("playerinput");
         inputValue = input.value
        console.log(inputValue)
    }
    
</script>
</html>
