const formSection = document.getElementById('form-section');
const difficultyPage = document.getElementById('difficulty-section');
const normalButton = document.getElementById('normal-button');
const hardButton = document.getElementById('hard-button');
const normalGameContainer = document.getElementById('normal-game-container');
const hardGameContainer = document.getElementById('hard-game-container');

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
        startNormalLevel()
    });

    hardButton.addEventListener('click', function () {
        hardGameContainer.classList.remove('hidden');
        difficultyPage.classList.add('hidden');
    });
}

startNormalLevel() {
}