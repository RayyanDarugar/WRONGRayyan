---
toc: true
comments: true
title: Titanic - Do I Survive?
type: hacks
courses: { compsci: {week: 28} }
permalink: /titanic/
---

<html>
    <head>
        <title>Do You Survive Titanic?</title>
    </head>
    <body>
        <div class="container">
            <h1>Do You Survive Titanic?</h1>
            <form id="titanicForm"  >
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="pclass">Pclass (passenger class - 1, 2, or 3):</label>
                <input type="number" id="pclass" name="pclass"><br><br>
                <label for="sex">Sex:</label>
                <select id="sex" name="sex">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br><br>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age"><br><br>
                <label for="sibsp">SibSp (# of siblings on board or spouses):</label>
                <input type="number" id="sibsp" name="sibsp"><br><br>
                <label for="parch">Parch (# of parents on board):</label>
                <input type="number" id="parch" name="parch"><br><br>
                <label for="fare">Fare (cost of your ticket - $35 is average):</label>
                <input type="number" id="fare" name="fare" step="0.01"><br><br>
                <label for="embarked">Embarked (Location - Southampton, Queenstown, Cherbourg):</label>
                <select id="embarked" name="embarked">
                    <option value="S">S</option>
                    <option value="C">C</option>
                    <option value="Q">Q</option>
                </select><br><br>
                <label for="alone">Alone (Check NO if parents on sibs on board):</label>
                <select id="alone" name="alone">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select><br><br>
                <button type="submit" class="btn btn-primary">Predict</button>
            </form>
            <div id="result"></div>
        </div>
        <script>
            // uri variable and options object are obtained from config.js
        //    import { uri, options } from '{{site.baseurl}}/assets/js/api/config.js';
            // Get the modal
            document.getElementById('titanicForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const form = event.target;
                var formData = {
                    'name': document.getElementById('name').value,
                    'pclass': parseInt(document.getElementById('pclass').value),
                    'sex': document.getElementById('sex').value,
                    'age': parseInt(document.getElementById('age').value),
                    'sibsp': parseInt(document.getElementById('sibsp').value),
                    'parch': parseInt(document.getElementById('parch').value),
                    'fare': parseFloat(document.getElementById('fare').value),
                    'embarked': document.getElementById('embarked').value,
                    'alone': (document.getElementById('alone').value === 'true')
                };
            const url = 'http://127.0.0.1:8086/api/titanic/';
                // Change options according to Authentication requirements
            const authOptions = {
                method: 'POST', // Override the method property
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'include', // include, same-origin, omit
                headers: {
                'Content-Type': 'application/json',
                },
                body:  JSON.stringify(formData),
            };
                fetch(url, authOptions)
                .then(response => response.json())
                .then(data => {
                        // Create a text node with the death probability
                    // var textNode = document.createTextNode("Here's your chance of death: " + data.death_probability);
                    // // Clear any existing content in the result div
                    // document.getElementById('result').innerHTML = '';
                    // // Append the text node to the result div
                    // document.getElementById('result').appendChild(textNode);
                    // // Predict and Display Prediction result
                    // // var probability = (data * 100).toFixed(2) + '%'
                    // document.getElementById('result').innerHTML = "Here's your chance of death: " + data.death_probability;
                    document.getElementById('result').innerHTML = 'Your Probability of Death is = '+ data.death_probability;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            });
        </script>
    </body>
</html>