var arrowDown = document.querySelector('.mainNav__link--arrow');

var offElements__arrowDown = document.querySelectorAll('.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')

function addOffClass() {
    for (var i = 0; i < offElements__arrowDown.length; i++) {
        offElements__arrowDown[i].classList.toggle('off');
    }

}

$('.mainNav__link--arrow, .mainNav__link--off').on('click', addOffClass);

// Scroll
$('.mainNav__link--off').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top - 64
    })
})