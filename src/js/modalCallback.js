import { mask } from './mask.js'

const modalCallback = {

  modal:null,

  init(){
    let callbackButtons = document.querySelectorAll('.callback');
    if(callbackButtons.length===0){
      console.log('[Atlas script] Can`t find buttons .modalCallback');
      return;
    }


    this.modal = document.getElementById('modal-callback');
    if(!this.modal){
      console.log('[Atlas script] Can`t find modal element #modal-callback');
      return;
    }


    callbackButtons.forEach((el)=>{
      el.addEventListener('click',(event)=>{
        //this.modal.classList.add('show');
        showModal(this.modal).then((result)=>{
          result.classList.add('fade');
          mask("callbackPhone");

          document.getElementById('callbackPhone').addEventListener('change',(event)=>{
            if(event.target.value === ''){
              if(event.target.parentElement.classList.contains('atlas-input-item_filled')) {
                event.target.parentElement.classList.remove('atlas-input-item_filled');
              }
            }else{
              if(!event.target.parentElement.classList.contains('atlas-input-item_filled')){
                event.target.parentElement.classList.add('atlas-input-item_filled');
              }
            }
          })

        })
      })
    })


    function showModal(modal) {
      modal.classList.add('show');
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(modal);
        });
      }, 0);
    }

    function removeModal(modal) {
      modal.classList.remove('fade');
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(modal);
        },200);
      }, 0);
    }


    let modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click',(event)=>{
      removeModal(this.modal).then((result)=>{
        result.classList.remove('show');
      })
    })


    this.modal.addEventListener('click',(el)=>{
      let modalContainer = document.querySelector('.modal-container');
      if(!modalContainer.contains(el.target)){
        removeModal(this.modal).then((result)=>{
          result.classList.remove('show');
        })
      }
    });

  }
}


export default modalCallback;
