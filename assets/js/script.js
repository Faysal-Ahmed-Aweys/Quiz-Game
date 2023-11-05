const formSection = document.getElementById('form-section');
const difficultyPage = document.getElementById('difficulty-section');

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
}