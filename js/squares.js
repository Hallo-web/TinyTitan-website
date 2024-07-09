const expandButton = document.getElementById("expandButton"); // Get the button element
const expandedContent = document.getElementById("expandedContent"); // Get the content element

expandButton.addEventListener("click", function () {
    expandedContent.classList.toggle("hidden"); // Toggle the "hidden" class on click
});
