let medidas = {media1: 1, medida2: 0.6}

function calc_elementos() {
  const elements = document.querySelectorAll('.medida1');
  const elements2 = document.querySelectorAll('.medida2');

  let total1 = 0;
  let total2 = 0;  
  
  let soma = 0;
  let n1 = 0;
  let n2 = 0;

  Array.from(elements).forEach((element, index) => {
    n1 += parseInt(element.value, 10);
  });

  total1 = n1 * medidas.media1;

  Array.from(elements2).forEach((element, index) => {
    n2 += parseInt(element.value, 10);
   
  });
  total2 = n2 * medidas.medida2;

  soma = total1 + total2;
  return soma;
}


function calculo(num) {
  document.querySelector('.resultado').innerHTML = calc_elementos().toFixed(2);
  document.querySelector('.qtde').innerHTML = (calc_elementos() + num).toFixed(2);
}