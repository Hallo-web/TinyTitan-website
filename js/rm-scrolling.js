document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    const container = document.querySelector('#squares-container');
    console.log("Container:", container);
    const body = document.body;
    let openSquare = null;
    // ... (your existing squares array and other code)

    // ... (your existing code for creating square elements)

    const expandButton = squareElement.querySelector('.expandButton');
    const expandedContent = squareElement.querySelector('.expandedContent');

    expandButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from immediately closing the expanded content
        expandedContent.classList.toggle('hidden');
        expandButton.classList.toggle('hidden');

        if (!expandedContent.classList.contains('hidden')) {
            body.classList.add('no-scroll');
            openSquare = expandedContent;
        }
    });

    expandedContent.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent clicks inside the content from closing it
    });

    // Add a click event listener to the document to close the expanded content when clicking outside
    document.addEventListener('click', () => {
        if (openSquare) {
            openSquare.classList.add('hidden');
            openSquare.previousElementSibling.classList.remove('hidden'); // Show the button
            body.classList.remove('no-scroll');
            openSquare = null;
        }
    });

    // Optional: Add escape key functionality to close the expanded content
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && openSquare) {
            openSquare.classList.add('hidden');
            openSquare.previousElementSibling.classList.remove('hidden'); // Show the button
            body.classList.remove('no-scroll');
            openSquare = null;
        }
    });
});
window.scrollTo(0, parseInt(scrollY || '0') * -1);