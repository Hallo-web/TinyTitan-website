document.addEventListener('DOMContentLoaded', () => {
    const containerSelector = '.stacked-cards-container';
    const container = document.querySelector(containerSelector);

    if (!container) {
        console.error(`Container with selector "${containerSelector}" not found.`);
        return;
    }

    // Create and append HTML structure
    const stack = document.createElement('div');
    stack.className = 'stack';

    const cardData = [
        {
            title: '1 Säule',
            sections: [
                { subtitle: 'Staatliche Vorsorge', explanation: 'Pflichtversicherung für alle Erwerbstätigen' },
                { subtitle: 'AHV/IV', explanation: 'Sicherung des Existenzminimums im Alter oder bei Invalidität' },
                { subtitle: 'Finanzierung', explanation: 'Umlageverfahren: Aktive finanzieren Rentner' }
            ]
        },
        {
            title: '2 Säule',
            sections: [
                { subtitle: 'Berufliche Vorsorge', explanation: 'Obligatorische betriebliche Altersvorsorge' },
                { subtitle: 'Pensionskasse', explanation: 'Erhaltung des gewohnten Lebensstandards im Alter' },
                { subtitle: 'Finanzierung', explanation: 'Kapitaldeckungsverfahren: Eigenes Sparkapital wird aufgebaut' }
            ]
        },
        {
            title: '3 Säule',
            sections: [
                { subtitle: 'Private Vorsorge', explanation: 'Freiwillige individuelle Altersvorsorge' },
                { subtitle: 'Säule 3a und 3b', explanation: '3a: gebunden mit Steuervorteil, 3b: frei verfügbar' },
                { subtitle: 'Flexibilität', explanation: 'Individuelle Gestaltung nach persönlichen Bedürfnissen' }
            ]
        },
        {
            title: '4 Säule',
            sections: [
                { subtitle: 'Erwerbseinkommen', explanation: 'Teilzeitarbeit oder Nebenjob im Ruhestand' },
                { subtitle: 'Flexibles Arbeiten', explanation: 'Möglichkeit, Rente mit Einkommen zu ergänzen' },
                { subtitle: 'Work-Life-Balance', explanation: 'Ausgleich zwischen Arbeit und Freizeit im Alter' }
            ]
        },
        {
            title: '5 Säule',
            sections: [
                { subtitle: 'Immobilien', explanation: 'Wohneigentum als Altersvorsorge' },
                { subtitle: 'Mieteinnahmen', explanation: 'Zusätzliches Einkommen durch Vermietung' },
                { subtitle: 'Wertsteigerung', explanation: 'Langfristige Wertsteigerung von Immobilien' }
            ]
        }
    ];

    cardData.forEach((data, index) => {
        const card = document.createElement('div');
        card.className = 'stack__card';
        card.innerHTML = `
            <h2 class="card-title">${data.title}</h2>
            <div class="card-content">
                ${data.sections.map(section => `
                    <div class="card-section">
                        <h3 class="card-subtitle">${section.subtitle}</h3>
                        <p class="card-explanation">${section.explanation}</p>
                    </div>
                `).join('')}
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
            card.style.display = index === currentCardIndex ? 'flex' : 'none';
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