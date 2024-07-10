document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#squares-container');
    const body = document.body;
    let openSquare = null;
    const squares = [
        { title: "Informatik" },
        { subheading1_1: "Rechenintensive Aufgaben" },
        { content1_1: "Tiny Titan kann für rechenintensive Aufgaben eingesetzt werden, die auf einem einzelnen Raspberry Pi zu lange dauern würden, z. B. Simulationen, KI-Training oder Videobearbeitung." },
        { subheading1_2: "Datenanalyse" },
        { content1_2: "Mit seiner parallelen Verarbeitungsleistung kann Tiny Titan große Datensätze schnell und effizient analysieren, um Muster und Trends zu erkennen." },
        { subheading1_3: "Steuerungszentrum" },
        { content1_3: "Tiny Titan kann als Steuerungszentrum für Roboter und IoT-Geräte eingesetzt werden. Seine Flexibilität ermöglicht die Anpassung an verschiedene Anwendungsfälle." },

        { title2: "Informationssysteme" },
        { subheading2_1: "Datenspeicherung und Verwaltung" },
        { content2_1: "Tiny Titan kann als dezentraler Datenspeicher verwendet werden, um sensible Daten sicher und redundant zu speichern." },
        { subheading2_2: "Webserver und Cloud Computing" },
        { content2_2: "Tiny Titan kann als Webserver eingesetzt werden, um Websites und Anwendungen bereitzustellen. Er kann auch in Cloud-Computing-Umgebungen integriert werden." },
        { subheading2_3: "Netzwerkmanagement und -überwachung" },
        { content2_3: "Tiny Titan kann zur Überwachung von Netzwerken und zur Identifizierung von Problemen eingesetzt werden." },

        { title3: "Programmieren" },
        { subheading3_1: "Lernplattform" },
        { content3_1: "Tiny Titan bietet eine günstige und flexible Plattform zum Erlernen und Üben von Programmiersprachen wie Python, Java oder C++." },
        { subheading3_2: "Parallele Programmierung" },
        { content3_2: "Tiny Titan ermöglicht die Entwicklung und Ausführung von parallelen Programmen, die die Rechenleistung mehrerer Raspberry Pis nutzen." },
        { subheading3_3: "Fehlerbehebung und Debugging" },
        { content3_3: "Tiny Titan kann zur Fehlerbehebung und zum Debugging von Programmen eingesetzt werden, indem die Ausführung auf mehrere Raspberry Pis verteilt wird." },

        { title4: "Betriebswirtschaft" },
        { subheading4_1: "Simulation von Geschäftsprozessen" },
        { content4_1: "Tiny Titan kann zur Simulation von Geschäftsprozessen verwendet werden, um deren Effizienz zu verbessern und mögliche Probleme zu identifizieren." },
        { subheading4_2: "Datenanalyse für Marketing und Vertrieb" },
        { content4_2: "Tiny Titan kann große Datenmengen aus Marketing- und Vertriebskampagnen analysieren, um Kundensegmente zu identifizieren und gezielte Kampagnen zu entwickeln." },
        { subheading4_3: "Risikobewertung und -management" },
        { content4_3: "Tiny Titan kann zur Bewertung und zum Management von Unternehmensrisiken eingesetzt werden, indem große Datenmengen analysiert werden." },

        { title5: "Prozessmanagement" },
        { subheading5_1: "Workflow-Automatisierung" },
        { content5_1: "Tiny Titan kann zur Automatisierung von Workflows in Unternehmen eingesetzt werden, um die Effizienz und Produktivität zu verbessern." },
        { subheading5_2: "Lieferkettenoptimierung" },
        { content5_2: "Tiny Titan kann zur Optimierung von Lieferketten eingesetzt werden, indem Daten aus verschiedenen Quellen gesammelt und analysiert werden." },
        { subheading5_3: "Qualitätsmanagement" },
        { content5_3: "Tiny Titan kann zur Überwachung und Verbesserung der Qualität von Produkten und Dienstleistungen eingesetzt werden." }
    ];

    for (let i = 0; i < 5; i++) {
        const squareElement = document.createElement('div');
        squareElement.className = 'prices';
        const titleKey = i === 0 ? 'title' : `title${i + 1}`;
        const title = squares.find(obj => obj[titleKey])[titleKey];

        squareElement.innerHTML = `
            <div class="flex justify-center items-center h-screen">
                <div class="relative">
                    <button class="expandButton w-32 h-32 transform rotate-45 bg-secondary text-secondary-foreground flex justify-center items-center rounded-lg transition-transform duration-300 ease-in-out">
                        <span class="transform -rotate-45">${title}</span>
                    </button>
                    <div class="expandedContent hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
                        <h1 class="text-3xl mb-4">${title}</h1>
                        <div class="grid grid-cols-3 gap-4 w-full">
                            ${[1, 2, 3].map(j => {
            const subheadingKey = `subheading${i + 1}_${j}`;
            const contentKey = `content${i + 1}_${j}`;
            const subheading = squares.find(obj => obj[subheadingKey])[subheadingKey];
            const content = squares.find(obj => obj[contentKey])[contentKey];
            return `
                                    <div class="bg-opacity-90 bg-card text-card-foreground p-4 rounded-lg">
                                        <h2 class="text-xl mb-2">${subheading}</h2>
                                        <p>${content}</p>
                                    </div>
                                `;
        }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(squareElement);

        const expandButton = squareElement.querySelector('.expandButton');
        const expandedContent = squareElement.querySelector('.expandedContent');

        expandButton.addEventListener('click', () => {
            expandedContent.classList.toggle('hidden');
            expandButton.classList.toggle('hidden');
        });

        expandedContent.addEventListener('click', () => {
            expandedContent.classList.add('hidden');
            expandButton.classList.remove('hidden');
        });
    }
});