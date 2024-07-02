$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

const buch = document.querySelector('.buch');

buch.addEventListener('click', () => {
  buch.classList.toggle('blatt-umblättern');
});