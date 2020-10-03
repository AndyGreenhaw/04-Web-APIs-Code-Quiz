//////////////////////////
// ALL GLOBAL VARIABLES //
//////////////////////////

// OPENING ELEMENTS //
var startButtonEl = document.createElement("button"); //ANSWER BUTTONS
var buttonEl = document.createElement("button"); // ....ANSWER BUTTONS
var h1El = document.createElement("h1"); //.............HEADLINES
var h2El = document.createElement("h2"); //.............QUESTIONS/CONTENT
var body = document.body; //............................<BODY>
var pTagStart = document.createElement("p"); //.........<P> TAG at Start

// QUESTION/ANSWER ELEMENTS
var currentQuestion; //.................................CURRENT QUESTION
var answerButton = document.createElement("button"); // POSSIBLE ANSWER BUTTONS
var humanAnswer; //.....................................HUMAN ANSWER
var correctText = document.createElement("h3"); //......CORRECT ANSWER 
var incorrectText = document.createElement("h3"); //....INCORRECT ANSWERS
var questionInx = 30; //.................................QUESTION INDEX NUMBER
var pTag = document.createElement("p"); //..............<P> TAG

// TIME/SCORE ELEMENTS
var startTimer; //......................................TIMER FUNCTION HOLDER
var timerEl = document.createElement("p"); //...........TIMER ELEMENT
var counter; //....................................TIMER COUNT
var score; //......................................DISPLAYED SCORE
var scoreDisplay //.....................................DISPLAYED SCORE

// COMPLETION CONTENT
var successDisplay = document.createElement("h4"); //...COMPLETION HEADLINE
var successSubtext = document.createElement("h5"); //...COMPLETION SUBHEAD
var formEl = document.createElement("form"); //.........FORM ELEMENT
var inputEl = document.createElement("input"); //.......FORM ELEMENT
var formButton = document.createElement("button"); //...FORM BUTTON

// FAILURE CONTENT
var failText = document.createElement("h4"); //.........FAILURE HEADLINE
var failSubText = document.createElement("h5"); //......FAILURE SUBTEXT
var tryAgain = document.createElement("button") //......TRY AGAIN BUTTON
var aLink = document.createElement("a"); //.............<a></a>

// PRIMARY ELEMENT IDS //
var headlineID = document.getElementById("headline"); //HEADLINE ID
var contentID = document.getElementById("content"); //..CONTENT ID
var buttonsID = document.getElementById("buttons"); //..BUTTONS ID
var resultID = document.getElementById("result"); //....RESULT ID
var timerID = document.getElementById("timer"); //......TIMER ID

//////////////////////
// QUESTION OBJECTS //
//////////////////////

var question1 = {
    headline : "Question 1",
    question : "What year was JavasScript invented?",
    possibleAnswers : [
        "1986", 
        "1995",
        "1972",
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
    ],
    correctAnswer : "Variable++"
};

var question5 = {
    headline : "Question 5",
    question : "What does HTML stand for?",
    possibleAnswers : [
        "Hypnotic Techno Music Lounge",
        "Hungry Tigers Mourning Larry",
        "Hypertext Markup Language",
        "Hypertext Monkey Language"
    ],
    correctAnswer : "Hypertext Markup Language"
};

////////////////
//QUESTION ARRAY 
////////////////

var questionArray = [question1, question2, question3, question4, question5];

/////////////////
// QUIZ STARTS //
/////////////////
startQuiz();

//function quizStart(){
function startQuiz(){

// Clear Previous Content
headlineID.innerHTML=""
contentID.innerHTML=""
buttonsID.innerHTML=""
resultID.innerHTML=""
timerID.innerHTML=""
body.setAttribute("style", "background-color: white");

// Resets Previous Scores
i=0;
counter=30;
questionInx=0;

// Displays Starting Score
displayScore()

// Starting Text Content and Button
h1El.textContent = "The Hardest Quiz on Earth";
h2El.textContent = "Click 'Start Quiz' and try to answer the questions within the time limit. Any question you answer wrong will penalize you by 5 seconds.";
startButtonEl.textContent = "Start Quiz";

// Load Starting Text and Button Into Elements 
headlineID.appendChild(h1El);
contentID.appendChild(h2El);
contentID.appendChild(pTagStart);
pTagStart.appendChild(startButtonEl);

// Starts First Question AAfter Clicking Start Button
startButtonEl.addEventListener("click", displayQuestion);

// Starts Timer Countdown After Clicking Start Button //
startButtonEl.addEventListener("click", startTimer);

};

////////////////////
// TIMER ELEMENTS //
////////////////////

// TIMER FUNCTION

function startTimer() {
    counter = 30
    interval = setInterval(function() {
        counter--;

        //Activates Countdown in Timer Display Function
        displayScore()
        
        //If Countdown Reaches 0, Activate Failure Content
        if (counter <= 0) {
            clearInterval(interval);
            timerID.innerHTML="";
            failure();

    }}, 1000)
    
    return counter
};

// TIMER DISPLAY

function displayScore(){
    timerEl.textContent = counter;
    timerEl.setAttribute("style", "color:blue;")
    timerID.appendChild(timerEl);

    //If Countdown Reaches 0, Clear Timer Display
    if (counter <= 0) {
        timerID.innerHTML="";
        //pTag.setAttribute("style", "visibility:hidden")
    //When Timer Reaches 10, Change Font Color to Red
    } else if (counter < 4){
        timerEl.setAttribute("style", "color:red;")
    } 
    //timerEl.appendChild(counter);
};


