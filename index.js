const SUITS = [
    { name: 'Markup', symbol: 'M', color: 'red' },
    { name: 'Markdown', symbol: 'D', color: 'black' },
    { name: 'Commission', symbol: 'C', color: 'red' },
    { name: 'Rate', symbol: 'R', color: 'black' },
    { name: 'Proportion', symbol: 'P', color: 'red' }
];

const BUSINESS_RANKS = [
    { label: 'A', term: 'SP − C', value: 1 },
    { label: '2', term: 'MU / C', value: 2 },
    { label: '3', term: 'MD / SP', value: 3 },
    { label: '4', term: 'r × S', value: 4 },
    { label: '5', term: 'C / S', value: 5 },
    { label: '6', term: 'a / b', value: 6 },
    { label: '7', term: 'SP − C', value: 7 },
    { label: '8', term: 'P / 100', value: 8 },
    { label: '9', term: 'R × B', value: 9 },
    { label: '10', term: 'x / y', value: 10 },
    { label: 'J', term: 'MU + C', value: 11 },
    { label: 'Q', term: 'B × r', value: 12 },
    { label: 'K', term: 'SP − MD', value: 13 }
];

const CONCEPTS = SUITS.map((suit) => suit.name);

let stock = [];
let waste = [];
let foundations = CONCEPTS.map(() => []);
let tableau = [[], [], [], [], [], [], []];
let selected = null;
let statusText = 'Step 1: Click a face-up card. Step 2: Click a valid destination.';

function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function createDeck() {
    const deck = [];
    SUITS.forEach((suit) => {
        BUSINESS_RANKS.forEach((rankInfo) => {
            deck.push({
                id: `${suit.name}-${rankInfo.label}`,
                suit: suit.name,
                rank: rankInfo.label,
                concept: rankInfo.term,
                symbol: suit.symbol,
                color: suit.color,
                value: rankInfo.value,
                faceUp: false
            });
        });
    });
    return shuffle(deck);
}

function initializeGame() {
    const deck = createDeck();
    stock = [];
    waste = [];
    foundations = CONCEPTS.map(() => []);
    tableau = [[], [], [], [], [], [], []];
    selected = null;

    for (let column = 0; column < 7; column++) {
        for (let row = 0; row <= column; row++) {
            const card = deck.shift();
            card.faceUp = row === column;
            tableau[column].push(card);
        }
    }

    stock = deck;
    stock.forEach((card) => (card.faceUp = false));
    waste = [];
    foundations = CONCEPTS.map(() => []);
    statusText = 'Your game is ready. Connect cards with the same business concept.';
    render();
}

function getCardFromSelection(selection) {
    if (!selection) return null;
    if (selection.type === 'waste') return waste[waste.length - 1] || null;
    if (selection.type === 'tableau') {
        const pile = tableau[selection.pileIndex];
        return pile[pile.length - 1] || null;
    }
    if (selection.type === 'foundation') {
        const pile = foundations[selection.pileIndex];
        return pile[pile.length - 1] || null;
    }
    return null;
}

function isMoveToFoundation(card, foundationIndex) {
    if (!card) return false;
    const targetPile = foundations[foundationIndex];
    if (card.suit !== CONCEPTS[foundationIndex]) return false;
    if (targetPile.length === 0) return true;
    const topCard = targetPile[targetPile.length - 1];
    return topCard.suit === card.suit;
}

function isMoveToTableau(card, targetPileIndex) {
    if (!card) return false;
    const targetPile = tableau[targetPileIndex];
    if (targetPile.length === 0) return true;
    const targetCard = targetPile[targetPile.length - 1];
    return targetCard.faceUp && card.suit === targetCard.suit;
}

