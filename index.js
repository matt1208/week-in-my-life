Survey.StylesManager.applyTheme("defaultV2");

const surveyJson = {
    title: "Matthew's Week In the Life",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 30,
    maxTimeToFinish: 90,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [{
        elements: [{
            type: "html",
            html: "You are about to start a quiz on about Matthew's week. <br>You will have 10 seconds for every question and 30 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
        }, {
            type: "text",
            name: "username",
            titleLocation: "hidden",
            isRequired: true
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "taskmax",
            title: "Which task does Matthew do most in his week?",
            choices: [
                "Work", "Sleep", "Study", "Eat"
            ],
            correctAnswer: "Sleep"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "taskmin",
            title: "Which task did Matthew do least in his week?",
            choicesOrder: "random",
            choices: [
                "Class", "Eat", "Swim", "Work"
            ],
            correctAnswer: "Swim"
        }]
    }, {
        elements: [{
            type: "radiogroup",
            name: "magnacarta",
            title: "Which day does Matthew work the most?",
            choicesOrder: "random",
            choices: [
                "Friday",
                "Tuesday",
                "Saturday",
                "Sunday"
            ],
            correctAnswer: "Saturday"
        }]
    }],
    completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    completedHtmlOnCondition: [{
        expression: "{correctAnswers} == 0",
        html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
    }, {
        expression: "{correctAnswers} == {questionCount}",
        html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }]
};

const survey = new Survey.Model(surveyJson);

$(function() {
    $("#surveyContainer").Survey({ model: survey });
});