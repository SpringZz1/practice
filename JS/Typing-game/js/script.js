const word = document.getElementById('word');
const settingsBtn = document.getElementById('settings-btn');
const text = document.getElementById('text');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const endGameEl = document.getElementById('end-game-container');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('end-game-container');

// List of words
const words = ['sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value  in ls or media`
let difficulty =
    localStorage.getItem('difficulty') !== null ?
    localStorage.getItem('difficulty') :
    'medium';

// Set difficulty select value
difficultySelect.value =
    localStorage.getItem('difficulty') !== null ?
    localStorage.getItem('diffuiculty') :
    'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

/**
 * Generate random word from array
 */
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

/**
 * Add word to DOM
 */
function addWordDom() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

/**
 * Update score
 */
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}

/**
 * Update time
 */
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);

        // Game over
        gameOver();
    }
}

/**
 * Game over, show end screnn
 */
function gameOver() {
    endGameEl.innerHTML = `<h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>`;

    endGameEl.style.display = 'flex';
}

addWordDom();

// Event listeners

// Typing
text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordDom();
        updateScore();

        // Clear
        e.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
});

// Setting btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});