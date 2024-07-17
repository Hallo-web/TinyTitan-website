document.addEventListener('DOMContentLoaded', () => {
    const containerSelector = '.stacked-cards-container';
    const container = document.querySelector(containerSelector);

    if (!container) {
        console.error(`Container with selector "${containerSelector}" not found.`);
        return;
    }

    // Create and append styles
    const style = document.createElement('style');
    style.textContent = `
        ${containerSelector} {
            position: relative;
            height: 600px;
            overflow: hidden;
            background: #f0f0f0;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .stack {
            position: relative;
            height: 100%;
            width: 100%;
        }
        .stack__card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding: 20px;
            box-sizing: border-box;
            transition: all 0.3s ease;
            background: white;
            border-radius: 8px;
            opacity: 0;
            pointer-events: none;
        }
        .stack__card.active {
            opacity: 1;
            pointer-events: auto;
        }
        .card-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 20px;
        }
        .card-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
        }
        .card-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 10px;
            text-align: center;
        }
        .card-subtitle {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        .card-explanation {
            font-size: 1rem;
        }
        .nav-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
            background: rgba(0,0,0,0.5);
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 10;
        }
        .nav-arrow-left { left: 10px; }
        .nav-arrow-right { right: 10px; }
    `;
    document.head.appendChild(style);

    // Create and append HTML structure
    const stack = document.createElement('div');
    stack.className = 'stack';

    const cardTitles = ['1 Säule', '2 Säule', '3 Säule', '4 Säule', '5 Säule'];

    cardTitles.forEach((title, index) => {
        const card = document.createElement('div');
        card.className = 'stack__card';
        card.innerHTML = `
            <h2 class="card-title">${title}</h2>
            <div class="card-content">
                <div class="card-section">
                    <h3 class="card-subtitle">Untertitel</h3>
                    <p class="card-explanation">Erklärungen</p>
                </div>
                <div class="card-section">
                    <h3 class="card-subtitle">Untertitel</h3>
                    <p class="card-explanation">Erklärungen</p>
                </div>
                <div class="card-section">
                    <h3 class="card-subtitle">Untertitel</h3>
                    <p class="card-explanation">Erklärungen</p>
                </div>
            </div>
        `;
        stack.appendChild(card);
    });

    container.appendChild(stack);

    // Add navigation arrows
    const leftArrow = document.createElement('div');
    leftArrow.className = 'nav-arrow nav-arrow-left';
    leftArrow.innerHTML = '&lt;';
    container.appendChild(leftArrow);

    const rightArrow = document.createElement('div');
    rightArrow.className = 'nav-arrow nav-arrow-right';
    rightArrow.innerHTML = '&gt;';
    container.appendChild(rightArrow);

    const cards = container.querySelectorAll('.stack__card');
    let currentCardIndex = 0;

    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentCardIndex) {
                card.classList.add('active');
            }
        });
    }

    function showNextCard() {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            updateCards();
        }
    }

    function showPreviousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            updateCards();
        }
    }

    leftArrow.addEventListener('click', showPreviousCard);
    rightArrow.addEventListener('click', showNextCard);

    // Initial update
    updateCards();
});