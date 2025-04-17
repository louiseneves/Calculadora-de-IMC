const botaoCalcular = document.getElementById('botaoCalcular');
const resultadoDiv = document.getElementById('resultado');
const botaoLimpar = document.getElementById('botaoLimpar');
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.textContent = 'Preencha os campos corretamente!';
        resultadoDiv.className = '';
        return;
    }

    const resultadoIMC = (peso / (altura * altura)).toFixed(2);
    let mensagem = '';
    let classeResultado = '';

    if (resultadoIMC < 16) {
        mensagem = 'Baixo peso muito grave';
        classeResultado = 'baixo-peso-grave';
    } else if (resultadoIMC < 17) {
        mensagem = 'Baixo peso grave';
        classeResultado = 'baixo-peso-grave';
    } else if (resultadoIMC < 18.5) {
        mensagem = 'Baixo peso';
        classeResultado = 'baixo-peso';
    } else if (resultadoIMC < 25) {
        mensagem = 'Peso normal';
        classeResultado = 'peso-normal';
    } else if (resultadoIMC < 30) {
        mensagem = 'Sobrepeso';
        classeResultado = 'sobrepeso';
    } else if (resultadoIMC < 35) {
        mensagem = 'Obesidade grau 1';
        classeResultado = 'obesidade-grau-1';
    } else if (resultadoIMC < 40) {
        mensagem = 'Obesidade grau 2';
        classeResultado = 'obesidade-grau-2';
    } else {
        mensagem = 'Obesidade grau 3';
        classeResultado = 'obesidade-grau-3';
    }

    resultadoDiv.textContent = `Seu IMC é ${resultadoIMC}! ${mensagem}`;
    resultadoDiv.className = `${classeResultado} animado`;
}
function resetIMC() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    resultadoDiv.textContent = '';
    resultadoDiv.className = ''; // limpa a cor também
}

botaoCalcular.addEventListener('click', function(event) {
    event.preventDefault();
    calcularIMC();
  });
  
  botaoLimpar.addEventListener('click', function(event) {
    event.preventDefault();
    resetIMC();
  });
  