const homePage = document.getElementById('home-page');
const formSection = document.getElementById('form-section');
const difficultyPage = document.getElementById('difficulty-section');

const normalButton = document.getElementById('normal-button');
const hardButton = document.getElementById('hard-button');

const normalGameContainer = document.getElementById('normal-game-container');
const hardGameContainer = document.getElementById('hard-game-container');

const normalTotalScore = document.getElementById('normal-total-score');
const hardTotalScore = document.getElementById('total-hard-summary-score');

const normalScoreHolder = document.getElementById('normal-scoreholder');
const normalQuestion = document.getElementById('normal-question');
const hardQuestion = document.getElementById('hard-question');
const normalAnswerBtns = document.getElementById('normal-answer-btns');
const hardAnswerBtns = document.getElementById('hard-answer-btns');
const heading = document.getElementById('heading');

const normalScoreText = document.getElementById('normal-score-text');
const hardScoreText = document.getElementById('hard-score-text');

const normalGameSummary = document.getElementById('normal-summary');
const hardGameSummary = document.getElementById('hard-summary');

const normalScorePoints = 20;
const hardScorePoints = 40;

document.addEventListener("DOMContentLoaded", function () {
    let startBtn = document.getElementById('start-button');
    startBtn.addEventListener('click', displayUsernameForm);
});

function displayUsernameForm() {
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
        heading.classList.add('hidden');
        startHardLevel();
    });
}

function startNormalLevel() {
    const normalQuestions = [
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

    availableQuestions = [...normalQuestions];
    normalScoreText.innerText = ` 0 / 100`;
    normalTotalScore.innerHTML = 100;
    questionCounter = 0;
    score = 0;
    getNewNormalQuestion();



};

function startHardLevel() {
    const hardQuestions = [
        {
            question: 'How many rings does the planet saturn have?',
            answers: [
                { text: 'seven', correct: true },
                { text: 'eleven', correct: false },
                { text: 'ten', correct: false },
                { text: 'infinite', correct: false }
            ]
        },
        {
            question: 'What type of tree is pictured on the labanese flag?',
            answers: [
                { text: 'Fig tree', correct: false },
                { text: 'Walnut tree', correct: false },
                { text: 'Cedar tree', correct: true },
                { text: 'Oak tree', correct: false }
            ]
        },
        {
            question: 'How old was Queen Victoria when she died?',
            answers: [
                { text: 'Ninety nine', correct: false },
                { text: 'Eighty one', correct: true },
                { text: 'Forty five', correct: false },
                { text: 'Sixty three', correct: false }
            ]
        },
        {
            question: "Who was the sixth president of the United States?",
            answers: [
                { text: 'Bill Clinton', correct: false },
                { text: 'Barack Obama', correct: false },
                { text: 'George Bush', correct: false },
                { text: 'John Quincy Adams', correct: true }
            ]
        },
        {
            question: 'What is the national animal of Germany?',
            answers: [
                { text: 'The Federal Monkey', correct: false },
                { text: 'The Federal Lion', correct: false },
                { text: 'The Federal Tiger', correct: false },
                { text: 'The Federal Eagle', correct: true }
            ]
        },
        {
            question: 'How many stars are on the flag of New Zealand?',
            answers: [
                { text: 'Four', correct: true },
                { text: 'Sixteen', correct: false },
                { text: 'Two', correct: false },
                { text: 'Three', correct: false }
            ]
        },
        {
            question: 'Excluding Russia, which country is the most populated in Europe?',
            answers: [
                { text: 'Italy', correct: false },
                { text: 'Hungary', correct: false },
                { text: 'Germany', correct: true },
                { text: 'United Kingdom', correct: false }
            ]
        },
        {
            question: 'What is the capital of Tajikistan?',
            answers: [
                { text: 'Seoul', correct: false },
                { text: 'Dunshabe', correct: true },
                { text: 'Peru', correct: false },
                { text: 'Shangai', correct: false }
            ]
        },
        {
            question: "In celsius, what is the melting point of gold?",
            answers: [
                { text: '1064 degrees Celsius', correct: true },
                { text: '260 degrees Celsius', correct: false },
                { text: '1248 degrees Celsius', correct: false },
                { text: '100 degrees Celsius', correct: false }
            ]
        },
        {
            question: "What is Shakespeare's shortest play?",
            answers: [
                { text: 'A Chrismas Carol', correct: false },
                { text: 'Romeo and Juliet', correct: false },
                { text: 'Macbeth', correct: false },
                { text: 'The comedy of Errors', correct: true }
            ]
        },
        {
            question: 'How many stars are on the national Flag of USA?',
            answers: [
                { text: 'seven', correct: true },
                { text: 'eleven', correct: false },
                { text: 'ten', correct: false },
                { text: 'infinite', correct: false }
            ]
        },
        {
            question: 'Who won the first football worldcup and what year was it?',
            answers: [
                { text: 'Italy - 1925', correct: false },
                { text: 'France - 1949', correct: false },
                { text: 'Uruguay - 1930', correct: true },
                { text: 'Brazil - 1922', correct: false }
            ]
        },
        {
            question: 'Who designed the Eiffel Tower?',
            answers: [
                { text: 'Louis Eiffel', correct: false },
                { text: 'Gustave Eiffel', correct: true },
                { text: 'Gabriel Eiffel', correct: false },
                { text: 'Marie Eiffel', correct: false }
            ]
        },
        {
            question: "What is the name of the longest river in the UK?",
            answers: [
                { text: 'Trent river', correct: false },
                { text: 'Lea river', correct: false },
                { text: 'Thames river', correct: false },
                { text: 'Savern river', correct: true }
            ]
        },
        {
            question: 'Who was the youngest British Prime Minister?',
            answers: [
                { text: 'David Cameron', correct: false },
                { text: 'John Major', correct: false },
                { text: 'Boris Johnson', correct: false },
                { text: 'William Pitt the Younger', correct: true }
            ]
        },
        {
            question: 'If you have cryophobia, what are you afraid of?',
            answers: [
                { text: 'Ice or cold', correct: true },
                { text: 'crying', correct: false },
                { text: 'Running', correct: false },
                { text: 'water', correct: false }
            ]
        },
        {
            question: "How many bones are in an elephant's trunk?",
            answers: [
                { text: 'Zero', correct: false },
                { text: 'A hundred', correct: false },
                { text: 'Zero', correct: true },
                { text: 'Twenty', correct: false }
            ]
        },
        {
            question: 'How many digits are in pi?',
            answers: [
                { text: '72.4 trillion decimals', correct: false },
                { text: '62.8 trillion decimals', correct: true },
                { text: '44.5 billion decimals', correct: false },
                { text: '40 million decimals', correct: false }
            ]
        },
        {
            question: "How many time zones are there in Russia?",
            answers: [
                { text: 'Eleven', correct: true },
                { text: 'Two', correct: false },
                { text: 'Eleven', correct: false },
                { text: 'Thirteen', correct: false }
            ]
        },
        {
            question: "Which English city was once known as Duroliponte?",
            answers: [
                { text: 'Luton', correct: false },
                { text: 'Reading', correct: false },
                { text: 'Oxford', correct: false },
                { text: 'Cambridge', correct: true }
            ]
        }
    ];

    availableQuestions = [...hardQuestions];
    hardScoreText.innerHTML = ` 0 / 400`;
    questionCounter = 0;
    score = 0;
    getNewHardQuestion();
}

function getNewNormalQuestion() {
    let MAX_QUESTIONS = 5;

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        let NormalGainedScore = localStorage.getItem('mostRecentScore');

        let normalScore = document.getElementById('normal-summary-score');
        let normalTotalScore = document.getElementById('total-normal-summary-score');

        normalScore.innerHTML = NormalGainedScore;
        normalTotalScore.innerHTML = 100;
        normalGameContainer.classList.add('hidden');
        normalGameSummary.classList.remove('hidden');
        handleLevelSelectionNormal();

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
        button.addEventListener('click', selectAnswerNormal);
    });

    availableQuestions.splice(questionsIndex, 1);
}

