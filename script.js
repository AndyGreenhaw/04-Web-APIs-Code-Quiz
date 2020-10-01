// SET BODY //
var body = document.body;

// ELEMENTS //
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var buttonEl = document.createElement("button");
var pTag = document.createElement("p");
var olEl = document.createElement("ol");
var liEl = document.createElement("li");
var answerButton = document.createElement("button");
var tryAgain = document.createElement("button")
var correctText = document.createElement("h3");
var incorrectText = document.createElement("h3");
var failText = document.createElement("h4");
var failSubText = document.createElement("h5");
var successDisplay = document.createElement("h4");
var timerDisplay = document.createElement("p");
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

var questionArray = [question1, question2, question3, question4, question5]

// TIMER FUNCTION //
var counter = 60;

function startCountdown(seconds){

    setInterval(() => {
    console.log(counter);
    counter--;

    if (counter <= 0){
        counter = 0;
        failure();
    };
    }, 1000);

};

////////////////
// QUIZ STARTS //
////////////////

startQuiz();

function startQuiz (){
    //Clear Old Content for Try Again//
    headlineID.innerHTML="";
    contentID.innerHTML="";
    buttonsID.innerHTML="";
    resultID.innerHTML="";
    timerID.innerHTML="";

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

//////////////////////////////////////////////////////////
// QUESTIONS DISPLAY 
//////////////////////////////////////////////////////////

function displayQuestion(e){
    //e.preventDefault();

    //Clear Old Content//
    buttonEl.setAttribute("style", "display:none;");

    //Populates Each Question//
    var currentQuestion = questionArray[questionInx]

    //After User Completes Last Question, Take Them to Success Page//
    if (questionInx > 4){
       successPage();
    } else {

    //Add Headline and Question//
    h1El.textContent = currentQuestion.headline;
    h2El.textContent = currentQuestion.question;
    
    //Console Logging QIndex, H1, and H2//
    console.log("INX" + questionInx);
    console.log("H1" +  h1El.textContent);
    console.log("H2" +  h2El.textContent);

    //Clear Old Buttons//
    pTag.innerHTML="";

        //Loop New Buttons on Current Question//
        for(var i = 0; i < currentQuestion.possibleAnswers.length; i++){

            answerButton = document.createElement("button");
            answerButton.textContent = currentQuestion.possibleAnswers[i];
            buttonsID.appendChild(pTag);
            pTag.appendChild(answerButton);
            answerButton.setAttribute("value", currentQuestion.possibleAnswers[i]);
            
            //Console Logging the Loop//
            console.log("LOOP" + answerButton.textContent);
        };
    
    //User Chooses Answer//
    buttonsID.addEventListener("click", function(e){
    //e.preventDefault();
        
        if( e.target.matches("button") ){
            var humanAnswer = e.target.getAttribute("value");
    
            // If Correct, Log As Correct //
            if (humanAnswer === currentQuestion.correctAnswer) {
                correctAnswer();
            // If Incorrect, Log As Correct //
            } else if (humanAnswer !== currentQuestion.correctAnswer){
                incorrectAnswer();
            };
        };
        
    });
    };
};

//////////////////////////////
// RIGHT OR WRONG FUNCTIONS //
//////////////////////////////

// Correct Answer Function //
function correctAnswer(){
    resultID.innerHTML="";
    correctText.textContent = "CORRECT!";
    resultID.appendChild(correctText);
    questionInx++;

    displayQuestion();

};

// Incorrect Answer Function //
function incorrectAnswer(){
    result.innerHTML="";
    incorrectText.textContent = "INCORRECT!";
    resultID.appendChild(incorrectText);
    counter = (counter-10);  
    questionInx++;

    displayQuestion();
    
};
//////////////////////////////////////////////////////////
// SUCCESS PAGE //
//////////////////////////////////////////////////////////
function successPage(){
    counter = 60;

    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";
    successDisplay.textContent = "RECORD YOUR SCORE!";
    successDisplay.setAttribute("style", "color:white;")
    contentID.appendChild(successDisplay);
    body.setAttribute("style", "background-color: green")
    console.log("Made it");
};

//////////////////////////////////////////////////////////
// FAILURE PAGE //
//////////////////////////////////////////////////////////
function failure() {
    counter = 0;

    //Clear All Elements//
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";

    //Failure Content//
    failText.textContent = "YOU FAILED!";
    failSubText.textContent = "Sorry, but you ran out of time.";
    tryAgain.textContent = "Try Again?";
    body.setAttribute("style", "background-color:red;")
    contentID.appendChild(failText);
    contentID.appendChild(failSubText);
    resultID.appendChild(pTag)
    pTag.appendChild(tryAgain);
    pTag.setAttribute("style", "text-align: center");

    resultID.addEventListener("click", function(e){
        startQuiz()
    });
};
    












