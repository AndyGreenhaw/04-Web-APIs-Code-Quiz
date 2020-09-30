// Set Body //
var body = document.body;

// Create Elements //
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var divTag = document.createElement("div");
var buttonEl = document.createElement("button");
var bTag = document.createElement("p");
//var choice1 = document.createElement("button");
//var choice2 = document.createElement("button");
//var choice3 = document.createElement("button");
//var choice4 = document.createElement("button");

// Set Elements //
h1El.textContent = "Welcome to my quiz!";
h2El.textContent = "Push the Start Button to start the quiz, and try to answer the questions within the time limit. Keep in mind, any question you answer wrong will penalize your score time by ten seconds.";
buttonEl.textContent = "Start Quiz";

// Append Elements //
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(bTag);
bTag.appendChild(buttonEl);

// Style Elements //
h1El.setAttribute("style", "font-family: arial; font-size: 48px; color:blue; margin-top: 20px; margin-bottom: 20px; text-align: center;");
h2El.setAttribute("style", "font-family: arial; font-size: 24px; margin-top: 20px; margin-bottom: 20px; text-align:center;");
buttonEl.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");
bTag.setAttribute("style", "text-align: center;");

////////////////
// QUIZ START //
////////////////

// Question 1 //
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

buttonEl.addEventListener("click", firstQuestion);

//FIRST QUESTION: Activates after clicking Start Button //
function firstQuestion(e){
    e.preventDefault();

    //Remove Start Button//
    buttonEl.setAttribute("style", "display:none;");

    //Add Headline and Question//
    h1El.textContent = question1.headline;
    h2El.textContent = question1.question;

    //Set Up Possible Answers//
    question1.possibleAnswers.forEach(function(choice){
        console.log(choice);

        //Set Up P Tags for Double Spacing
        var qTag = document.createElement("p");
            qTag.setAttribute("style", "text-align: center;");
        
        //Set Up Choice Buttons 
        var answers1Button = document.createElement("button");
            body.appendChild(qTag);
            //Pulls Text from Objects to Buttons
            answers1Button.textContent = choice;
            //Stylizes Buttons
            answers1Button.setAttribute("style", "text-align: center; color:white; background-color:blue; width: 100px;");
            //Place Buttons in P Tags
            qTag.appendChild(answers1Button);
    })

    question1.addEventListener("click", function(){
        if (e.target.matches(question1.possibleAnswers[4])){
            var h3El = document.createElement("h3");
            h3El.textContent = "CORRECT!";
            body.appendChild(h3El);
        } else {
            var h3El = document.createElement("h3");
            h3El.textContent = "INCORRECT!";
            body.appendChild(h3El);
        }

    })
}

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


