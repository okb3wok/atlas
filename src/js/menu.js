const menu = {

  menuToggle: null,
  init(){
    this.menuToggle = document.getElementById('menu-toggle');
    if(!this.menuToggle){
      console.log('can`t find id=menu-toggle');
      return;
    }


    this.menuToggle.addEventListener('click', ()=>{

      this.menuToggle.classList.toggle('open');

      let nav = document.querySelector('.header-nav');

      if(nav.classList.contains('unvisible')){
        nav.classList.replace('unvisible', 'visible');
      }else {
        nav.classList.replace('visible', 'unvisible');
      }


      const toggleVisible = (el) =>{
        if(!document.querySelector('.header-nav').contains(el.target) && !document.querySelector('.header').contains(el.target)){
          document.querySelector('.header-nav').classList.replace('visible', 'unvisible');
          document.getElementById('menu-toggle').classList.toggle('open');
          document.body.removeEventListener('click', toggleVisible);
        }
      }

      document.body.addEventListener('click', toggleVisible);

    })

  }

}

export default menu;
