document.addEventListener("DOMContentLoaded", function () {
  const imageSpaces = document.querySelectorAll(".image-space");

  imageSpaces.forEach(function (imageSpace) {
    imageSpace.addEventListener("click", function () {
      const card = this.parentNode;

      if (card.classList.contains("expanded")) {
        card.classList.remove("expanded");
      } else {
        const expandedCards = document.querySelectorAll(".new-card.expanded");
        expandedCards.forEach(card => card.classList.remove("expanded"));
        card.classList.add("expanded");
      }
    });
  });
});

