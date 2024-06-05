const navigation = {

  scrollFromTop: 0,
  nav: null,
  initialNavOffsetTop: null,

  init(){

    this.nav = document.querySelector('.header-nav');
    this.initialNavOffsetTop = this.nav.offsetTop;
    this.scrolling(window.scrollY);
    this.resizing(window.innerWidth);

    window.addEventListener('scroll', ()=>{
      this.scrolling(window.scrollY);
    })

    window.addEventListener('resize', ()=>{
      this.resizing(window.innerWidth);
    })

  },

  scrolling(scrolled){

    // If Scrolling
    if(scrolled >= 0){


        // Going down
        if(scrolled >= this.initialNavOffsetTop){
          this.nav.classList.add('fixed');
          document.getElementById('nav-social').style.display='flex';
          document.getElementById('nav-button').classList.remove('nonedisplay');

        }else{
          this.nav.classList.remove('fixed');
          if(window.innerWidth >= 767) {
            document.getElementById('nav-social').style.display = 'none';
          }
          document.getElementById('nav-button').classList.add('nonedisplay');
        }


    }
    this.scrollFromTop = scrolled;
  },
  resizing(windowWidth){
    if(windowWidth >= 767){
      this.nav.classList.replace('unvisible', 'visible');
      document.getElementById('nav-social').style.display = 'none';
    }else {
      document.getElementById('nav-social').style.display='flex';
      this.nav.classList.replace('visible', 'unvisible');
    }
  }

}


export default navigation ;
