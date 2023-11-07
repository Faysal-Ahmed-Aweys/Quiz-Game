const homePage = document.getElementById('home-page');
const totalScore = document.getElementById('total-score');
const fancyName = document.getElementById('fancy-name');
const nextFancyName = document.getElementById('next-fancy-name');
const nextStatus = document.getElementById('next-status');
const formSection = document.getElementById('form-section');
const difficultyPage = document.getElementById('difficulty-section');

const chocolate = document.getElementById('chocolate');

const normalButton = document.getElementById('normal-button');
const hardButton = document.getElementById('hard-button');

const readyText = document.getElementById('ready');
const countDownText = document.getElementById('countdown');
const timerTextNormal = document.getElementById('timer-normal');
const timerTextHard = document.getElementById('timer-hard');

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

window.onload = function () {
    let personUsername = localStorage.getItem('person-username');
    let totalScored = localStorage.getItem('totalScore');
    if (totalScored === null) {
        totalScored = 0;
        totalScore.innerHTML = `totalscore: ${parseInt(totalScored)}`;
    }
    else {
        totalScore.innerHTML = `totalscore: ${parseInt(totalScored)}`;

    }
    if (totalScored < 100 || totalScored === null) {
        fancyName.innerHTML = "Status: Beginner";
        chocolate.innerHTML = `${100 - totalScored}`;
        console.log("it is ");
    } else if (totalScored < 200) {
        fancyName.innerHTML = "Status: Amateur";
        chocolate.innerHTML = `${200 - totalScored}`;
        nextStatus.innerHTML = "Advanced";
    }
    else if (totalScored < 300) {
        fancyName.innerHTML = "Status: Advanced";
        chocolate.innerHTML = `${300 - totalScored}`;
        nextStatus.innerHTML = "Professional";
    }
    else if (totalScored < 400) {
        fancyName.innerHTML = "Status: Professional";
        chocolate.innerHTML = `${400 - totalScored}`;
        nextStatus.innerHTML = "Unstoppable";
    }
    else {
        fancyName.innerHTML = "Status: Unstoppable";
        nextFancyName.innerHTML = "";
    }

    if (personUsername !== null) {
        let startBtn = document.getElementById('start-button');
        startBtn.addEventListener('click', displayDifficultyPage);
        formSection.remove();
        console.log(personUsername);
        let homeGreeting = document.getElementById('home-greeting');
        homeGreeting.innerHTML = `Hello, ${personUsername}`;
        let greeting = document.getElementById('greeting');
        greeting.innerHTML = `Hi ${personUsername}, Choose Difficulty`;
    }


};

function displayUsernameForm() {
    homePage.classList.add('hidden');
    formSection.classList.remove('hidden');
    formSection.addEventListener('submit', function (event) {
        event.preventDefault();
        displayDifficultyPage();
    });
};

function displayDifficultyPage() {
    let personUsername = localStorage.getItem('person-username');
    if (personUsername === null) {
        let greeting = document.getElementById('greeting');
        let username = document.getElementById('username');
        let usernameValue = username.value;
        localStorage.setItem('person-username', usernameValue);
        console.log(usernameValue);
        greeting.innerHTML = `Hi ${usernameValue}, Choose Difficulty`;
    } else {
        let personUsername = localStorage.getItem('person-username');
        let greeting = document.getElementById('greeting');
        let usernameValue = personUsername;
        greeting.innerHTML = `Hi ${usernameValue}, Choose Difficulty`;
    }
    formSection.classList.add('hidden');
    difficultyPage.classList.remove('hidden');
    handleDifficultySelection();
}

