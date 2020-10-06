# 04 Web APIs: Code Quiz

This program is designed to deliver a 5-question, times quiz in which users have 60 seconds to complete the quiz, and are then able to log their score. I chose to make the primary element on the page the Time Clock because it represents the most important element of the game in representing both the time and the score.

## Table of Contents 
[Opening] The user is first presented with the option to start the quiz.
[Questions] After starting the quiz, the user is presented with 5 questions about JavaScript. The 30 timer starts and the user is penalized by 5 seconds every time he or she answers a question incorrectly.
[Failure] If the time runs out before the user can complete the quiz, he or she is taken to a failure message that enables them to restart the game.
[Success] If the user makes it through all 5 questions (whether right or wrong), the user is presented with his or her score. 
[RecordScore] Finally, the user can enter his or her name, and his or her name and score will be stored in local storage and presented on their screen as long as it stays in their storage.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.