function moveCard(source, destination) {
    let card;

    if (source.type === 'stock') {
        card = stock.pop();
        if (!card) return false;
        card.faceUp = true;
        waste.push(card);
        return true;
    }

    if (source.type === 'waste') {
        card = waste.pop();
        if (!card) return false;
    }

    if (source.type === 'tableau') {
        card = tableau[source.pileIndex].pop();
        if (!card) return false;
    }

    if (source.type === 'foundation') {
        card = foundations[source.pileIndex].pop();
        if (!card) return false;
    }

    if (destination.type === 'foundation') {
        if (!isMoveToFoundation(card, destination.pileIndex)) {
            if (source.type === 'tableau') tableau[source.pileIndex].push(card);
            if (source.type === 'waste') waste.push(card);
            if (source.type === 'foundation') foundations[source.pileIndex].push(card);
            return false;
        }
        foundations[destination.pileIndex].push(card);
    }

    if (destination.type === 'tableau') {
        if (!isMoveToTableau(card, destination.pileIndex)) {
            if (source.type === 'tableau') tableau[source.pileIndex].push(card);
            if (source.type === 'waste') waste.push(card);
            if (source.type === 'foundation') foundations[source.pileIndex].push(card);
            return false;
        }
        tableau[destination.pileIndex].push(card);
    }

    if (source.type === 'tableau' && tableau[source.pileIndex].length > 0) {
        const top = tableau[source.pileIndex][tableau[source.pileIndex].length - 1];
        if (!top.faceUp && top) {
            top.faceUp = true;
        }
    }

    return true;
}

function handleCardClick(type, pileIndex) {
    const clickedCard = getCardFromSelection({ type, pileIndex });
    if (!clickedCard) {
        if (selected && (type === 'tableau' || type === 'foundation')) {
            if (moveCard(selected, { type, pileIndex })) {
                selected = null;
                statusText = 'Card moved to an empty pile.';
                if (type === 'foundation') checkForWin();
                render();
                return;
            }
        }
        statusText = 'No card there.';
        render();
        return;
    }

    if (!selected) {
        if (type === 'stock') {
            drawFromStock();
            return;
        }
        if (type === 'waste' || type === 'tableau' || type === 'foundation') {
            if (type === 'tableau' && !clickedCard.faceUp) {
                statusText = 'That card is hidden.';
                render();
                return;
            }
            selected = { type, pileIndex };
            statusText = 'Card selected. Choose a pile to move it to.';
            render();
        }
        return;
    }

    if (selected.type === type && selected.pileIndex === pileIndex) {
        selected = null;
        statusText = 'Selection cleared.';
        render();
        return;
    }

    const selectedCard = getCardFromSelection(selected);
    if (!selectedCard) {
        selected = null;
        statusText = 'That selection is invalid.';
        render();
        return;
    }

    if (type === 'foundation') {
        if (moveCard(selected, { type: 'foundation', pileIndex })) {
            selected = null;
            statusText = 'Card moved to foundation.';
            checkForWin();
            render();
            return;
        }
    }

    if (type === 'tableau') {
        if (moveCard(selected, { type: 'tableau', pileIndex })) {
            selected = null;
            statusText = 'Card moved to tableau.';
            render();
            return;
        }
    }

    statusText = 'That move is not allowed.';
    selected = { type, pileIndex };
    render();
}

function drawFromStock() {
    if (stock.length > 0) {
        const card = stock.pop();
        card.faceUp = true;
        waste.push(card);
        selected = null;
        statusText = 'Drew a card.';
        render();
        return;
    }

    if (waste.length > 0) {
        const recycled = waste.reverse();
        recycled.forEach((card) => {
            card.faceUp = false;
        });
        stock.push(...recycled);
        waste = [];
        selected = null;
        statusText = 'Stock recycled.';
        render();
        return;
    }

    statusText = 'No cards left in stock.';
    render();
}

function checkForWin() {
    const cardsInFoundations = foundations.reduce((total, pile) => total + pile.length, 0);
    if (cardsInFoundations === SUITS.length * BUSINESS_RANKS.length) {
        statusText = 'You won! Great job.';
    }
}