function handleDifficultySelection() {
    normalButton.addEventListener('click', function () {
        difficultyPage.classList.add('hidden');
        heading.classList.add('hidden');
        readyText.classList.remove('hidden');
        let count = 3;
        let readyCountdownNormal = setInterval(function () {
            countDownText.innerHTML = count;
            console.log(count);
            count--;
            if (count < 0) {
                countDownText.innerHTML = "";
            };

        }, 1000);
        setTimeout(() => {
            normalGameContainer.classList.remove('hidden');
            startNormalLevel();
            clearInterval(readyCountdownNormal);
            countDownText.classList.add('hidden');
            readyText.classList.add('hidden');
        }, 4000);

    });

    hardButton.addEventListener('click', function () {
        difficultyPage.classList.add('hidden');
        heading.classList.add('hidden');
        readyText.classList.remove('hidden');
        let count = 3;
        let readyCountdownHard = setInterval(function () {
            countDownText.innerHTML = count;
            count--;
            if (count < 0) {
                countDownText.innerHTML = "";
            };

        }, 1000);
        setTimeout(() => {
            hardGameContainer.classList.remove('hidden');
            startHardLevel();
            clearInterval(readyCountdownHard);
            countDownText.classList.add('hidden');
            readyText.classList.add('hidden');
        }, 4000);
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
                { text: 'Fifty stars', correct: true },
                { text: 'Twenty stars', correct: false },
                { text: 'Ten stars', correct: false },
                { text: 'Forty eight stars', correct: false }
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
                { text: 'three', correct: false },
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
        let normalScoreSummary = document.getElementById('normal-scoredText');

        let NormalGainedScore = localStorage.getItem('mostRecentScore');

        totalScored = localStorage.getItem('totalScore');
        if (totalScored > 0) {
            totalScored = parseInt(totalScored) + parseInt(NormalGainedScore);
        } else {
            totalScored = parseInt(NormalGainedScore);
        }
        if (NormalGainedScore >= 100) {
            normalScoreSummary.innerHTML = `You Scored ${NormalGainedScore} / 100 <br> Well done!`;
        } else {
            normalScoreSummary.innerHTML = `You Scored ${NormalGainedScore} / 100 <br> You can do better!`;
        }
        localStorage.setItem('totalScore', totalScored);
        console.log(totalScored);
        let normalScore = document.getElementById('normal-summary-score');
        let normalTotalScore = document.getElementById('total-normal-summary-score');

        normalGameContainer.classList.add('hidden');
        normalGameSummary.classList.remove('hidden');
        handleLevelSelectionNormal();
    } else {


        intervalTimerNormal();
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
}

function getNewHardQuestion() {
    let MAX_QUESTIONS = 10;

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        let hardScoreSummary = document.getElementById('hard-scoredText');

        let hardGainedScore = localStorage.getItem('mostRecentScore');
        let hardScore = document.getElementById('hard-summary-score');
        let hardTotalScore = document.getElementById('total-normal-summary-score');
        totalScored = localStorage.getItem('totalScore');
        if (totalScored > 0) {
            totalScored = parseInt(totalScored) + parseInt(hardGainedScore);
        } else {
            totalScored = parseInt(hardGainedScore);
        }
        if (hardGainedScore >= 400) {
            hardScoreSummary.innerHTML = `You Scored ${hardGainedScore} / 400 <br> Well done!`;
        } else {
            hardScoreSummary.innerHTML = `You Scored ${hardGainedScore} / 400 <br> You can do better!`;
        }
        localStorage.setItem('totalScore', totalScored);
        console.log(totalScored);

        hardQuestion.classList.add('hidden');
        hardGameContainer.classList.add('hidden');
        hardGameSummary.classList.remove('hidden');
        handleLevelSelectionHard();

    } else {
        intervalTimerHard();

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
}

intervalTimerNormal = () => {
    let count = 5;
    let timer = setInterval(function () {
        timerTextNormal.innerHTML = count;
        console.log(count);
        count--;
        if (count <= 0) {
            let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
            let currentQuestion = availableQuestions[questionsIndex];
            clearInterval(timer);
            setTimeout(() => {
                Array.from(normalAnswerBtns.children).forEach(button => {
                    if (button.hasAttribute('data-correct')) {
                        button.style.color = "green";
                    }
                });
                timerTextNormal.classList.add('hidden');
                timerTextNormal.innerHTML = "";
            }, 1000);
            setTimeout(() => {
                Array.from(normalAnswerBtns.children).forEach(button => {
                    button.classList.add('hidden');
                });
                normalQuestion.classList.add('hidden');
            }, 2000);
            setTimeout(() => {
                timerTextNormal.classList.remove('hidden');
                normalQuestion.classList.remove('hidden');
                getNewNormalQuestion();
            }, 3000);
        } else if (count > 0) {
            setTimeout(() => {
                Array.from(normalAnswerBtns.children).forEach(button => {

                    button.addEventListener('click', selectAnswerNormal);
                });
            }, 1000);
        }

    }, 1000);

    selectAnswerNormal = (e) => {
        clearInterval(timer);
        timerTextNormal.innerHTML = "";
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
    };
};

intervalTimerHard = () => {
    let count = 10;
    let timer = setInterval(function () {
        timerTextHard.innerHTML = count;
        console.log(count);
        count--;
        if (count <= 0) {
            let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
            let currentQuestion = availableQuestions[questionsIndex];
            clearInterval(timer);
            setTimeout(() => {
                Array.from(hardAnswerBtns.children).forEach(button => {
                    if (button.hasAttribute('data-correct')) {
                        button.style.color = "green";
                    }
                });
                timerTextHard.classList.add('hidden');
                timerTextHard.innerHTML = "";
            }, 1000);
            setTimeout(() => {
                Array.from(hardAnswerBtns.children).forEach(button => {
                    button.classList.add('hidden');
                });
                hardQuestion.classList.add('hidden');
            }, 2000);
            setTimeout(() => {
                timerTextHard.classList.remove('hidden');
                hardQuestion.classList.remove('hidden');
                getNewHardQuestion();
            }, 3000);
        } else if (count > 0) {
            setTimeout(() => {
                Array.from(hardAnswerBtns.children).forEach(button => {

                    button.addEventListener('click', selectAnswerHard);
                });
            }, 1000);
        }

    }, 1000);

    selectAnswerHard = (e) => {
        clearInterval(timer);
        timerTextHard.innerHTML = "";
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
    };
};

function handleLevelSelectionNormal() {
    let playAgainNormal = document.getElementById('play-again-normal');
    let nextLevel = document.getElementById('next-level');
    let homeButtonNormal = document.getElementById('home-button-normal');

    playAgainNormal.addEventListener('click', () => {
        Array.from(normalAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        normalGameSummary.classList.add('hidden');
        readyText.classList.remove('hidden');
        let count = 3;
        let readyCountdownNormal = setInterval(function () {
            countDownText.innerHTML = count;
            count--;
            if (count < 0) {
                countDownText.innerHTML = "";
            };

        }, 1000);
        countDownText.classList.remove('hidden');
        setTimeout(() => {
            normalGameContainer.classList.remove('hidden');
            startNormalLevel();
            clearInterval(readyCountdownNormal);
            countDownText.classList.add('hidden');
            readyText.classList.add('hidden');
        }, 4000);
    });

    nextLevel.addEventListener('click', () => {
        normalGameSummary.classList.add('hidden');
        readyText.classList.remove('hidden');
        hardQuestion.classList.add('hidden');
        let count = 3;
        let readyCountdownNormal = setInterval(function () {
            countDownText.innerHTML = count;
            count--;
            if (count < 0) {
                countDownText.innerHTML = "";
            };

        }, 1000);
        countDownText.classList.remove('hidden');
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        setTimeout(() => {
            hardGameContainer.classList.remove('hidden');
            startHardLevel();
            clearInterval(readyCountdownNormal);
            countDownText.classList.add('hidden');
            readyText.classList.add('hidden');
        }, 4000);

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
        hardGameSummary.classList.add('hidden');
        Array.from(hardAnswerBtns.children).forEach(button => {
            button.classList.add('hidden');
        });
        readyText.classList.remove('hidden');
        hardQuestion.classList.add('hidden');
        let count = 3;
        let readyCountdownNormal = setInterval(function () {
            countDownText.innerHTML = count;
            count--;
            if (count < 0) {
                countDownText.innerHTML = "";
            };

        }, 1000);
        countDownText.classList.remove('hidden');
        setTimeout(() => {
            hardGameContainer.classList.remove('hidden');
            startHardLevel();
            clearInterval(readyCountdownNormal);
            countDownText.classList.add('hidden');
            readyText.classList.add('hidden');
        }, 4000);
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