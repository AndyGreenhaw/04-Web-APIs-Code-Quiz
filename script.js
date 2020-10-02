//////////////////////////
// ALL GLOBAL VARIABLES //
//////////////////////////

// GENERAL ELEMENTS //
var body = document.body; //............................BODY
var buttonEl = document.createElement("button"); // ....START BUTTON
var h1El = document.createElement("h1"); //.............HEADLINES
var h2El = document.createElement("h2"); //.............QUESTIONS/CONTENT
var pTag = document.createElement("p"); //..............P TAG

// QUESTION/ANSWER ELEMENTS
var currentQuestion; //.................................CURRENT QUESTION
var answerButton = document.createElement("button"); // POSSIBLE ANSWER BUTTONS
var humanAnswer; //.....................................HUMAN ANSWER
var correctText = document.createElement("h3"); //......CORRECT ANSWER 
var incorrectText = document.createElement("h3"); //....INCORRECT ANSWERS
var questionInx = 0; //.................................QUESTION INDEX NUMBER

// TIME/SCORE ELEMENTS
var timer; //...........................................TIMER FUNCTION VAR
var timerDisplay = document.createElement("p"); //......TIMER DISPLAY
var counter = 60; //....................................TIMER COUNT
var score = 60; //......................................SCORE

// FORM ELEMENTS
var formEl = document.createElement("form"); //.........FORM ELEMENT

// COMPLETION CONTENT
var successDisplay = document.createElement("h4"); //...COMPLETION HEADLINE

// FAILURE CONTENT
var failText = document.createElement("h4"); //.........FAILURE HEADLINE
var failSubText = document.createElement("h5"); //......FAILURE SUBTEXT
var tryAgain = document.createElement("button") //......TRY AGAIN BUTTON

// PRIMARY ELEMENT IDS //
var headlineID = document.getElementById("headline"); //HEADLINE ID
var contentID = document.getElementById("content"); //..CONTENT ID
var buttonsID = document.getElementById("buttons"); //..BUTTONS ID
var resultID = document.getElementById("result"); //....RESULT ID
var timerID = document.getElementById("timer"); //......TIMER ID

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

/////////////////
// QUIZ STARTS //
/////////////////



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

////////////////////
// TIMER FUNCTION //
////////////////////

        // TIMER FUNCTION
        timer = setInterval(function(){
            // STARTS COUNTER AT 60 SECONDS AND DROPS ONE EVERY 1000MS
            counter = 60
            counter--
            // IF COUNTER REACHES 0, CLEAR IT AND GO TO FAIL FUNCTION
            if (counter <= 0) {
                clearInterval(timer)
                failure();
            }
        }, 1000) // 1-SECOND INTERVALS

        console.log("TIME SCORE STARTS: " + score)
    });


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
        currentQuestion = questionArray[questionInx]
        console.log("FIREEEEEEEEEEEEEEEEE: " + (questionInx+1))
        
        // Populates Headline/Question from each Question Object
        h1El.textContent = currentQuestion.headline;
        h2El.textContent = currentQuestion.question;        

        // Log Each Question # and Text
        console.log("QUESTION#: " + (questionInx+1))

        // Clear Old Buttons to Make Way for New//
        pTag.innerHTML="";

        // Loop New Buttons on Current Question//
        for(var i = 0; i < currentQuestion.possibleAnswers.length; i++){

            answerButton = document.createElement("button");
            answerButton.textContent = currentQuestion.possibleAnswers[i];
            buttonsID.appendChild(pTag);
            pTag.appendChild(answerButton);
            answerButton.setAttribute("value", currentQuestion.possibleAnswers[i]);
            
            //Console Logging the Loop//
            //console.log("QUESTION" + (questionInx+1) + ": " + h2El.textContent);
            //console.log("OPTION" + (i+1) + ": " + answerButton.textContent);
        };
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
    //console.log("INX INCORRECT FUNC" + questionInx)
    
    // Activate Next Question
    displayQuestion();
    
};

//////////////////////////////////////////////////////////
// SUCCESS PAGE //
//////////////////////////////////////////////////////////

function successPage(){

    // Stops Clock and Records Final Score
    finalScore = counter;
    console.log("Final Score: " + finalScore);
    clearTimeout(timer);

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
    clearTimeout(timer);

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
    












