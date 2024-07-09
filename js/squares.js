document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('#squares-container');
    const squares = [
        { title: "Titel 1", content: "Content 1" },
        { title: "Titel 2", content: "Content 2" },
        { title: "Titel 3", content: "Content 3" },
        { title: "Titel 4", content: "Content 4" },
        { title: "Titel 5", content: "Content 5" }
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