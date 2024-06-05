export function mask (id) {


  function setMask() {

    //+7 (###) ###-##-##
    //+7 (___) ___-__-__

    let matrix = '+7 (###) ###-##-##';

    let i = 0, val = this.value.replace(/\D/g, '');


    function replaceFunction(string){

      if(/[#\d]/.test(string) && i < val.length){
        return val.charAt(i++); // возвращает символ под номером i+1 в строке
      }else if (i >= val.length) {
        return '';
      }else {
        return string;
      }
    }

  console.log(this.value);
    this.value = matrix.replace(/(?!\+)./g, replaceFunction); // Функция вызывается для каждого совпадения
  }

  let input = document.getElementById(id);
  input.addEventListener('input', setMask);
  input.addEventListener('focus', setMask);
  input.addEventListener('blur', setMask);

}
