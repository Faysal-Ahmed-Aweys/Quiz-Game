const formSection = document.getElementById('form-section');
const difficultyPage = document.getElementById('difficulty-section');
const normalButton = document.getElementById('normal-button');
const hardButton = document.getElementById('hard-button');
const normalGameContainer = document.getElementById('normal-game-container');
const hardGameContainer = document.getElementById('hard-game-container');
const normalTotalScore = document.getElementById('normal-total-score');
const normalScoreHolder = document.getElementById('normal-scoreholder');
const normalQuestion = document.getElementById('normal-question');
const normalAnswerBtns = document.getElementById('normal-answer-btns');
const heading = document.getElementById('heading');
const normalScoreText = document.getElementById('normal-score-text');
const normalGameSummary = document.getElementById('normal-summary');

const normalScorePoints = 20;

document.addEventListener("DOMContentLoaded", function () {
    let startBtn = document.getElementById('start-button');
    startBtn.addEventListener('click', displayUsernameForm);
});

function displayUsernameForm() {
    let homePage = document.getElementById('home-page');
    homePage.classList.add('hidden');
    formSection.classList.remove('hidden');
    formSection.addEventListener('submit', function (event) {
        event.preventDefault();
        displayDifficultyPage();
    });
};

function displayDifficultyPage() {
    formSection.classList.add('hidden');
    difficultyPage.classList.remove('hidden');
    handleDifficultySelection();
}

function handleDifficultySelection() {
    normalButton.addEventListener('click', function () {
        normalGameContainer.classList.remove('hidden');
        difficultyPage.classList.add('hidden');
        heading.classList.add('hidden');
        startNormalLevel();
    });

    hardButton.addEventListener('click', function () {
        hardGameContainer.classList.remove('hidden');
        difficultyPage.classList.add('hidden');
    });
}

function startNormalLevel() {
    const questions = [
        {
            question: 'What is the orange part of an egg called?',
            answers: [
                { text: 'Yolk', correct: true },
                { text: 'Egg white', correct: false },
                { text: 'Shell', correct: false },
                { text: 'Shell membrane', correct: false }
            ]
        },
        {
            question: 'How many legs do insects have?',
            answers: [
                { text: 'Eight', correct: false },
                { text: 'Fifty ninee', correct: false },
                { text: 'Six', correct: true },
                { text: 'Twenty eight', correct: false }
            ]
        },
        {
            question: 'What is a baby kangaroo called?',
            answers: [
                { text: 'Calf', correct: false },
                { text: 'Joey', correct: true },
                { text: 'Lamb', correct: false },
                { text: 'Kid', correct: false }
            ]
        },
        {
            question: "What is the closest planet to the Sun?",
            answers: [
                { text: 'Mars', correct: false },
                { text: 'venus', correct: false },
                { text: 'Jupiter', correct: false },
                { text: 'Mercury', correct: true }
            ]
        },
        {
            question: 'In which country can you find the Eiffel Tower?',
            answers: [
                { text: 'China', correct: false },
                { text: 'Dubai', correct: false },
                { text: 'London', correct: false },
                { text: 'Paris', correct: true }
            ]
        },
        {
            question: 'What is the name of a shape with 5 sides?',
            answers: [
                { text: 'Pentagon', correct: true },
                { text: 'Hexagon', correct: false },
                { text: 'Octagon', correct: false },
                { text: 'Septagon', correct: false }
            ]
        },
        {
            question: 'How many letters are in the English alphabet?',
            answers: [
                { text: 'Twenty five', correct: false },
                { text: 'Twenty three', correct: false },
                { text: 'Twenty six', correct: true },
                { text: 'Twenty four', correct: false }
            ]
        },
        {
            question: 'How many players are in a football team?',
            answers: [
                { text: 'six', correct: false },
                { text: 'Eleven', correct: true },
                { text: 'Eight', correct: false },
                { text: 'Twenty one', correct: false }
            ]
        },
        {
            question: "Where do polar bears live?",
            answers: [
                { text: 'The arctic', correct: true },
                { text: 'The desert', correct: false },
                { text: 'The forest', correct: false },
                { text: 'The ocean', correct: false }
            ]
        },
        {
            question: 'How many continents are there?',
            answers: [
                { text: 'Five', correct: false },
                { text: 'Sixteen', correct: false },
                { text: 'Six', correct: false },
                { text: 'Seven', correct: true }
            ]
        }
    ];

    availableQuestions = [...questions];
    normalTotalScore.innerHTML = 100;
    questionCounter = 0;
    score = 0;
    getNewQuestion();

};

function getNewQuestion() {
    let MAX_QUESTIONS = 5;

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        let NormalGainedScore = localStorage.getItem('mostRecentScore');

        let normalGameSummary = document.getElementById('normal-summary');
        let normalScore = document.getElementById('normal-summary-score');
        let normalTotalScore = document.getElementById('total-normal-summary-score');
        let nextLevel = document.getElementById('next-level');

        normalScore.innerHTML = NormalGainedScore;
        normalTotalScore.innerHTML = 100;
        normalGameContainer.classList.add('hidden');
        normalGameSummary.classList.remove('hidden');

    }

    questionCounter++;
    console.log(questionCounter);
    normalQuestion.classList.remove('hidden');

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    let currentQuestion = availableQuestions[questionsIndex];
    normalQuestion.innerHTML = questionCounter + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        console.log(button);
        button.innerHTML = answer.text;
        button.classList.add('btn');
        normalAnswerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });

    availableQuestions.splice(questionsIndex, 1);
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    console.log(selectedBtn);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.style.color = "green";
        incrementScore(normalScorePoints);
        console.log(isCorrect);
    } else {
        selectedBtn.style.color = "red";
        console.log(isCorrect);
    }
    Array.from(normalAnswerBtns.children).forEach(button => {
        button.disabled = true;
    });
    setTimeout(() => {
        Array.from(normalAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        normalQuestion.classList.add('hidden');
        getNewQuestion();
    }, 1000);
}

function incrementScore(num) {
    score += num;
    normalScoreText.innerText = ` ${score} / 100`;
    localStorage.setItem('mostRecentScore', score);
}