//Global constants
//Home page DOM elements
const homePage = document.getElementById('home-page');
const totalScore = document.getElementById('total-score');
const fancyName = document.getElementById('fancy-name');
const nextFancyName = document.getElementById('next-fancy-name');
const nextStatus = document.getElementById('next-status');
const chocolate = document.getElementById('chocolate');
const startBtn = document.getElementById('start-button');
const aboutGameButton = document.getElementById('about-button');
const aboutPageHomeButton = document.getElementById('home-button-about-page');
// Username page DOM elements
const formSection = document.getElementById('form-section');
// DIfficulty page DOM elements
const greetingDifficultyPage = document.getElementById('greeting');
const difficultyPage = document.getElementById('difficulty-section');
const normalButton = document.getElementById('normal-button');
const hardButton = document.getElementById('hard-button');
// Normal and hard game DOM elements
const normalGameContainer = document.getElementById('normal-game-container');
const hardGameContainer = document.getElementById('hard-game-container');
const readyText = document.getElementById('ready');
const countDownText = document.getElementById('countdown');
const timerTextNormal = document.getElementById('timer-normal');
const timerTextHard = document.getElementById('timer-hard');
const normalQuestion = document.getElementById('normal-question');
const hardQuestion = document.getElementById('hard-question');
const normalAnswerBtns = document.getElementById('normal-answer-btns');
const hardAnswerBtns = document.getElementById('hard-answer-btns');
const normalScoreText = document.getElementById('normal-score-text');
const hardScoreText = document.getElementById('hard-score-text');
// Global constants for when playing the game levels
const normalScorePoints = 20;
const hardScorePoints = 40;

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

