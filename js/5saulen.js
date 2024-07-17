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
            title: 'Informatik',
            sections: [
                { subtitle: 'Rechenintensive', explanation: 'Tiny Titan kann für rechenintensive Aufgaben eingesetzt werden, die auf einem einzelnen Raspberry Pi zu lange dauern würden, z. B. Simulationen, KI-Training oder Videobearbeitung.' },
                { subtitle: 'Datenanalyse', explanation: 'Mit seiner parallelen Verarbeitungsleistung kann Tiny Titan große Datensätze schnell und effizient analysieren, um Muster und Trends zu erkennen.' },
                { subtitle: 'Steuerungszentrum', explanation: 'Tiny Titan kann als Steuerungszentrum für Roboter und IoT-Geräte eingesetzt werden. Seine Flexibilität ermöglicht die Anpassung an verschiedene Anwendungsfälle.' }
            ]
        },
        {
            title: 'Informationssysteme',
            sections: [
                { subtitle: 'Datenspeicherung und Verwaltung', explanation: 'Tiny Titan kann als dezentraler Datenspeicher verwendet werden, um sensible Daten sicher und redundant zu speichern.' },
                { subtitle: 'Webserver und Cloud Computing', explanation: 'Tiny Titan kann als Webserver eingesetzt werden, um Websites und Anwendungen bereitzustellen. Er kann auch in Cloud-Computing-Umgebungen integriert werden.' },
                { subtitle: 'Netzwerkmanagement und -überwachung', explanation: 'Tiny Titan kann zur Überwachung von Netzwerken und zur Identifizierung von Problemen eingesetzt werden.' }
            ]
        },
        {
            title: 'Programmieren',
            sections: [
                { subtitle: 'Lernplattform', explanation: 'Tiny Titan bietet eine günstige und flexible Plattform zum Erlernen und Üben von Programmiersprachen wie Python, Java oder C++.' },
                { subtitle: 'Parallele Programmierung', explanation: 'Tiny Titan ermöglicht die Entwicklung und Ausführung von parallelen Programmen, die die Rechenleistung mehrerer Raspberry Pis nutzen.' },
                { subtitle: 'Fehlerbehebung und Debugging', explanation: 'Tiny Titan kann zur Fehlerbehebung und zum Debugging von Programmen eingesetzt werden, indem die Ausführung auf mehrere Raspberry Pis verteilt wird.' }
            ]
        },
        {
            title: 'Betriebswirtschaft',
            sections: [
                { subtitle: 'Simulation von Geschäftsprozessen', explanation: 'Tiny Titan kann zur Simulation von Geschäftsprozessen verwendet werden, um deren Effizienz zu verbessern und mögliche Probleme zu identifizieren.' },
                { subtitle: 'Datenanalyse für Marketing und Vertrieb', explanation: 'Tiny Titan kann große Datenmengen aus Marketing- und Vertriebskampagnen analysieren, um Kundensegmente zu identifizieren und gezielte Kampagnen zu entwickeln.' },
                { subtitle: 'Risikobewertung und -management', explanation: 'Tiny Titan kann zur Bewertung und zum Management von Unternehmensrisiken eingesetzt werden, indem große Datenmengen analysiert werden.' }
            ]
        },
        {
            title: 'Prozessmanagement',
            sections: [
                { subtitle: 'Workflow-Automatisierung', explanation: 'Tiny Titan kann zur Automatisierung von Workflows in Unternehmen eingesetzt werden, um die Effizienz und Produktivität zu verbessern.' },
                { subtitle: 'Lieferkettenoptimierung', explanation: 'Tiny Titan kann zur Optimierung von Lieferketten eingesetzt werden, indem Daten aus verschiedenen Quellen gesammelt und analysiert werden.' },
                { subtitle: 'Qualitätsmanagement', explanation: 'Tiny Titan kann zur Überwachung und Verbesserung der Qualität von Produkten und Dienstleistungen eingesetzt werden.' }
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