import preloader from './preloader.js'
import swiper from './swiper.js'
import navigation from './navigation.js'
import menu from './menu.js'
import map from './map.js'
import toTop from './toTop.js'
import promoArrow from './promoArrow.js'
import order from './order.js'
import modalCallback from './modalCallback.js'
import counter from './counter.js'

document.addEventListener('DOMContentLoaded', ()=>{

  preloader.init();
  swiper.init();
  navigation.init();
  menu.init();
  map.init();
  counter.init();
  toTop.init();
  promoArrow.init();
  order.init();
  modalCallback.init();

});
