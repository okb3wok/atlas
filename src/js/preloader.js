import './classList.js' // for ie11

const preloader = {

  el: null,
  transition: 1000,

  init (){
    this.el = document.querySelector('#preloader');
    this.preloaderHide();
  },

  preloaderHide(transition = this.transition) {

    //const { el:preloader } = this; //TODO To think

    const preloader = this.el;

    if (!preloader) return;


    preloader.classList.replace('show', 'hide');

    setTimeout(() => {
      preloader.remove(); // for other
      //preloader.parentNode.removeChild(preloader); // for ie11




    }, transition);

  }

}


export default preloader;
