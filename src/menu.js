


// const arrowDown = document.querySelector('.mainNav__link--arrow');

//  const offElements__arrowDown = document.querySelectorAll('.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')


export default function AddOffClass() {
const arrowDown = document.querySelectorAll('.mainNav__link--arrow');

const offElements__arrowDown = document.querySelectorAll('.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')


for (var i = 0; i < arrowDown.length; i++) {
    arrowDown[i].onclick = function() {
        offElements__arrowDown.forEach(function(element) {
            element.classList.toggle('off');
            
        })
    };

}

// Scroll
const menuPositionsOff = document.querySelectorAll('.mainNav__link--off');
for (var i = 0; i < menuPositionsOff.length; i++) {
    menuPositionsOff[i].onclick = function(){
        offElements__arrowDown.forEach(function(element) {
            element.classList.toggle('off');
            
        })
        window.scrollTo(0, 0);
    }
}
}
// var arrowDown = document.querySelector('.mainNav__link--arrow');

// var offElements__arrowDown = document.querySelectorAll('.mainHeader,.mainHeaderLogo__logo,.mainNav--off,.arrow-down-box,.mainHeader__photo, .fa-times, .fa-bars')
// var elements = document.querySelectorAll('.mainNav__link--arrow, .mainNav__link--off')

// // function addOffClass() {
// //     for (var i = 0; i < offElements__arrowDown.length; i++) {
// //         offElements__arrowDown[i].classList.toggle('off');
// //     }

// // }
// // function menuV() {
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].onclick = function () {
//             for (var j = 0; j < offElements__arrowDown.length; j++) {
//                 offElements__arrowDown[j].classList.toggle('off');
//             }
        
//         }
//     }

// $('.mainNav__link--arrow, .mainNav__link--off').on('click', addOffClass);

// // Scroll
// $('.mainNav__link--off').on('click', function () {
//     const goToSection = "[data-section=" + $(this).attr('id') + "]";
//     $('body, html').animate({
//         scrollTop: $(goToSection).offset().top - 64
//     })
// })
