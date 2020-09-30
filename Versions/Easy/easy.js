// Set Body
var body = document.body;

// Create Elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var buttonEl = document.createElement("button");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");
var correct = document.createElement("h3");
var incorrect = document.createElement("h3");

// Set Elements
h1El.textContent = "Welcome to my quiz!";
h2El.textContent = "Push the Start Button to start the quiz, and try to answer the questions within the time limit. Keep in mind, any question you answer wrong will penalize your score time by ten seconds.";
buttonEl.textContent = "Start Quiz";


// Append Elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(buttonEl);

// Style Elements
h1El.setAttribute("style", "font-family: arial; font-size: 48px; color:blue; margin-top: 20px; margin-bottom: 20px; text-align:center;");
h2El.setAttribute("style", "font-family: arial; font-size: 24px; margin-top: 20px; margin-bottom: 20px; text-align:center;");
buttonEl.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");


buttonEl.addEventListener("click", firstQuestion);

function firstQuestion(){

    buttonEl.setAttribute("style", "display:none;");

    h1El.textContent = question1.headline
    h2El.textContent = question1.question

    choice1.textContent = question1.possibleAnswers[0];
    body.appendChild(choice1);
    choice1.setAttribute("style", "color:white; background-color:blue;");
    choice1.addEventListener("click", function(){
        body.appendChild(incorrect)
    };

    choice2.textContent = question2.possibleAnswers[1];
    body.appendChild(choice2);
    choice2.setAttribute("style", "color:white; background-color:blue;");
    choice2.addEventListener("click", function(){
        body.appendChild(incorrect);
    };

    choice3.textContent = question3.possibleAnswers[2];
    body.appendChild(choice3);
    choice3.setAttribute("style", "color:white; background-color:blue;");
    choice3.addEventListener("click", function(){
        body.appendChild(incorrect);
    };

    choice4.textContent = question4.possibleAnswers[3];
    body.appendChild(choice4);
    choice4.setAttribute("style", "color:white; background-color:blue;");
    choice4.addEventListener("click", function(){
        body.appendChild(correct);
    };

};


// CREATE AN OBJECT WITH AN ARRAY OF HIGH SCORES

var allQuestions = [question1, question2, question3, question4, question5]

var question1 = {

    headline : "Question 1",
    question : "How many legs does a dog have?",
    correctAnswer : "Four",
    possibleAnswers : [
        "One",
        "Two",
        "Three",
        "Four"
    ]

};

var question2 = {

    question : "Cats or dogs?",
    correctAnswer : "correct",
    incorrectAnswers : [
        "incorrect1",
        "incorrect2",
        "incorrect3",
        "incorrect4"
    ]

};

var question3 = {

    question : "Cats or dogs?",
    correctAnswer : "correct",
    incorrectAnswers : [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ]

};

var question4 = {

    question : "Cats or dogs?",
    correctAnswer : "correct",
    incorrectAnswers : [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ]

};

var question5 = {

    question : "Cats or dogs?",
    correctAnswer : "correct",
    incorrectAnswers : [
        "answer1",
        "answer2",
        "answer3",
        "answer4"
    ]

};