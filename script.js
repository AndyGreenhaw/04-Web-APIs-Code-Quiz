// SET BODY //
var body = document.body;

// ELEMENTS //
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var buttonEl = document.createElement("button");
var pTag = document.createElement("p");
var answerButton = document.createElement("button");
var correctText = document.createElement("h3");
var incorrectText = document.createElement("h3");
var failText = document.createElement("h1");
var successDisplay = document.createElement("h1");
var timerDisplay = document.createElement("p");
var score = 0;
var count = 60;
var questionInx = 0;

// PRIMARY ELEMENT IDS //
var headlineID = document.getElementById("headline");
var contentID = document.getElementById("content");
var buttonsID = document.getElementById("buttons");
var resultID = document.getElementById("result");
var timerID = document.getElementById("timer");

// QUESTION OBJECTS //

var question1 = {
    headline : "Question 1",
    question : "What year was JavasScript invented?",
    possibleAnswers : [
        "1986", 
        "1995",
        "1972",
        "2020",
        "2001"
    ],
    correctAnswer : "1995"
};

var question2 = {
    headline : "Question 2",
    question : "What does CSS stand for?",
    possibleAnswers : [
        "Cold Syrup Sausages", 
        "Computer Styling Software",
        "Cascading Style Sheets",
        "Collaborative Sornaculation Systems",
        "Coordinated Snorkeling Smurfs"
    ],
    correctAnswer : "Cascading Style Sheets"
};


var question3 = {
    headline : "Question 3",
    question : "Which of these ways is the correct way to call a function?",
    possibleAnswers : [
        "Function()", 
        "()Function",
        ".Function",
        "#Function",
        "Funk()"
    ],
    correctAnswer : "Function()"
};

var question4 = {
    headline : "Question 4",
    question : "How do you add 1 to a variable in a loop?",
    possibleAnswers : [
        "Variable++", 
        "Variable+",
        "Variable+1",
        "Variable(+1)",
        "Variable(1)"
    ],
    correctAnswer : "Variable++"
};

var question5 = {
    headline : "Question 5",
    question : "What does HTML stand for?",
    possibleAnswers : [
        "Hyperactive Text Management Language", 
        "Hypnotic Techno Music Lounge",
        "Hungry Tigers Mourning Larry",
        "Hypertext Markup Language",
        "Hypertext Monkey Language"
    ],
    correctAnswer : "Hypertext Markup Language"
};

//QUESTION ARRAY 

var questionArray = [question1, question2, question3, question4, question5];

// TIMER FUNCTION //
var counter = 60;

function startCountdown(seconds){

    const interval = setInterval(() => {
    
    console.log(counter);
    counter--;

    if (counter < 1){
        counter = 0;
        failure();
    };

    }, 1000);

};

// FAILURE PAGE //
function failure() {
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";
    failText.textContent = "YOU FAILED!";
    failText.setAttribute("style", "color:red;")
    contentID.appendChild(failText);
}

// SUCCESS PAGE //
function success(){
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";
    successDisplay.textContent = "YOU WIN!";
    successDisplay.setAttribute("style", "color:green;")
    contentID.appendChild(successDisplay);
    console.log("Made it");
};

// RIGHT OR WRONG FUNCTIONS //

function correctAnswer(){
    resultID.innerHTML="";
    correctText.textContent = "CORRECT!";
    resultID.appendChild(correctText);
    questionInx++

    if (questionInx > 4){
        successDisplay();

    } else {
        displayQuestion();
    }

};
    
function incorrectAnswer(){
    result.innerHTML="";
    incorrectText.textContent = "INCORRECT!";
    resultID.appendChild(incorrectText);
    counter = (counter-10);  
    questionInx++

    displayQuestion();
};

////////////////
// QUIZ STARTS //
////////////////

startQuiz();

function startQuiz (){

    h1El.textContent = "Welcome to my quiz!";
    h2El.textContent = "Push the Start Button to start the quiz, and try to answer the questions within the time limit. Keep in mind, any question you answer wrong will penalize your score time by ten seconds.";
    buttonEl.textContent = "Start Quiz";

    // Append Starter Elements //
    headlineID.appendChild(h1El);
    console.log(h2El);
    contentID.appendChild(h2El);
    contentID.appendChild(pTag);
    pTag.appendChild(buttonEl);

    buttonEl.addEventListener("click", displayQuestion);
    buttonEl.addEventListener("click", startCountdown);

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
    //e.preventDefault();

    var currentQuestion = questionArray[questionInx]

    //Remove Start Button//
    buttonEl.setAttribute("style", "display:none;");

    //Add Headline and Question//
    h1El.textContent = currentQuestion.headline;
    h2El.textContent = currentQuestion.question;
    
    //Build Loop to Set Up Possible Answers//
    //Loop Through All ANswers and Create BUtton for Each//
    //answerButton.innerHTML = "";
    console.log("INX" + questionInx);
    console.log("H1" +  h1El.textContent);
    console.log("H2" +  h2El.textContent);
    pTag.innerHTML="";

    for(var i = 0; i < currentQuestion.possibleAnswers.length; i++){

        answerButton = document.createElement("button");
        answerButton.textContent = currentQuestion.possibleAnswers[i];
        buttonsID.appendChild(pTag);
        pTag.appendChild(answerButton);
        answerButton.setAttribute("value", currentQuestion.possibleAnswers[i])

        console.log("LOOP" + answerButton.textContent);

    };

    console.log("LOOP" + answerButton.textContent);

    buttonsID.addEventListener("click", function(e){
        //e.preventDefault();
        
        if( e.target.matches("button") ){
            var humanAnswer = e.target.getAttribute("value");
    
            // compare button value to correct answer
            if (humanAnswer === currentQuestion.correctAnswer) {
                correctAnswer();
                
                
            } else if (humanAnswer !== currentQuestion.correctAnswer){
                incorrectAnswer();
            
            };

            console.log(e.target.getAttribute("value"));
            console.log(humanAnswer);
        }
    })
};

    // Loop through answers - Complete
    
    
    // event listener that covers all the buttons
    // is the button clicked correct or not
    // if correct - correct answer function
        // Incremenent Index Value
        // Call Display QUestion
    // if incorrect - incorrect function 
        // Incremenent Index Value
        // Call Display QUestion
    












