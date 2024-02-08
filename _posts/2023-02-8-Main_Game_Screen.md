---
permalink: gamescreen
---
<!-- <img src="_notebooks/images/image.png" alt="Screenshot"> -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Image with Buttons</title>
    <style>
        /* Add some basic styling to make the areas visible */
        area {
            display: block;
            background-color: rgba(0, 0, 255, 0.3); /* Semi-transparent blue */
            cursor: pointer;
        }
    </style>
</head>
<body>

<img src="https://i.postimg.cc/MKSYj4dq/image.png" alt="Game Screen" usemap="#gameMap">

<map name="gameMap">
    <!-- Define areas for clickable regions -->
    <area shape="rect" coords="10,10,100,50" href="#1" alt="Button 1">
    <area shape="circle" coords="150,50,30" href="#2" alt="Button 2">
    <area shape="poly" coords="200,10,250,50,200,90" href="#3" alt="Button 3">
</map>

</body>
</html>
