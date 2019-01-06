// const slideList = [{
//  img: "img/slides/img1.jpg",
//  title: 'Tytył 1',
//  text: 'Pierwszy tekst'
// },
// {
//  img: "img/slides/img2.jpg",
//  title: 'Tytył 2',
//  text: 'Drugi tekst'
// },
// {
//  img: "img/slides/img3.jpg",
//  title: 'Tytył 3',
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('.sliderImg');
// const h1 = document.querySelector('.sliderH1');
// const dots = [...document.querySelectorAll('.dots span')];
// // Interfejs
// const time = 6000;
// let active = 0;

// // Implementacje
// const changeDot = () => {
//     const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
//     dots[activeDot].classList.remove('active');
//     dots[active].classList.add('active');
// }
// const changeByClick = () => {
//     for (var i = 0; i < dots.length; i++) {
//         (function(index){
//            dots[i].onclick = function() {
//              if (index !== active) {
//                document.querySelector('.active').classList.remove('active');
//                this.classList.add('active');
//                image.src = slideList[index].img;
//                h1.textContent = slideList[index].text;
//             //    active = index;

//              }
//           }
//         })(i);
//        }
// }


// const changeSlide = () => {
//     active++;
//     if (active === slideList.length) {
//      active = 0;
//     }
//     image.src = slideList[active].img;
//     h1.textContent = slideList[active].text;
//     changeDot();
//     changeByClick();
//    }
//    setInterval(changeSlide, time)

   
// // -------------------------------------------------
// // change slide by click on dot
// // -------------------------------------------------
// let indexInterval = setInterval(changeSlide, time)
// const keyChangeSlides = (e) => {
//     if(e.keyCode === 37 || e.keyCode === 39){
//         clearInterval(indexInterval);
//         e.keyCode === 37 ? active-- : active++;
//         if(active === slideList.length){
//             active = 0;
//         }else if(active < 0) {
//             active = slideList.length - 1;
//         }
//         image.src = slideList[active].img;
//         h1.textContent = slideList[active].text;
//         changeDot();
//         indexInterval = setInterval(changeSlide, time)
//     }

// }

// window.addEventListener('keydown', keyChangeSlides);
