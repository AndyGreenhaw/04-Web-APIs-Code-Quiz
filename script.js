// Set Body //
var body = document.body;

// Create Elements //
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var divTag = document.createElement("div");
var startButton = document.createElement("button");
var bTag = document.createElement("p");
var correctText = document.createElement("h3");
var incorrectText = document.createElement("h3");
var qTag = document.createElement("p");
   
var score = 0;
var count = 60;

//var choice1 = document.createElement("button");
//var choice2 = document.createElement("button");
//var choice3 = document.createElement("button");
//var choice4 = document.createElement("button");

// Set Elements //
h1El.textContent = "Welcome to my quiz!";
h2El.textContent = "Push the Start Button to start the quiz, and try to answer the questions within the time limit. Keep in mind, any question you answer wrong will penalize your score time by ten seconds.";
correctText.textContent = "CORRECT!"
incorrectText.textContent = "INCORRECT!"
startButton.textContent = "Start Quiz";

// Stylize Elements //
h1El.setAttribute("style", "font-family: arial; font-size: 48px; color:blue; margin-top: 20px; margin-bottom: 20px; text-align: center;");
h2El.setAttribute("style", "font-family: arial; font-size: 24px; margin-top: 20px; margin-bottom: 20px; text-align:center;");
startButton.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");
bTag.setAttribute("style", "text-align: center;");
correctText.setAttribute("style", "font-family: arial; font-size: 32px; color:blue; margin-top: 30px; margin-bottom: 20px; text-align: center;");
incorrectText.setAttribute("style", "font-family: arial; font-size: 32px; color:blue; margin-top: 30px; margin-bottom: 20px; text-align: center;");
qTag.setAttribute("style", "text-align: center;");

// Append Starter Elements //
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(bTag);
bTag.appendChild(startButton);

// Question Objects //
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

// Question Object Array //
var index = 0;
var questionArray = [question1, question2, question3, question4, question5];

////////////////
// QUIZ START //
////////////////



startButton.addEventListener("click", questionsFunction);

//////////////////////////////////////////////////////////
//FIRST QUESTION: Activates after clicking Start Button //
//////////////////////////////////////////////////////////
function questionsFunction(e){
    e.preventDefault();

    //Remove Start Button//
    startButton.setAttribute("style", "display:none;");

    for(var i = 0; i < questionArray.length ; i++){

        //Add Headline and Question//
        h1El.textContent = questionArray[i].headline;
        h2El.textContent = questionArray[i].question;
        console.log(question1.possibleAnswers.length);

        //Build Loop to Set Up Possible Answers//
        for(var q=0; q < questionArray[i].length; q++) {

            //Set Up P Tags (qTags) for Double Spacing
            var qTag = document.createElement("p");
                qTag.setAttribute("style", "text-align: center;");
            
            //Set Up Choice Buttons 
            var answers1Button = document.createElement("button");
                body.appendChild(qTag);
                
                //Pulls Text from Objects to Buttons
                answers1Button.textContent = questionArray[i].possibleAnswers[q];
                
                //Stylizes Buttons
                answers1Button.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");
                answers1Button.setAttribute("id", "choice" + (q+1));
                answers1Button.setAttribute("class", "buttons");
                answers1Button.setAttribute("value", (q+1));
                
                //Place Buttons in P Tags
                qTag.appendChild(answers1Button);

                var correct;
                var incorrect;
            
                // User Chooses Button //
                answers1Button.onclick = function(e){
                    e.preventDefault();
                    console.log(this.value);

                    // If Correct, Add 1 to Score and Move to Question 2 Function //
                    if (this.value == '4') {
                        body.appendChild(correctText);
                        score = (score + 1);
                        console.log(score);

                        secondQuestion();

                    // If Incorrect, Add 1 to Score and Move to Question 2 Function //
                    } else {
                        body.appendChild(incorrectText);
                        count = (count - 10);
                        console.log(score);
                
                        secondQuestion();
                    };
                };
        };
    };
};