let questionCounter = 0;
let availableNormalQuestions = [...normalQuestions];
let availableHardQuestions = [...hardQuestions];
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
    startBtn.addEventListener('click', displayUsernameForm);
    aboutGameButton.addEventListener('click', showGameRules);

    /** 
     *  checks if a username has been created and displays it on home page.
     *  checks if the player gained some score and displays it on home page. 
    */
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
            nextStatus.innerHTML = "Amateur";
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
            let homeGreeting = document.getElementById('home-greeting');
            homeGreeting.innerHTML = `Hello, ${personUsername}`;
            let greeting = document.getElementById('greeting');
            greeting.innerHTML = `Hi ${personUsername}, Choose Difficulty`;
        }


    };

    /**
     * hides home page and shows game rules page. Also shows home page if home button is clicked on
    */
    function showGameRules() {
        let aboutPage = document.getElementById('about-page');
        aboutPage.classList.remove('hidden');
        homePage.classList.add('hidden');
        aboutPageHomeButton.addEventListener('click', function () {
            homePage.classList.remove('hidden');
            aboutPage.classList.add('hidden');
        });

    }

    /** 
     * hides home page and displays username form page and handles username form submission to display difficulty page.
    */
    function displayUsernameForm() {
        homePage.classList.add('hidden');
        formSection.classList.remove('hidden');
        formSection.addEventListener('submit', function (event) {
            event.preventDefault();
            displayDifficultyPage();
        });
    };

    /**
     * displays difficulty-selection page.
     * checks for and displays username on difficulty-selection page
    */
    function displayDifficultyPage() {
        let personUsername = localStorage.getItem('person-username');
        if (personUsername === null) {
            let greeting = document.getElementById('greeting');
            let username = document.getElementById('username');
            let usernameValue = username.value;
            localStorage.setItem('person-username', usernameValue);
            greeting.innerHTML = `Hi ${usernameValue}, Choose Difficulty`;
        } else {
            let personUsername = localStorage.getItem('person-username');
            let greeting = document.getElementById('greeting');
            let usernameValue = personUsername;
            greeting.innerHTML = `Hi ${usernameValue}, Choose Difficulty`;
        }
        formSection.classList.add('hidden');
        difficultyPage.classList.remove('hidden');
        greetingDifficultyPage.style.color = "black";
        handleDifficultySelection();
    }

    /**
     * handles which of the difficulty buttons is clicked on and based on that displays the game level countdown.
    */
    function handleDifficultySelection() {
        normalButton.addEventListener('click', function () {
            difficultyPage.classList.add('hidden');
            countDownText.classList.remove('hidden');
            readyText.classList.remove('hidden');
            let count = 4;
            let readyCountdownNormal = setInterval(function () {
                count--;
                countDownText.innerHTML = count;
                if (count <= 0) {
                    clearInterval(readyCountdownNormal);
                    countDownText.innerHTML = "";
                };

            }, 1000);
            setTimeout(() => {
                normalGameContainer.classList.remove('hidden');
                normalScoreText.innerText = " 0 / 100";
                questionCounter = 0;
                score = 0;
                readyText.classList.add('hidden');
                getNewNormalQuestion();
                clearInterval(readyCountdownNormal);
                countDownText.classList.add('hidden');
            }, 4000);

        });

        hardButton.addEventListener('click', function () {
            difficultyPage.classList.add('hidden');
            countDownText.classList.remove('hidden');
            readyText.classList.remove('hidden');
            let count = 4;
            let readyCountdownHard = setInterval(function () {
                count--;
                countDownText.innerHTML = count;
                if (count < 1) {
                    clearInterval(readyCountdownHard);
                    countDownText.innerHTML = "";
                };

            }, 1000);
            setTimeout(() => {
                hardGameContainer.classList.remove('hidden');
                hardScoreText.innerHTML = " 0 / 400";
                questionCounter = 0;
                score = 0;
                getNewHardQuestion();
                clearInterval(readyCountdownHard);
                countDownText.classList.add('hidden');
                readyText.classList.add('hidden');
            }, 4000);
        });
    }

    /**
     * Displays a new normal question as long as max questions for the game is not reached.
     * if max questions are reached, it displays normal summary page.
    */
    function getNewNormalQuestion() {
        let MAX_QUESTIONS = 5;

        if (questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            let normalScoreSummary = document.getElementById('normal-scoredText');

            let NormalGainedScore = localStorage.getItem('mostRecentScore');

            let totalScored = localStorage.getItem('totalScore');
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

            normalGameContainer.classList.add('hidden');
            difficultyPage.classList.remove('hidden');
            normalButton.innerHTML = "Play Again";
            hardButton.innerHTML = "Next Level";
            greetingDifficultyPage.innerHTML = normalScoreSummary.innerHTML;
        } else {


            intervalTimerNormal();
            questionCounter++;
            normalQuestion.classList.remove('hidden');

            let questionsIndex = Math.floor(Math.random() * availableNormalQuestions.length);
            let currentQuestion = availableNormalQuestions[questionsIndex];
            normalQuestion.innerHTML = questionCounter + ". " + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerHTML = answer.text;
                button.classList.add('btn');
                normalAnswerBtns.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', selectAnswerNormal);
            });
            availableNormalQuestions = [...normalQuestions];
            [...normalQuestions].splice(questionsIndex, 1);
        }
    }

    /**
     * Displays a new hard question as long as max questions for the game is not reached.
     * if max questions are reached, it displays hard summary page.
    */
    function getNewHardQuestion() {
        let availableQuestions = [...hardQuestions];
        let MAX_QUESTIONS = 10;

        if (questionCounter >= MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score);
            let hardScoreSummary = document.getElementById('hard-scoredText');

            let hardGainedScore = localStorage.getItem('mostRecentScore');
            let totalScored = localStorage.getItem('totalScore');
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

            hardGameContainer.classList.add('hidden');
            difficultyPage.classList.remove('hidden');
            normalButton.remove();
            hardButton.innerHTML = "Play Again";
            greetingDifficultyPage.innerHTML = hardScoreSummary.innerHTML;

        } else {
            intervalTimerHard();

            questionCounter++;
            hardQuestion.classList.remove('hidden');

            let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
            let currentQuestion = availableQuestions[questionsIndex];
            hardQuestion.innerHTML = questionCounter + ". " + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerHTML = answer.text;
                button.classList.add('btn');
                hardAnswerBtns.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener('click', selectAnswerHard);
            });
            availableHardQuestions = [...normalQuestions];
            [...hardQuestions].splice(questionsIndex, 1);
        }
    }

    /**
     * Sets a countdown for each normal question. If the countdown runs out it displays the correct answer to the question. 
     */
    function intervalTimerNormal() {
        let count = 6;
        let timer = setInterval(function () {
            timerTextNormal.innerHTML = count - 1;
            count--;
            if (count <= 0) {
                Array.from(normalAnswerBtns.children).forEach(button => {
                    button.disabled = true;
                });
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

        let selectAnswerNormal = (e) => {
            clearInterval(timer);
            timerTextNormal.innerHTML = "";
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.style.color = "green";
                incrementScore(normalScorePoints);
            } else {
                selectedBtn.style.color = "red";
            }
            Array.from(normalAnswerBtns.children).forEach(button => {
                button.disabled = true;
                if (button.dataset.correct === "true") {
                    button.style.color = "green";
                }
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

    /**
     * Sets a countdown for each hard question. If the countdown runs out it displays the correct answer to the question. 
     */
    function intervalTimerHard() {
        let count = 11;
        let timer = setInterval(function () {
            timerTextHard.innerHTML = count - 1;
            count--;
            if (count <= 0) {
                Array.from(hardAnswerBtns.children).forEach(button => {
                    button.disabled = true;
                });
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

        let selectAnswerHard = (e) => {
            clearInterval(timer);
            timerTextHard.innerHTML = "";
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if (isCorrect) {
                selectedBtn.style.color = "green";
                incrementScore(hardScorePoints);
            } else {
                selectedBtn.style.color = "red";
            }
            Array.from(hardAnswerBtns.children).forEach(button => {
                button.disabled = true;
                if (button.dataset.correct === "true") {
                    button.style.color = "green";
                }
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

    /**
     * Adds to the score in the game the amount of score each question is worth.
    */
    function incrementScore(num) {
        score += num;
        normalScoreText.innerText = ` ${score} / 100`;
        hardScoreText.innerHTML = ` ${score} / 400`;
    }
});