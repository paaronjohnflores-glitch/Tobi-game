const lessonData = {
    easy: [
        {
            prompt: 'What does the word “Revenue” mean?',
            answer: 'Total money earned before expenses',
            choices: [
                'Total money earned before expenses',
                'The cost of borrowing money',
                'The amount left after taxes',
                'The price of one item'
            ],
            category: 'Core Terms'
        },
        {
            prompt: 'What does “Profit” mean?',
            answer: 'Revenue minus expenses',
            choices: [
                'Revenue minus expenses',
                'The percentage of sales kept',
                'The price before tax',
                'The total money borrowed'
            ],
            category: 'Core Terms'
        },
        {
            prompt: 'What is “Markup”?',
            answer: 'The amount added to cost to set a selling price',
            choices: [
                'The amount added to cost to set a selling price',
                'The value of a loan payment',
                'The cost of goods not sold',
                'The profit after tax'
            ],
            category: 'Pricing'
        },
        {
            prompt: 'What is “Markdown”?',
            answer: 'A reduction in the original selling price',
            choices: [
                'A reduction in the original selling price',
                'The amount of interest paid',
                'The price before markup',
                'The cost of production'
            ],
            category: 'Pricing'
        },
        {
            prompt: 'What does “Commission” mean?',
            answer: 'A payment based on sales or performance',
            choices: [
                'A payment based on sales or performance',
                'The total number of items sold',
                'A discount for wholesale buyers',
                'A yearly tax due'
            ],
            category: 'Sales'
        },
        {
            prompt: 'What is “Expense”?',
            answer: 'The money a business spends to operate',
            choices: [
                'The money a business spends to operate',
                'The amount left after expenses',
                'The revenue from one sale',
                'A tax refund'
            ],
            category: 'Core Terms'
        },
        {
            prompt: 'What is “Discount”?',
            answer: 'A reduction in the price of an item',
            choices: [
                'A reduction in the price of an item',
                'A payment for shipping',
                'The cost of labor',
                'The sales tax rate'
            ],
            category: 'Pricing'
        },
        {
            prompt: 'What is a “Sale Price”?',
            answer: 'The final price after discount or markup',
            choices: [
                'The final price after discount or markup',
                'The original price before any change',
                'The total profit made',
                'The total amount of stock'
            ],
            category: 'Pricing'
        },
        {
            prompt: 'What is “Cost” in business math?',
            answer: 'The amount spent to produce or buy a product',
            choices: [
                'The amount spent to produce or buy a product',
                'The final selling price',
                'The amount added for profit',
                'The amount of tax owed'
            ],
            category: 'Costs'
        },
        {
            prompt: 'What is “Inventory”?',
            answer: 'The stock of goods a business has available for sale',
            choices: [
                'The stock of goods a business has available for sale',
                'The total profit from sales',
                'The amount of cash in the bank',
                'The operating costs of a store'
            ],
            category: 'Operations'
        },
        {
            prompt: 'What is “Unit Cost”?',
            answer: 'The cost per single item or unit',
            choices: [
                'The cost per single item or unit',
                'The total number of units sold',
                'The total amount of revenue',
                'The gross profit percentage'
            ],
            category: 'Costs'
        },
        {
            prompt: 'What is “Sales Tax”?',
            answer: 'A percentage added to the price of goods and services',
            choices: [
                'A percentage added to the price of goods and services',
                'The profit left after all costs',
                'The cost of producing one item',
                'A bonus for employees'
            ],
            category: 'Finance'
        }
    ],
    medium: [
        {
            prompt: 'What is a “Rate” in business math?',
            answer: 'A comparison between two quantities, often per 100',
            choices: [
                'A comparison between two quantities, often per 100',
                'The total cost of materials',
                'The amount left after discount',
                'A fixed salary amount'
            ],
            category: 'Ratios'
        },
        {
            prompt: 'What is a “Proportion”?',
            answer: 'A statement that two ratios are equal',
            choices: [
                'A statement that two ratios are equal',
                'The difference between cost and price',
                'A percent of sales revenue',
                'The amount paid to staff'
            ],
            category: 'Ratios'
        },
        {
            prompt: 'What is “Wholesale Price”?',
            answer: 'The price charged to retailers before final sale',
            choices: [
                'The price charged to retailers before final sale',
                'The retail price after markup',
                'The total number of units sold',
                'The taxable revenue'
            ],
            category: 'Pricing'
        },
        {
            prompt: 'What is “Principal”?',
            answer: 'The original amount of money borrowed or invested',
            choices: [
                'The original amount of money borrowed or invested',
                'The total interest earned',
                'The final account balance',
                'The monthly payment amount'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What does “Break-even Point” mean?',
            answer: 'The sales level where revenue equals total cost',
            choices: [
                'The sales level where revenue equals total cost',
                'The maximum possible sales volume',
                'The point where taxes are due',
                'The amount of debt a company owes'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Interest”?',
            answer: 'The charge paid for borrowing money or earned on savings',
            choices: [
                'The charge paid for borrowing money or earned on savings',
                'The amount of discount offered',
                'A company’s total sales',
                'The money paid for labor'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Margin”?',
            answer: 'The percentage of sales that remains as profit',
            choices: [
                'The percentage of sales that remains as profit',
                'The cost of goods sold',
                'The total discount given',
                'The tax rate applied'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Cash Flow”?',
            answer: 'The movement of money in and out of a business',
            choices: [
                'The movement of money in and out of a business',
                'The amount of stock inventory',
                'The number of sales made',
                'A payment to a supplier'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Return on Investment (ROI)”?',
            answer: 'A measure of profit compared with the amount invested',
            choices: [
                'A measure of profit compared with the amount invested',
                'The cost of buying inventory',
                'The amount of loan repayment',
                'The tax rate on product sales'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Inventory”?',
            answer: 'The stock of goods a business has available for sale',
            choices: [
                'The stock of goods a business has available for sale',
                'The total profit from sales',
                'The amount of cash in the bank',
                'The operating costs of a store'
            ],
            category: 'Operations'
        },
        {
            prompt: 'What is “Unit Cost”?',
            answer: 'The cost per single item or unit',
            choices: [
                'The cost per single item or unit',
                'The total number of units sold',
                'The total amount of revenue',
                'The gross profit percentage'
            ],
            category: 'Costs'
        },
        {
            prompt: 'What does “Net Income” mean?',
            answer: 'The money left after all expenses and taxes',
            choices: [
                'The money left after all expenses and taxes',
                'The total amount invested by owners',
                'The before-tax sales revenue',
                'The amount of cash on hand'
            ],
            category: 'Finance'
        }
    ],
    hard: [
        {
            prompt: 'What does “Break-even” mean?',
            answer: 'When total income equals total costs',
            choices: [
                'When total income equals total costs',
                'When sales are at their highest',
                'When costs are less than zero',
                'When a product is sold below cost'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is a “Margin”?',
            answer: 'The percentage of sales that remains as profit',
            choices: [
                'The percentage of sales that remains as profit',
                'The cost of goods sold',
                'The total discount given',
                'The tax rate applied'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Cash Flow”?',
            answer: 'The movement of money in and out of a business',
            choices: [
                'The movement of money in and out of a business',
                'The amount of stock inventory',
                'The number of sales made',
                'A payment to a supplier'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Return on Investment (ROI)”?',
            answer: 'A measure of profit compared with the amount invested',
            choices: [
                'A measure of profit compared with the amount invested',
                'The cost of buying inventory',
                'The amount of loan repayment',
                'The tax rate on product sales'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What does “Break-even Point” mean?',
            answer: 'The sales level where revenue equals total cost',
            choices: [
                'The sales level where revenue equals total cost',
                'The maximum possible sales volume',
                'The point where taxes are due',
                'The amount of debt a company owes'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Principal”?',
            answer: 'The original amount of money borrowed or invested',
            choices: [
                'The original amount of money borrowed or invested',
                'The total interest earned',
                'The final account balance',
                'The monthly payment amount'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What does “Net Income” mean?',
            answer: 'The money left after all expenses and taxes',
            choices: [
                'The money left after all expenses and taxes',
                'The total amount invested by owners',
                'The before-tax sales revenue',
                'The amount of cash on hand'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Expense Ratio”?',
            answer: 'Operating expenses compared with revenue',
            choices: [
                'Operating expenses compared with revenue',
                'The value of current inventory',
                'The total number of clients',
                'The increase in wages'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Asset”?',
            answer: 'A resource owned by a business that has value',
            choices: [
                'A resource owned by a business that has value',
                'A payment owed to a supplier',
                'The cost of labor per hour',
                'The total sales in a month'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Liability”?',
            answer: 'A debt or obligation a business owes',
            choices: [
                'A debt or obligation a business owes',
                'The amount of profit earned',
                'The value of products sold',
                'The total amount of cash in hand'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Equity”?',
            answer: 'The owner’s claim on the business after liabilities',
            choices: [
                'The owner’s claim on the business after liabilities',
                'The total cost of inventory',
                'The amount of tax paid',
                'The yearly operating budget'
            ],
            category: 'Finance'
        },
        {
            prompt: 'What is “Amortization”?',
            answer: 'The gradual repayment of a debt over time',
            choices: [
                'The gradual repayment of a debt over time',
                'The increase in product demand',
                'The tax due on profits',
                'The total cost of a purchase'
            ],
            category: 'Finance'
        }
    ]
};

const difficultySettings = {
    easy: { hearts: 4, xpBoost: 1 },
    medium: { hearts: 3, xpBoost: 1.2 },
    hard: { hearts: 2, xpBoost: 1.5 }
};

function createMixedQuestions(difficulties) {
    const pools = difficulties.map((difficulty) => lessonData[difficulty]);
    const positions = pools.map(() => 0);
    const usedPrompts = new Set();
    const questions = [];

    while (questions.length < 12) {
        let addedQuestion = false;
        pools.forEach((pool, poolIndex) => {
            while (positions[poolIndex] < pool.length) {
                const question = pool[positions[poolIndex]];
                positions[poolIndex] += 1;
                if (usedPrompts.has(question.prompt)) continue;

                usedPrompts.add(question.prompt);
                questions.push(question);
                addedQuestion = true;
                break;
            }
        });
        if (!addedQuestion) break;
    }

    return questions;
}

const levels = [
    { difficulty: 'easy', name: 'Easy' },
    { difficulty: 'medium', name: 'Medium' },
    { difficulty: 'hard', name: 'Hard' },
    { difficulty: 'medium', name: 'Mixed Review', questions: createMixedQuestions(['easy', 'medium']) },
    { difficulty: 'hard', name: 'Advanced Review', questions: createMixedQuestions(['medium', 'hard']) },
    { difficulty: 'hard', name: 'Master Challenge', questions: createMixedQuestions(['easy', 'medium', 'hard']) }
];
const unlockedLevelStorageKey = 'businessMathUnlockedLevel';
const savedUnlockedLevel = Number(window.localStorage.getItem(unlockedLevelStorageKey));
let highestUnlockedLevel = Number.isInteger(savedUnlockedLevel) && savedUnlockedLevel >= 0
    ? Math.min(savedUnlockedLevel, levels.length - 1)
    : 0;

const state = {
    index: 0,
    score: 0,
    streak: 0,
    xp: 0,
    hearts: 3,
    answered: false,
    selectedAnswer: null,
    lessonFinished: false,
    difficulty: 'easy',
    levelIndex: 0
};

const promptEl = document.getElementById('prompt');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const skipBtn = document.getElementById('skip-btn');
const xpEl = document.getElementById('xp');
const streakEl = document.getElementById('streak');
const progressFillEl = document.getElementById('progress-fill');
const progressLabelEl = document.getElementById('progress-label');
const heartsEl = document.getElementById('hearts');
const categoryTagEl = document.getElementById('category-tag');
const summaryEl = document.getElementById('summary');
const summaryScoreEl = document.getElementById('summary-score');
const summaryTextEl = document.getElementById('summary-text');
const gameCardEl = document.getElementById('game-card');
const startScreenEl = document.getElementById('start-screen');
const appEl = document.getElementById('app');
const levelListEl = document.getElementById('level-list');
const startButtonEl = document.getElementById('start-btn');
const levelNumberEl = document.getElementById('level-number');
const nextLevelButtonEl = document.getElementById('next-level-btn');
const mascotBarEl = document.getElementById('mascot-bar');
const mascotImageEl = document.getElementById('mascot-image');
const mascotMessageEl = document.getElementById('mascot-message');
let mascotReactionTimeout;

function getCurrentLevelIndex() {
    return state.levelIndex;
}

function renderLevelOptions() {
    levelListEl.innerHTML = '';
    levels.forEach((level, index) => {
        const isLocked = index > highestUnlockedLevel;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `level-option${state.difficulty === level.difficulty ? ' is-selected' : ''}`;
        button.disabled = isLocked;
        button.setAttribute('aria-pressed', String(state.difficulty === level.difficulty));
        const questionCount = level.questions ? level.questions.length : lessonData[level.difficulty].length;
        button.setAttribute('aria-label', isLocked
            ? `Level ${index + 1}, ${level.name}, locked`
            : `Level ${index + 1}, ${level.name}, ${questionCount} questions`);
        button.innerHTML = `<span class="level-node" aria-hidden="true">${isLocked ? '🔒' : index + 1}</span><strong>Level ${index + 1} · ${level.name}</strong><span>${isLocked ? 'Locked' : `${questionCount} questions`}</span>`;
        button.addEventListener('click', () => {
            state.levelIndex = index;
            state.difficulty = level.difficulty;
            startButtonEl.textContent = `Start Level ${index + 1}`;
            renderLevelOptions();
        });
        levelListEl.appendChild(button);
    });
}

function updateLevelDisplay() {
    levelNumberEl.textContent = String(getCurrentLevelIndex() + 1);
}

function reactWithMascot(message, mood = '', sprite = 'sprite_happy.jpg') {
    mascotMessageEl.textContent = message;
    mascotImageEl.src = sprite;
    mascotImageEl.alt = sprite === 'sprite_sad.jpg' || sprite === 'sprite_gameover.jpg'
        ? 'Sad mascot'
        : 'Happy mascot';
    mascotBarEl.classList.remove('is-happy', 'is-encouraging');
    if (mood) mascotBarEl.classList.add(mood);

    window.clearTimeout(mascotReactionTimeout);
    if (mood) {
        mascotReactionTimeout = window.setTimeout(() => {
            mascotBarEl.classList.remove('is-happy', 'is-encouraging');
        }, 1400);
    }
}

function shuffleChoices(choices) {
    const copy = [...choices];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function getDifficultyQuestions() {
    const currentLevel = levels[getCurrentLevelIndex()];
    return currentLevel.questions || lessonData[currentLevel.difficulty];
}

function applyDifficultySettings() {
    const settings = difficultySettings[state.difficulty];
    state.hearts = settings.hearts;
    renderHearts();
}

function renderHearts() {
    const totalHearts = difficultySettings[state.difficulty].hearts;
    heartsEl.textContent = '❤'.repeat(state.hearts) + '♡'.repeat(totalHearts - state.hearts);
}

function updateProgress() {
    const total = getDifficultyQuestions().length;
    const current = Math.min(state.index + 1, total);
    const percent = (state.index / total) * 100;
    progressLabelEl.textContent = `${current}/${total}`;
    progressFillEl.style.width = `${percent}%`;
}

function renderQuestion() {
    const questions = getDifficultyQuestions();
    if (state.index >= questions.length) {
        finishLesson();
        return;
    }

    const current = questions[state.index];
    promptEl.textContent = current.prompt;
    categoryTagEl.textContent = current.category;

    optionsEl.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    reactWithMascot('New question! Take your time and choose your best answer.');
    state.answered = false;
    state.selectedAnswer = null;
    nextBtn.textContent = 'Check';
    nextBtn.disabled = false;

    shuffleChoices(current.choices).forEach((choice) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.type = 'button';
        button.textContent = choice;
        button.addEventListener('click', () => selectAnswer(choice));
        optionsEl.appendChild(button);
    });

    updateProgress();
}

function selectAnswer(chosenAnswer) {
    if (state.answered) return;

    state.answered = true;
    state.selectedAnswer = chosenAnswer;

    const current = getDifficultyQuestions()[state.index];
    const optionButtons = document.querySelectorAll('.option');

    optionButtons.forEach((btn) => {
        const isCorrect = btn.textContent === current.answer;
        if (isCorrect) btn.classList.add('correct');
        if (btn.textContent === chosenAnswer && chosenAnswer !== current.answer) {
            btn.classList.add('wrong');
        }
    });

    if (chosenAnswer === current.answer) {
        state.score += 1;
        state.streak += 1;
        state.xp += Math.round((10 + state.streak * 5) * difficultySettings[state.difficulty].xpBoost);
        feedbackEl.textContent = 'Correct! Nice work.';
        feedbackEl.classList.add('correct');
        reactWithMascot(
            state.streak > 1 ? `${state.streak} in a row! You're on fire!` : 'Correct! Great job - keep that streak going!',
            'is-happy',
            state.streak > 1 ? 'sprite_firedup.jpg' : 'sprite_happy.jpg'
        );
    } else {
        state.streak = 0;
        state.hearts = Math.max(0, state.hearts - 1);
        feedbackEl.textContent = `Not quite. The correct answer is: ${current.answer}`;
        feedbackEl.classList.add('wrong');
        renderHearts();
        reactWithMascot(
            state.hearts === 0 ? 'Out of hearts! Take a breath and try again.' : 'Not quite, but that’s okay! Learn from it and keep going.',
            'is-encouraging',
            state.hearts === 0 ? 'sprite_gameover.jpg' : 'sprite_sad.jpg'
        );
    }

    xpEl.textContent = state.xp;
    streakEl.textContent = state.streak;
    nextBtn.textContent = 'Next';

    if (state.hearts === 0) {
        nextBtn.textContent = 'Try Again';
    }
}

function nextQuestion() {
    if (!state.answered && state.hearts > 0) {
        feedbackEl.textContent = 'Choose an answer first.';
        feedbackEl.classList.add('wrong');
        reactWithMascot('Give it a try - choose an answer when you’re ready.');
        return;
    }

    if (state.hearts === 0) {
        restartLesson();
        return;
    }

    state.index += 1;
    renderQuestion();
}

function finishLesson() {
    state.lessonFinished = true;
    gameCardEl.style.display = 'none';
    summaryEl.classList.add('visible');

    const total = getDifficultyQuestions().length;
    const percent = Math.round((state.score / total) * 100);
    const levelIndex = getCurrentLevelIndex();
    const nextLevelIndex = levelIndex + 1;

    summaryEl.querySelector('h2').textContent = `Level ${levelIndex + 1} complete!`;
    summaryScoreEl.textContent = `Score: ${state.score}/${total} (${percent}%)`;

    if (percent >= 80) {
        summaryTextEl.textContent = 'Excellent! You know your business math vocab really well.';
        reactWithMascot('Amazing work! You really know your business math!', 'is-happy');
    } else if (percent >= 50) {
        summaryTextEl.textContent = 'Good job! A quick review will make you even stronger.';
        reactWithMascot('Nice work! A little more practice and you’ll be unstoppable.', 'is-encouraging');
    } else {
        summaryTextEl.textContent = 'Keep practicing — business math gets easier with repetition.';
        reactWithMascot('Every try helps you learn. Ready for another round?', 'is-encouraging');
    }

    if (nextLevelIndex < levels.length) {
        if (highestUnlockedLevel < nextLevelIndex) {
            highestUnlockedLevel = nextLevelIndex;
            window.localStorage.setItem(unlockedLevelStorageKey, String(highestUnlockedLevel));
            renderLevelOptions();
            reactWithMascot(`Level ${nextLevelIndex + 1} unlocked! You're making great progress.`, 'is-happy', 'sprite_firedup.jpg');
        }

        if (nextLevelIndex <= highestUnlockedLevel) {
            nextLevelButtonEl.textContent = `Start Level ${nextLevelIndex + 1}`;
            nextLevelButtonEl.hidden = false;
        }
    } else {
        summaryTextEl.textContent += ' You completed every level!';
        nextLevelButtonEl.hidden = true;
    }
}

function restartLesson() {
    state.index = 0;
    state.score = 0;
    state.streak = 0;
    state.xp = 0;
    state.answered = false;
    state.selectedAnswer = null;
    state.lessonFinished = false;
    applyDifficultySettings();

    summaryEl.classList.remove('visible');
    summaryEl.querySelector('h2').textContent = 'Lesson complete!';
    gameCardEl.style.display = 'block';
    nextLevelButtonEl.hidden = true;
    xpEl.textContent = '0';
    streakEl.textContent = '0';
    updateLevelDisplay();
    renderHearts();
    renderQuestion();
}

function skipQuestion() {
    if (state.hearts === 0) {
        restartLesson();
        return;
    }

    state.index += 1;
    state.streak = 0;
    state.hearts = Math.max(0, state.hearts - 1);
    renderHearts();
    if (state.hearts === 0) {
        state.answered = true;
        feedbackEl.textContent = 'Out of hearts. Start the level again to keep progressing.';
        feedbackEl.className = 'feedback wrong';
        nextBtn.textContent = 'Try Again';
        reactWithMascot('Out of hearts! Take a breath and try again.', 'is-encouraging', 'sprite_gameover.jpg');
        return;
    }
    renderQuestion();
    reactWithMascot('Skipped this one. Let’s see what the next question brings.', 'is-encouraging');
}

nextBtn.addEventListener('click', () => {
    if (state.lessonFinished) return;
    if (nextBtn.textContent === 'Next') {
        nextQuestion();
    } else if (nextBtn.textContent === 'Check') {
        if (!state.answered) {
            feedbackEl.textContent = 'Choose one answer to continue.';
            feedbackEl.classList.add('wrong');
            reactWithMascot('Pick one of the answers first. You can do it!');
        }
    }
});

skipBtn.addEventListener('click', skipQuestion);
document.getElementById('restart-btn').addEventListener('click', restartLesson);
startButtonEl.addEventListener('click', () => {
    if (getCurrentLevelIndex() > highestUnlockedLevel) return;
    restartLesson();
    startScreenEl.hidden = true;
    appEl.hidden = false;
    optionsEl.querySelector('button').focus();
});

nextLevelButtonEl.addEventListener('click', () => {
    const nextLevel = levels[getCurrentLevelIndex() + 1];
    if (!nextLevel || getCurrentLevelIndex() + 1 > highestUnlockedLevel) return;

    state.levelIndex += 1;
    state.difficulty = nextLevel.difficulty;
    startButtonEl.textContent = `Start Level ${getCurrentLevelIndex() + 1}`;
    renderLevelOptions();
    restartLesson();
});

renderLevelOptions();
updateLevelDisplay();
applyDifficultySettings();
renderQuestion();
