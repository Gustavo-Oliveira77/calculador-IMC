//PEGANDO ELEMENTOS DO HTML
const calcular = document.getElementById("calcular");

//ATRIBUINDO A VARIAVEIS ELEMENTOS DO HTML E SEUS VALORES MODIFICADOS OU NÃO PELO REPLACE
function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value.replace(",", ".");
  const peso = document.getElementById("peso").value.replace(",", ".");
  const resultado = document.getElementById("resultado");

  //AQUI ESTAMOS VERIFICANDO SE TODOS OS VALORES ESTÃO PREENCHIDOS, SE SIM EXECULTAR A FORMULA 
  // (peso / (altura * altura))... O toFixed(1) É PARA ACEITAR APENAS UMA CASA DECIMAL APÓS O PONTO
  if (nome !== "" && altura !== "" && peso !== "") {
    const valorImc = (peso / (altura * altura)).toFixed(1);

    //ATRIBUINDO UMA VATRIAVEL COM VALOR INICIAL VAZIO PARA ARMAZENAR POSTERIORES VALORES NELA
    let classificacao = "";

    //FAZENDO UMA SEQUENCIA DE IF´S  ELSE´IFS  PARA EXIBIR NO RESULTADO SOMENTE O TEXTCONTENT IDEAL PARA CADA VALOR
    if (valorImc < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorImc < 25) {
      classificacao = "com Peso ideal , Parabéns !!";
    } else if (valorImc < 30) {
      classificacao = "levemente acima do peso ";
    } else if (valorImc < 35) {
      classificacao = "com obesidadade grau 1";
    } else if (valorImc < 40) {
      classificacao = "com obesidadade grau 1";
    } else {
      classificacao = "com obesidade grau 3, por favor, cuide-se !!";
    }

    //AQUI É ONDE O VALOR DE CADA VARIAVEL ACIMA VAI APARECER DEPOIS DE TODO OS CALCULOS SEREM FEITOS 
    //ESSE SERÁ O TEXTO FINAL VISTO PELO USUARIO
    resultado.textContent = `${nome}, seu IMC é ${valorImc}, você está ${classificacao}`;
  } 
  //CASO OS CAMPOS NÃO ESTEJAM PREENCIDOS ESSA NOTIFICAÇÃO É QUE O USUARIO VERÁ
  else {
    resultado.textContent = "Preencha todos os campos";
  }
}
//ADICIONANDO EVENTO DE CLICK A 'calcular', COM O CALLBACK imc(função execultada no inicio do código)
calcular.addEventListener("click", imc);
