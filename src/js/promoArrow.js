const promoArrow = {

  el: null,
  init(){
    this.el = document.querySelector('.service-promo-arrow')
    if(!this.el){
      console.log('[Atlas script] Can`t find element .service-promo-arrow');
      return;
    }

    this.el.addEventListener('click', () => {
      const preimushestva = document.getElementById('preimushestva');
      window.scrollTo({ top: (preimushestva.offsetTop - 64), behavior: 'smooth' });
    })
  }
}

export default promoArrow
