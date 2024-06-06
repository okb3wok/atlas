import { mask } from './mask.js'
import { requestAPI } from './requestApi.js'

const order = {
  form: null,
  init(){
    this.form = document.getElementById('order-form');

    if(!this.form){
      console.log('[Atlas script] Can`t find element #order-form');
      return;
    }


    let orderButton = document.getElementById('add-order');

    orderButton.addEventListener('click', (event) =>{
      console.log(document.getElementById('zakazat').offsetTop)
      window.scrollTo({ top: (document.getElementById('zakazat').offsetTop - 20), behavior: 'smooth' });

    })


    mask("serviceOrderPhone");

    let inputs = this.form.querySelectorAll('input, textarea');

    inputs.forEach((el)=>{
      el.addEventListener('change',(event)=>{
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


    const PHONE_REGEXP = /^\+(\d{11}|\d{12})$/;

    const isPhoneValid = (value) => {
      return PHONE_REGEXP.test(value.replace(/[\s#\-)(]/g, ''));
    }


    serviceOrderSubmit.addEventListener('click', (event)=>{
      event.preventDefault();

      let msg = '';


      if(isPhoneValid(serviceOrderPhone.value) ){
        msg = '<i style="color: green;">Отправляем...</i>';
        serviceOrderMsg.innerHTML = msg;

        let payload = {
          data: {
            method: 'requestOrder',
            request: {
              phone: serviceOrderPhone.value,
              descr: serviceOrderDetails.value,
              name: serviceOrderName.value
            }
          }
        };

        requestAPI('https://atlaskursk.ru/api.php','POST', payload).then(
          (result) => {
            if(result.result){
              msg = '<i style="color: green;">' + result.status + '</i>';
              serviceOrderMsg.innerHTML = msg;
              serviceOrderPhone.value = '';
            }else {
              msg = '<i style="color: red;">' + result.status + '</i>';
              serviceOrderMsg.innerHTML = msg;
            }
          });

      }else{

        msg = '<i style="color: red;">Не верные данные</i>';
        serviceOrderMsg.innerHTML = msg;


        if(!isPhoneValid(callbackPhone.value)){
          serviceOrderPhone.style.borderColor = 'red';
        }

        serviceOrderPhone.addEventListener('input',onPhoneInput)
        function onPhoneInput() {
          let entered = this.value;
          if (isPhoneValid(entered)) {
            serviceOrderPhone.style.borderColor = 'green';
            serviceOrderMsg.innerHTML = '';
          }else{
            serviceOrderPhone.style.borderColor = 'red';
          }
        }


      }

    })



    let callbackButton = document.getElementById('callbackButton');

    callbackButton.addEventListener('click',(event)=>{

      event.preventDefault();

      let msg = '';

      if(isPhoneValid(callbackPhone.value) ){
        msg = '<i style="color: green;">Отправляем...</i>';
        callbackMsg.innerHTML = msg;

        let payload = {
          data: {
            method: 'requestCallback',
            request: {
              phone: callbackPhone.value
            }
          }
        };

        requestAPI('https://atlaskursk.ru/api.php','POST', payload).then(
          (result) => {
            if(result.result){
              msg = '<i style="color: green;">' + result.status + '</i>';
              callbackMsg.innerHTML = msg;
              callbackPhone.value = '';
            }else {
              msg = '<i style="color: red;">' + result.status + '</i>';
              callbackMsg.innerHTML = msg;
            }
          });


      }else{

        msg = '<i style="color: red;">Не верные данные</i>';
        callbackMsg.innerHTML = msg;

        if(!isPhoneValid(callbackPhone.value)){
          callbackPhone.style.borderColor = 'red';
        }

        callbackPhone.addEventListener('input',onPhoneInput)
        function onPhoneInput() {
          let entered = this.value;
          if (isPhoneValid(entered)) {
            callbackPhone.style.borderColor = 'green';
          }else{
            callbackPhone.style.borderColor = 'red';
          }
        }


      }

    })

  }
}

export default order
