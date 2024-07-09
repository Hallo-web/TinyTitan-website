document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#squares-container');
    const squares = [
        { title: "Informatik", content: "Hochleistungsrechnen: Tiny Titan kann für rechenintensive Aufga-ben eingesetzt werden, die auf einem einzelnen Raspberry Pi zu lan-ge dauern würden, z. B. Simulationen, KI-Training oder Videobearbei-tung.Datenanalyse: Mit seiner parallelen Verarbeitungsleistung kann Tiny Titan große Datensätze schnell und effizient analysieren, um Muster und Trends zu erkennen.Robotik und IoT: Tiny Titan kann als Steuerungszentrum für Roboter und IoT-Geräte eingesetzt werden. Seine Flexibilität ermöglicht die Anpassung an verschiedene Anwendungsfälle." },
        { title: "Informationssysteme", content: "Speicherung und Verwaltung von Daten: Tiny Titan kann als dezent-raler Datenspeicher verwendet werden, um sensible Daten sicher und redundant zu speichern.Webserver und Cloud Computing: Tiny Titan kann als Webserver eingesetzt werden, um Websites und Anwendungen bereitzustellen. Er kann auch in Cloud-Computing-Umgebungen integriert werden.Netzwerkmanagement und -überwachung: Tiny Titan kann zur Überwachung von Netzwerken und zur Identifizierung von Problemen eingesetzt werden." },
        { title: "Programmieren", content: "Lernen und Üben von Programmiersprachen: Tiny Titan bietet eine günstige und flexible Plattform zum Erlernen und Üben von Program-miersprachen wie Python, Java oder C++.Entwicklung von parallelen Programmen: Tiny Titan ermöglicht die Entwicklung und Ausführung von parallelen Programmen, die die Re-chenleistung mehrerer Raspberry Pis nutzen.Fehlerbehebung und Debugging: Tiny Titan kann zur Fehlerbehe-bung und zum Debugging von Programmen eingesetzt werden, indem die Ausführung auf mehrere Raspberry Pis verteilt wird." },
        { title: "Betriebswirtschaft", content: "Simulation von Geschäftsprozessen: Tiny Titan kann zur Simulation von Geschäftsprozessen verwendet werden, um deren Effizienz zu verbessern und mögliche Probleme zu identifizieren.Datenanalyse für Marketing und Vertrieb: Tiny Titan kann große Da-tenmengen aus Marketing- und Vertriebskampagnen analysieren, um Kundensegmente zu identifizieren und gezielte Kampagnen zu entwi-ckeln.Risikobewertung und -management: Tiny Titan kann zur Bewertung und zum Management von Unternehmensrisiken eingesetzt werden, indem große Datenmengen analysiert werden." },
        { title: "Prozessmanagement", content: "Workflow-Automatisierung: Tiny Titan kann zur Automatisierung von Workflows in Unternehmen eingesetzt werden, um die Effizienz und Produktivität zu verbessern.Lieferkettenmanagement: Tiny Titan kann zur Optimierung von Lie-ferketten eingesetzt werden, indem Daten aus verschiedenen Quel-len gesammelt und analysiert werden.Qualitätsmanagement: Tiny Titan kann zur Überwachung und Ver-besserung der Qualität von Produkten und Dienstleistungen einge-setzt werden." }
    ];

    squares.forEach((square, index) => {
        const squareElement = document.createElement('div');
        squareElement.className = 'prices';
        squareElement.innerHTML = `
            <div class="flex justify-center items-center h-screen">
                <div class="relative">
                    <button class="expandButton w-32 h-32 transform rotate-45 bg-secondary text-secondary-foreground flex justify-center items-center rounded-lg transition-transform duration-300 ease-in-out">
                        <span class="transform -rotate-45">${square.title}</span>
                    </button>
                    <div class="expandedContent hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
                        <h1 class="text-3xl mb-4">${square.title}</h1>
                        <div class="grid grid-cols-3 gap-4 w-full">
                            <div class="bg-opacity-90 bg-card text-card-foreground p-4 rounded-lg">
                                <h2 class="text-xl mb-2">Untertitel</h2>
                                <p>${square.content}</p>
                            </div>
                            <div class="bg-opacity-90 bg-card text-card-foreground p-4 rounded-lg">
                                <h2 class="text-xl mb-2">Untertitel</h2>
                                <p>${square.content}</p>
                            </div>
                            <div class="bg-opacity-90 bg-card text-card-foreground p-4 rounded-lg">
                                <h2 class="text-xl mb-2">Untertitel</h2>
                                <p>${square.content}</p>
                            </div>
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
    });
});