function getNewHardQuestion() {
    let MAX_QUESTIONS = 9;

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        let hardGainedScore = localStorage.getItem('mostRecentScore');
        let hardScore = document.getElementById('hard-summary-score');
        let hardTotalScore = document.getElementById('total-normal-summary-score');

        hardScore.innerHTML = hardGainedScore;
        hardQuestion.classList.add('hidden');
        hardTotalScore.innerHTML = 400;
        hardGameContainer.classList.add('hidden');
        hardGameSummary.classList.remove('hidden');
        handleLevelSelectionHard();

    }

    questionCounter++;
    console.log(questionCounter);
    hardQuestion.classList.remove('hidden');

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    let currentQuestion = availableQuestions[questionsIndex];
    hardQuestion.innerHTML = questionCounter + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        console.log(button);
        button.innerHTML = answer.text;
        button.classList.add('btn');
        hardAnswerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswerHard);
    });

    availableQuestions.splice(questionsIndex, 1);
}

function selectAnswerNormal(e) {
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
        getNewNormalQuestion();
    }, 1000);
}

function selectAnswerHard(e) {
    const selectedBtn = e.target;
    console.log(selectedBtn);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.style.color = "green";
        incrementScore(hardScorePoints);
        console.log(isCorrect);
    } else {
        selectedBtn.style.color = "red";
        console.log(isCorrect);
    }
    Array.from(hardAnswerBtns.children).forEach(button => {
        button.disabled = true;
    });
    setTimeout(() => {
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        hardQuestion.classList.add('hidden');
        getNewHardQuestion();
    }, 1000);
}

function handleLevelSelectionNormal() {
    let playAgainNormal = document.getElementById('play-again-normal');
    let nextLevel = document.getElementById('next-level');
    let homeButtonNormal = document.getElementById('home-button-normal');

    playAgainNormal.addEventListener('click', () => {
        Array.from(normalAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        normalGameSummary.classList.add('hidden');
        normalGameContainer.classList.remove('hidden');

        startNormalLevel();
    });

    nextLevel.addEventListener('click', () => {
        let hardGameContainer = document.getElementById('hard-game-container');
        hardGameContainer.classList.remove('hidden');
        normalGameSummary.classList.add('hidden');
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        startHardLevel();
    });

    homeButtonNormal.addEventListener('click', () => {
        heading.classList.remove('hidden');
        homePage.classList.remove('hidden');
        normalGameSummary.classList.add('hidden');
        Array.from(normalAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
    });
}

function handleLevelSelectionHard() {
    let playAgainHard = document.getElementById('play-again-hard');
    let homeButtonHard = document.getElementById('home-button-hard');

    playAgainHard.addEventListener('click', () => {
        let hardGameContainer = document.getElementById('hard-game-container');
        hardGameContainer.classList.remove('hidden');
        hardGameSummary.classList.add('hidden');
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        startHardLevel();
    });

    homeButtonHard.addEventListener('click', () => {
        let hardGameContainer = document.getElementById('hard-game-container');
        heading.classList.remove('hidden');
        homePage.classList.remove('hidden');
        hardGameSummary.classList.add('hidden');
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
    });
}

function incrementScore(num) {
    score += num;
    normalScoreText.innerText = ` ${score} / 100`;
    hardScoreText.innerHTML = ` ${score} / 400`;
}