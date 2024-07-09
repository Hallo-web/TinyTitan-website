document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.square').forEach(function (square) {
        var button = square.querySelector('.expandButton');
        var content = square.querySelector('.expandedContent');

        button.addEventListener('click', function () {
            content.classList.toggle('hidden');
            button.classList.toggle('hidden');
        });

        content.addEventListener('click', function () {
            content.classList.add('hidden');
            button.classList.remove('hidden');
        });
    });
});