function createCardElement(card, options = {}) {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';

    if (card && card.faceUp) {
        cardEl.classList.add(card.color);
        cardEl.innerHTML = `
      <div class="card-inner">
        <div class="card-concept">${card.suit}</div>
        <div class="card-center">${card.concept}</div>
      </div>
    `;
    } else {
        cardEl.classList.add('face-down');
        cardEl.innerHTML = '<div class="card-back"></div>';
    }

    if (options.selected) {
        cardEl.classList.add('selected');
    }

    if (options.clickable) {
        cardEl.style.cursor = 'pointer';
    }

    return cardEl;
}

function renderStock() {
    const stockEl = document.getElementById('stock');
    stockEl.innerHTML = '';

    if (stock.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-slot';
        stockEl.appendChild(empty);
        stockEl.onclick = () => drawFromStock();
        return;
    }

    const topCard = createCardElement(stock[stock.length - 1], { clickable: true });
    topCard.onclick = () => drawFromStock();
    stockEl.appendChild(topCard);
}

function renderWaste() {
    const wasteEl = document.getElementById('waste');
    wasteEl.innerHTML = '';

    if (waste.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-slot';
        wasteEl.appendChild(empty);
        return;
    }

    const card = waste[waste.length - 1];
    const cardEl = createCardElement(card, {
        clickable: true,
        selected: selected && selected.type === 'waste'
    });

    cardEl.onclick = () => handleCardClick('waste', 0);
    wasteEl.appendChild(cardEl);
}

function renderFoundations() {
    const foundationsEl = document.getElementById('foundations');
    foundationsEl.innerHTML = '';

    foundations.forEach((pile, index) => {
        const foundationSlot = document.createElement('div');
        foundationSlot.className = 'foundation';

        const label = document.createElement('div');
        label.className = 'pile-label';
        label.textContent = CONCEPTS[index];
        foundationSlot.appendChild(label);

        const zone = document.createElement('div');
        zone.className = 'foundation-zone';

        if (pile.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'empty-slot';
            zone.appendChild(empty);
        } else {
            const card = pile[pile.length - 1];
            const cardEl = createCardElement(card, {
                clickable: true,
                selected: selected && selected.type === 'foundation' && selected.pileIndex === index
            });
            cardEl.onclick = () => handleCardClick('foundation', index);
            zone.appendChild(cardEl);
        }

        foundationSlot.appendChild(zone);
        foundationsEl.appendChild(foundationSlot);
    });
}

function renderTableau() {
    const tableauEl = document.getElementById('tableau');
    tableauEl.innerHTML = '';

    tableau.forEach((pile, pileIndex) => {
        const column = document.createElement('div');
        column.className = 'tableau-pile';

        if (pile.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'placeholder';
            empty.onclick = () => handleCardClick('tableau', pileIndex);
            column.appendChild(empty);
            tableauEl.appendChild(column);
            return;
        }

        pile.forEach((card, cardIndex) => {
            const cardEl = createCardElement(card, {
                clickable: true,
                selected: selected && selected.type === 'tableau' && selected.pileIndex === pileIndex && cardIndex === pile.length - 1
            });

            const offset = cardIndex === 0 ? 0 : cardIndex * 26;
            cardEl.style.top = `${offset}px`;
            cardEl.style.left = '0';
            cardEl.onclick = () => handleCardClick('tableau', pileIndex);
            column.appendChild(cardEl);
        });

        tableauEl.appendChild(column);
    });
}

function render() {
    renderStock();
    renderWaste();
    renderFoundations();
    renderTableau();

    const status = document.getElementById('status');
    status.textContent = statusText;
}

document.getElementById('new-game').addEventListener('click', initializeGame);
document.getElementById('draw-card').addEventListener('click', drawFromStock);
document.getElementById('play-solitaire').addEventListener('click', () => {
    document.getElementById('game-picker').hidden = true;
    document.getElementById('solitaire-game').hidden = false;
});
document.getElementById('back-to-picker').addEventListener('click', () => {
    document.getElementById('solitaire-game').hidden = true;
    document.getElementById('game-picker').hidden = false;
    document.getElementById('play-solitaire').focus();
});

initializeGame();