/*
    function secondQuestion(e){
    e.preventDefault();
    console.log("Is this working?")
    
        //Clear Old Content
        h1El.setAttribute("style", "display:none;");
        h2El.setAttribute("style", "display:none;");
        qTag.setAttribute("style", "display:none;");
        answers1button.setAttribute("style", "display:none;");

        //Add Headline and Question//
        h1El.textContent = question1.headline;
        h2El.textContent = question1.question;
        console.log(question1.possibleAnswers.length);

        //Build Loop to Set Up Possible Answers//
        for(var i = 0; i < question1.possibleAnswers.length; i++){
        
        //question1.possibleAnswers.forEach(function(choice){

            //Set Up P Tags (qTags) for Double Spacing
            var qTag = document.createElement("p");
                qTag.setAttribute("style", "text-align: center;");
            
            //Set Up Choice Buttons 
            var answers1Button = document.createElement("button");
                body.appendChild(qTag);

                //Pulls Text from Objects to Buttons
                answers1Button.textContent = question1.possibleAnswers[i];

                //Stylizes Buttons
                answers1Button.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");
                answers1Button.setAttribute("id", "choice" + (i+1));
                answers1Button.setAttribute("class", "buttons");
                answers1Button.setAttribute("value", (i+1));
                //Place Buttons in P Tags
                qTag.appendChild(answers1Button);
            
                // User Chooses Button //
                answers1Button.onclick = function(e){
                    e.preventDefault();
                    console.log(this.value);
                
                // If Correct, Add 1 to Score and Move to Question 2 Function //
                if (this.value == '4') {
                    body.appendChild(correctText);
                    score = (score + 1);
                    console.log(score);

                    secondQuestion();
            
                // If Incorrect, Add 1 to Score and Move to Question 2 Function //
                } else {
                    body.appendChild(incorrectText);
                    score = (score + 1);
                    console.log(score);
            
                    secondQuestion();
                };
            };
        };
    };
};
*/

//////////////////////////////////////////////////////////
//SECOND QUESTION: Activates after clicking Start Button //
/////////////////////////////////////////////////////////

/* DEAD ZONE
function secondQuestion(e){
    //e.preventDefault();


//Remove Buttons//
answers1Button.setAttribute("style", "display:none;");

//Add Headline and Question//
//Add Headline and Question//
h1El.textContent = question2.headline;
h2El.textContent = question2.question;



};







    //if (onclick= ){
    //    body.append(correctText);
    //} else {
    //    body.append(incorrectText);
    //}

    //Set Up Possible Answers
    //for (var i =0; i < question1.possibleAnswers.length; i++){
        
        //Possible Answers Styled Into Buttons
        //var qTag = document.createElement("p");
            //qTag.setAttribute("style", "text-align: center;")
        //var answers1Button = document.createElement("button");
            //body.appendChild(qTag);
            //answers1Button.textContent = question1.possibleAnswers[i];
            //answers1Button.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");
            //qTag.appendChild(answers1Button);
    //}

//answers1Button.addEventListener("click", function(e){
    //e.preventDefault();
    
    //if (e.target.matches)

//})




    //if (onclick(question1.possibleAnswers[3])){
        //var h3El = document.createElement("h3");
        //h3El.textContent = "CORRECT!"
        //body.appendChild(h3El);

    //} else { 
        //var h3El = document.createElement("h3");
        //h3El.textContent = "INCORRECT!"
        //body.appendChild(h3El);
    //}




    //Choice 1//
    //choice1.textContent = question1.possibleAnswers[0];
    //body.appendChild(divTag);
    //body.appendChild(choice1);
    //choice1.setAttribute("style", "color:white; background-color:blue;");

    //Choice 2//
    //choice2.textContent = question1.possibleAnswers[1];
    //body.appendChild(divTag);
    //body.appendChild(choice2);
    //choice2.setAttribute("style", "color:white; background-color:blue;");

    //Choice 3//
    //choice3.textContent = question1.possibleAnswers[2];
    //body.appendChild(divTag);
    //body.appendChild(choice3);
    //choice3.setAttribute("style", "color:white; background-color:blue;");

    //Choice 4//
    //choice4.textContent = question1.possibleAnswers[3];
    //body.appendChild(divTag);
    //body.appendChild(choice4);
    //choice4.setAttribute("style", "color:white; background-color:blue;");

//};

// CREATE AN OBJECT WITH AN ARRAY OF HIGH SCORES

//var allQuestions = [question1, question2, question3, question4, question5]
*/ 



