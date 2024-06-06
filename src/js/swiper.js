// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination, Manipulation, Mousewheel, Zoom } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = {

  selector: '#swiper',
  el: null,

  init (){
    this.el = document.querySelector(this.selector);
    if (!this.el) return;


    const swiper1 = new Swiper(this.selector, {
      centeredSlides: true,
      mousewheel: true,
      slidesPerView: 1,
      spaceBetween: 30,
      zoom: true,
      limitToOriginalSize:true,
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Manipulation, Mousewheel, Zoom],
      // pagination: {
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

    });


    if (swiper1){

      let links = document.querySelectorAll('a');
      let images = [];

      document.getElementById('swiper-container').addEventListener('touchmove',(event)=>{
        event.preventDefault() // For prevent scroll by swipe body/page
      })


      links.forEach( (el)=>{

        let origin = "atlaskursk.ru"; // for dev purpose
        //let origin = document.location.host;

        const IMG_REGEXP = new RegExp(`^(.*)${origin}(.*)\.(gif|jpg|bmp|png)$`, 'g');
        if(IMG_REGEXP.test(el.href))
        {
          images.push(el.href)
          el.addEventListener('click', (event)=>{
            event.preventDefault();
            document.body.style.position = 'sticky';
            document.body.style.top = window.scrollY;
            document.getElementById('swiper-container').classList.replace('hidden', 'show');

            let imgIndex = images.findIndex((el)=>{ return el === event.target.parentElement.href})
            swiper1.slideTo(imgIndex, 0, false)
          })

          let slideText = el.querySelector('img');
          if(slideText){
            slideText = `<div class="swiper-slide-text">${slideText.alt}</div>`
          }else {
            slideText=''
          }
         swiper1.appendSlide(`<div class="swiper-slide"><div class="swiper-zoom-container"><img src="${el.href}" alt="" /></div>${slideText}</div>`)
        }
      })



    }else {
      return;
    }

    let swiperClose = document.getElementById('swiper-close');
    swiperClose.addEventListener('click', ()=>{
      document.getElementById('swiper-container').classList.replace('show', 'hidden');
      document.body.style.position = '';
      document.body.style.top = '';

    })

  },

}


export default swiper;