//////////////////////////////////////////////////////////
// QUESTION DISPLAY 
//////////////////////////////////////////////////////////

function displayQuestion(){

    pTagStart.innerHTML=""
    
    //After User Completes Last Question, Activate Success Function//
    if (questionInx >= questionArray.length){
        successPage();
    
    //If Counter Reaches 0, Clear All Buttons// - NOT WORKING

    } else {
        
        // Cycles Through Question Objects
        currentQuestion = questionArray[questionInx]
        
        // Populates Headline/Question from each Question Object
        h1El.textContent = currentQuestion.headline;
        h2El.textContent = currentQuestion.question;        

        // Log Each Question # and Text
        console.log("QUESTION#: " + (questionInx+1))

        // Clear Old Buttons to Make Way for New//
        pTag.innerHTML="";
        buttonsID.appendChild(pTag);

        //pTag.setAttribute("style", "display:hidden")
        displayLoop()

    };     

};

// Loop New Buttons on Current Question//
function displayLoop(){

    for(var i = 0; i < currentQuestion.possibleAnswers.length; i++){
        answerButton = document.createElement("button");
        answerButton.textContent = currentQuestion.possibleAnswers[i];
        answerButton.setAttribute("value", currentQuestion.possibleAnswers[i]);
        pTag.appendChild(answerButton);
        
    };
};
    
//User Chooses Answer//
buttonsID.addEventListener("click", function(e){
//e.preventDefault();
    
    if( e.target.matches("button") ){
        humanAnswer = e.target.getAttribute("value");
        console.log("Human Answer :" + humanAnswer)
        console.log("Correct Answer :" + currentQuestion.correctAnswer)
        // If Correct, Log As Correct //
        if (humanAnswer === currentQuestion.correctAnswer) {
            correctAnswer();
            
        // If Incorrect, Log As Incorrect //
        } else if (humanAnswer !== currentQuestion.correctAnswer){
            incorrectAnswer();
        };
        
        // console.log(humanAnswer);
        //  console.log(currentQuestion);
        
    };

});

//////////////////////////////
// RIGHT OR WRONG FUNCTIONS //
//////////////////////////////

// CORRECT ANSWER FUNCTION //

function correctAnswer(){
    //console.log("CORRECT ANSWER ")

    //Clear Old Content
    resultID.innerHTML="";
    
    // Message: Incorrect Below Content - Fades Off.
    correctText.textContent = "CORRECT!";
    correctText.setAttribute("style", "color:green");
    resultID.appendChild(correctText);
    
    
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
    incorrectText.setAttribute("style", "color:white;")
    body.setAttribute("style", "background-color: orangered;")
    resultID.appendChild(incorrectText);
    
    // Clear "Incorrect" Message After 1 Second
    setTimeout(function(){
        incorrectText.textContent = null;
        body.setAttribute("style", "background-color: white;")
    }, 1000);

    // Subtract 10 Seconds from Score
    counter = (counter-5);

    // Add 1 to Question Index for Next Loop
    questionInx++;
    //console.log("INX INCORRECT FUNC" + questionInx)
    
    // Activate Next Question
    displayQuestion();
    
};

//////////////////////////////////////////////////////////
// SUCCESS PAGE //
//////////////////////////////////////////////////////////

function successPage(){

    // Stops Clock//
    clearTimeout(interval);

    // Records Final Score
    finalScore = counter;
    console.log("Final Score: " + finalScore);

    // Clears All Onscreen Content
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";

    // Textify Success Display Elements and Add Color
    successDisplay.textContent = "RECORD YOUR SCORE!";
    successDisplay.setAttribute("style", "color:white;");
    successSubtext.textContent = "Fill in Your Name!";
    successSubtext.setAttribute("style", "color:white;");

    // Change Background Color to Green and Timer Color to White
    body.setAttribute("style", "background-color: green");
    timerEl.setAttribute("style", "color:white;")

    // Load Success Headline and Subtext
    headlineID.appendChild(successDisplay);
    contentID.appendChild(successSubtext);

    // Load Form
    resultID.appendChild(formEl);
    formEl.appendChild(inputEl);
    inputEl.setAttribute("placeholder", "Andy Greenhaw");

    console.log("Made it");

    formButton

};

//////////////////////////////////////////////////////////
// FAILURE PAGE //
//////////////////////////////////////////////////////////
function failure(){
    
    // Stops Clock//
    clearTimeout(interval);

    // Stops Questions
    answerButton.setAttribute("style", "display:none");

    // Clear All Elements//
    headlineID.innerHTML = "";
    contentID.innerHTML = "";
    buttonsID.innerHTML = "";
    resultID.innerHTML = "";
    timerID.innerHTML = "";

    // Page Design and Message: Asks to Try Again
    failText.textContent = "YOU FAILED!";
    failSubText.textContent = "Sorry, but you ran out of time.";
    tryAgain.textContent = "Try Again?";
    body.setAttribute("style", "background-color:red;")

    //Load Text
    contentID.appendChild(failText);
    contentID.appendChild(failSubText);

    //Load Buttons
    resultID.appendChild(tryAgain);
    //tryAgain.appendChild(aLink);
    //aLink.setAttribute("href", "index.html");
    
    //Button: Try Again
    tryAgain.addEventListener("click", function(e){
    //body.innerHTML="";
    startQuiz();
    });
};


/////////////////////
// TRY AGAIN FUNCTION
/////////////////////

// Resets Previous Score
function tryAgain(){
    i=0;
    counter=30;
    questionInx=0;
    displayQuestion();
};

//};












