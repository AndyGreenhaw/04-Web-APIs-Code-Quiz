// SET BODY //
var body = document.body;

// ALL GLOBAL ELEMENTS //
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var buttonEl = document.createElement("button");
var pTag = document.createElement("p");
var olEl = document.createElement("ol");
var liEl = document.createElement("li");
var formEl = document.createElement("form");
var answerButton = document.createElement("button");
var tryAgain = document.createElement("button")
var correctText = document.createElement("h3");
var incorrectText = document.createElement("h3");
var failText = document.createElement("h4");
var failSubText = document.createElement("h5");
var successDisplay = document.createElement("h4");
var timerDisplay = document.createElement("p");
var score = 60;
var counter = 60;
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

var questionArray = [question1, question2, question4, question5];

// TIMER FUNCTION //

    //var counter = 60;
    //var startCountdown;
       /* var counter = setInterval(function() {
            console.log(counter);
            counter--;
        
            if (counter <= 0){
                counter = 0;
                failure();
            };
            }, 1000)
        */


////////////////
// QUIZ STARTS //
////////////////

startQuiz();

function startQuiz (){
    // Clear Old Content in Case This Is User's 'Try Again'//
    headlineID.innerHTML="";
    contentID.innerHTML="";
    buttonsID.innerHTML="";
    resultID.innerHTML="";
    timerID.innerHTML="";

    // Starting Text Content and Button
    h1El.textContent = "Welcome to my quiz!";
    h2El.textContent = "Push the Start Button to start the quiz, and try to answer the questions within the time limit. Keep in mind, any question you answer wrong will penalize your score time by ten seconds.";
    buttonEl.textContent = "Start Quiz";

    // Append Starting Text Content and Button Into Elements 
    headlineID.appendChild(h1El);
    contentID.appendChild(h2El);
    contentID.appendChild(pTag);
    pTag.appendChild(buttonEl);

    // Click Button to Start First Question
    buttonEl.addEventListener("click", displayQuestion);

    // Start Timer After Clicking Button //
    buttonEl.addEventListener("click", function() {
        
        // Countdown Function //
        startCountdown  = setInterval(() => {
            counter--;
            //console.log("TIMER: " + counter);
            // console.log("TIMER StartCountdown Var: " + startCountdown);
        
            if (counter <= 0){
                counter = 0;
                failure();
            };
            }, 1000); 

        score = counter;
        console.log("SCORE: " + score)

    });

};

//////////////////////////////////////////////////////////
// QUESTIONS DISPLAY 
//////////////////////////////////////////////////////////

function displayQuestion(e){
    //e.preventDefault();

    //Clear Old Content//
    buttonEl.setAttribute("style", "display:none;");

    //After User Completes Last Question, Take Them to Success Page//
    if (questionInx >= questionArray.length){
        successPage();
    } else {

        // Cycles Through Question Objects
        var currentQuestion = questionArray[questionInx]
        console.log("INX DISPLAY CODE" + questionInx)
        console.log(currentQuestion)

        // Populates Headline/Question from each Question Object
        h1El.textContent = currentQuestion.headline;
        h2El.textContent = currentQuestion.question;        
        //console.log("INX" + questionInx);
        //console.log("H1" +  h1El.textContent);
        //console.log("H2" +  h2El.textContent);

        //Clear Old Buttons to Make Way for New//
        pTag.innerHTML="";

        //Loop New Buttons on Current Question//
        for(var i = 0; i < currentQuestion.possibleAnswers.length; i++){

            answerButton = document.createElement("button");
            answerButton.textContent = currentQuestion.possibleAnswers[i];
            buttonsID.appendChild(pTag);
            pTag.appendChild(answerButton);
            answerButton.setAttribute("value", currentQuestion.possibleAnswers[i]);
            
            //Console Logging the Loop//
            // console.log("LOOP" + answerButton.textContent);
        };
    };
    
    //User Chooses Answer//
    buttonsID.addEventListener("click", function(e){
    //e.preventDefault();
        
        if( e.target.matches("button") ){
            var humanAnswer = e.target.getAttribute("value");
    
            // If Correct, Log As Correct //
            if (humanAnswer === currentQuestion.correctAnswer) {
                console.log("CORRECT")
                correctAnswer();
            // If Incorrect, Log As Incorrect //
            } else if (humanAnswer !== currentQuestion.correctAnswer){
                console.log("INCORRECT")
                incorrectAnswer();
            };
            // console.log(humanAnswer);
            //  console.log(currentQuestion);
            
        };
    
    });
    
};

//////////////////////////////
// RIGHT OR WRONG FUNCTIONS //
//////////////////////////////

// CORRECT ANSWER FUNCTION //

function correctAnswer(){
    //console.log("CORRECT ANSWER ")

    //Clear Old Content
    resultID.innerHTML="";
    
    // Message: Incorrect Below Content - Fades Off.
    var opacity = 100;
    correctText.textContent = "CORRECT!";
    resultID.appendChild(correctText);
    correctText.setAttribute("style", "opacity:" + opacity)
    
    // Clear "Correct" Message After 1 Second
    setTimeout(function(){
        correctText.textContent = null;
    }, 1000);

    //Add 1 to Question Index to Set Up Next Loop
    questionInx++;
    //console.log("INX CORRECT FUNC" + questionInx)

    // Activate Next Question
    displayQuestion();

};

// INCORRECT ANSWER FUNCTION //

function incorrectAnswer(){
    //console.log("INCORRECT ANSWER ")

    //CLear Old Content
    result.innerHTML="";

    // Message: Incorrect Below Content - Fades Off
    incorrectText.textContent = "INCORRECT!";
    resultID.appendChild(incorrectText);
    
    // Clear "Incorrect" Message After 1 Second
    setTimeout(function(){
        incorrectText.textContent = null;
    }, 1000);

    // Subtract 10 Seconds from Score
    counter = (counter-10);

    // Add 1 to Question Index for Next Loop
    questionInx++;
    console.log("INX INCORRECT FUNC" + questionInx)
    
    // Activate Next Question
    displayQuestion();
    
};

//////////////////////////////////////////////////////////
// SUCCESS PAGE //
//////////////////////////////////////////////////////////

function successPage(){

    // Stops Clock and Records Final Score
    finalScore = counter;
    console.log(finalScore);
    clearTimeout(startCountdown);

    // Clears All Onscreen Content
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";

    // Page Design and Message: Tells User to Record Score
    body.setAttribute("style", "background-color: green");
    contentID.appendChild(formEl);
    successDisplay.textContent = "RECORD YOUR SCORE!";
    successDisplay.setAttribute("style", "color:white;");

    // Enter Name
    formEl.appendChild(successDisplay);
    console.log("Made it");
};

//////////////////////////////////////////////////////////
// FAILURE PAGE //
//////////////////////////////////////////////////////////
function failure() {
    
    // Stops Clock//
    clearTimeout(startCountdown);

    // Clear All Elements//
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";

    // Page Design and Message: Asks to Try Again
    failText.textContent = "YOU FAILED!";
    failSubText.textContent = "Sorry, but you ran out of time.";
    tryAgain.textContent = "Try Again?";
    body.setAttribute("style", "background-color:red;")
    contentID.appendChild(failText);
    contentID.appendChild(failSubText);
    resultID.appendChild(pTag)
    pTag.appendChild(tryAgain);
    pTag.setAttribute("style", "text-align: center");

    // Button: Try Again
    resultID.addEventListener("click", function(e){
        startQuiz()
    });
};
    












