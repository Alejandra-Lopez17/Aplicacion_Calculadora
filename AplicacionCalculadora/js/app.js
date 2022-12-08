console.log('Aplicación Calculadora');

function sumar(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}
function restar(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la resta es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}
function multiplicar(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la multiplicación es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}
function dividir(){
  const forma = document.getElementById('forma');
  let operandoA = forma['operandoA'];
  let operandoB = forma['operandoB'];
  let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
  if(isNaN(resultado))
    resultado = 'La operación no incluye números';
  document.getElementById('resultado').innerHTML = `El resultado de la División es: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}