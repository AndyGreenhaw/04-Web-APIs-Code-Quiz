// SET BODY //
var body = document.body;

// ELEMENTS //
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var buttonEl = document.createElement("button");
var pTag = document.createElement("p");
var correctText = document.createElement("h3");
var incorrectText = document.createElement("h3");
var score = 0;
var count = 60;
var questionInx = 0;

// TEXT //
buttonEl.textContent = "Start Quiz";
correctText.textContent = "CORRECT!";
incorrectText.textContent = "INCORRECT!";

// PRIMARY ELEMENT IDS //
var headlineID = document.getElementById("headline");
var contentID = document.getElementById("content");
var buttonsID = document.getElementById("buttons");
var resultID = document.getElementById("result");

// QUESTION OBJECTS //

var question1 = {
    headline : "Question 1",
    question : "How many legs does a dog have?",
    possibleAnswers : [
        "One", 
        "Two",
        "Three",
        "Four"
    ],
    correctAnswer : "Four",
};

var question2 = {
    headline : "Question 2",
    question : "How many legs does a dog have?",
    possibleAnswers : [
        "One", 
        "Two",
        "Three",
        "Four"
    ],
    correctAnswer : "Four",
};

var question3 = {
    headline : "Question 3",
    question : "How many legs does a dog have?",
    possibleAnswers : [
        "One", 
        "Two",
        "Three",
        "Four"
    ],
    correctAnswer : "Four",
};

var question4 = {
    headline : "Question 4",
    question : "How many legs does a dog have?",
    possibleAnswers : [
        "One", 
        "Two",
        "Three",
        "Four"
    ],
    correctAnswer : "Four",
};

var question5 = {
    headline : "Question 5",
    question : "How many legs does a dog have?",
    possibleAnswers : [
        "One", 
        "Two",
        "Three",
        "Four"
    ],
    correctAnswer : "Four",
};

//QUESTION ARRAY 

var questionArray = [question1, question2, question3, question4, question5];

// RIGHT OR WRONG FUNCTIONS //

function correctAnswer(){
    body.appendChild(correctText);
    score = (score + 1);
    };
    
function incorrectAnswer(){
    body.appendChild(incorrectText);
    count = (count-10);  
    };

////////////////
// QUIZ STARTS //
////////////////

startQuiz();

function startQuiz (){

    h1El.textContent = "Welcome to my quiz!";
    h2El.textContent = "Push the Start Button to start the quiz, and try to answer the questions within the time limit. Keep in mind, any question you answer wrong will penalize your score time by ten seconds.";

    // Append Starter Elements //
    headlineID.appendChild(h1El);
    console.log(h2El);
    contentID.appendChild(h2El);
    contentID.appendChild(pTag);
    pTag.appendChild(buttonEl);

    buttonEl.addEventListener(displayQuestion);

};

    // display question - CHeck
    //loop through answers
    //create a button
    //put text on the button
    // put something on that button that says whether it's true or not

//////////////////////////////////////////////////////////
// QUESTIONS DISPLAY 
//////////////////////////////////////////////////////////

function displayQuestion(e){
    e.preventDefault();

    var currentQuestion = questionArray[questionInx]

    //Remove Start Button//
    buttonEl.setAttribute("style", "display:none;");

    //Add Headline and Question//
    h1El.textContent = currentQuestion.headline;
    h2El.textContent = currentQuestion.question;
    
    //Build Loop to Set Up Possible Answers//
    //Loop Through All ANswers and Create BUtton for Each//
    
    for(var i = 0; i < currentQuestion.possibleAnswers.length; i++){
        
        var answerButton = document.createElement("button");
        answerButton.textContent = currentQuestion.possibleAnswers[i];
        buttonsID.appendChild(pTag);
        pTag.appendChild(answerButton);
        answerButton.setAttribute("value", currentQuestion.possibleAnswers[i])

    };
};

buttonsID.addEventListener("click", function(e){
    e.preventDefault();
    if( e.target.matches("button") ){
        console.log(e.target.getAttribute("value"));
        // compare button value to correct answer
    }
})

    // Loop through answers - Complete
    
    
    // event listener that covers all the buttons
    // is the button clicked correct or not
    // if correct - correct answer function
        // Incremenent Index Value
        // Call Display QUestion
    // if incorrect - incorrect function 
        // Incremenent Index Value
        // Call Display QUestion
    












