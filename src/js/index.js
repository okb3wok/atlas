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




  // let matrix = '+7 (###) ###-##-##';
  //
  // let val = '79102724906';
  //
  // let i = 0;
  //
  // function replaceFunction(string){
  //
  //
  //   if(/[#\d]/.test(string) && i < val.length){
  //     console.log(val.charAt(i++))
  //     return val.charAt(i++); // возвращает символ под номером i+1 в строке
  //   }else if (i >= val.length) {
  //     return '';
  //   }else {
  //     return string;
  //   }
  //
  // }
  //
  // let result = m
  // atrix.replace(/(?!\+)./g, replaceFunction);

  //console.log(result);



});
