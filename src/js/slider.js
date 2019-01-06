import partnerImg from '../img/partnerImg.jpg'
import aboutUsImg from '../img/aboutUsImg.jpg'
import peopleImg from '../img/people.jpg'
export default function SliderFunction()  {
const slideList = [{
    img: peopleImg,
    title: 'Dołącz do nas!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas libero magna, congue non dui ac, tempor malesuada purus. Nunc id suscipit tortor, nec faucibus felis. Nunc vestibulum, libero at faucibus interdum, augue dui condimentum nibh, ac interdum nisi ligula a magna. Phasellus quis consequat magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
   },
   {
    img: partnerImg,
    title: 'Zostań partnerem',
    text: 'Vivamus non semper dolor. Ut est urna, sollicitudin ac sagittis ac, aliquet vitae purus. Phasellus quam lectus, suscipit in orci vel, aliquam lacinia libero. Etiam sagittis erat a ex tristique, non interdum nibh rutrum.'
   },
   {
    img: aboutUsImg,
    title: 'O nas',
    text: 'Sed tempus nibh et massa elementum condimentum. Cras id sagittis odio. Sed ultrices nibh quis porttitor tempus. Proin tincidunt nisi nunc. Pellentesque non fermentum tellus. Morbi malesuada ex nec risus viverra consectetur. Fusce iaculis dui lacinia ornare venenatis. Pellentesque faucibus iaculis elit quis rutrum. '
   }];
   
   const image = document.querySelector('.sliderImg');
   const h1 = document.querySelector('.sliderH1');
   const txt = document.querySelector('.sliderTxt');
   const dots = [...document.querySelectorAll('.dots span')];
   // Interfejs
   const time = 6000;
   let active = 0;
   
   // Implementacje
   const changeDot = () => {
       const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
       dots[activeDot].classList.remove('active');
       dots[active].classList.add('active');
   }
   const changeByClick = () => {
       for (var i = 0; i < dots.length; i++) {
           (function(index){
              dots[i].onclick = function() {
                if (index !== active) {
                  document.querySelector('.active').classList.remove('active');
                  this.classList.add('active');
                  image.style.backgroundImage= `url('${slideList[index].img}')`;
                  h1.textContent = slideList[index].title;
                  txt.textContent = slideList[index].text;
               //    active = index;
   
                }
             }
           })(i);
          }
   }
   
   
   const changeSlide = () => {
       active++;
       if (active === slideList.length) {
        active = 0;
       }
       image.style.backgroundImage= `url('${slideList[active].img}')`;
       h1.textContent = slideList[active].title;
       txt.textContent = slideList[active].text;
       changeDot();
       changeByClick();
      }
      setInterval(changeSlide, time)
   
      
   // -------------------------------------------------
   // change slide by click on dot
   // -------------------------------------------------
   let indexInterval = setInterval(changeSlide, time)
   const keyChangeSlides = (e) => {
       if(e.keyCode === 37 || e.keyCode === 39){
           clearInterval(indexInterval);
           e.keyCode === 37 ? active-- : active++;
           if(active === slideList.length){
               active = 0;
           }else if(active < 0) {
               active = slideList.length - 1;
           }
           image.style.backgroundImage= `url('${slideList[active].img}')`;
           h1.textContent = slideList[active].title;
           txt.textContent = slideList[active].text;
           changeDot();
           indexInterval = setInterval(changeSlide, time)
       }
   
   }
   
   window.addEventListener('keydown', keyChangeSlides);
}