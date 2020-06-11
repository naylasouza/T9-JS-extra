// Aqui você vai refrescar a memória com métodos DOM que o javascript consegue manipular. 
// Você vai utilizar: 
// getElementById, querySelector, addEventListener, evento.preventDefault(), getElementById, createElement, appendChild.
// CSS que será utilizado no JavaScript:
// lista__form
// extrato__table
// listaInputNome
// listaInputValor
// listaInputData
// Para criar a tabela: 
// tr
// td
// 1. Dado o código com comportamentos  nos inputs de pegar os valores e adicionar na tabela, de acordo com o exemplo deste site: https://listagastos.oskojess.repl.co/.
// Com o código disponibilizado, 
// Utilize o index.js para criar esses comportamentos e inserir nos inputs do HTML. 


const formulario = document.querySelector(".lista__form");
//criando uma variavel para o elemento tabela
const tabela = document.querySelector('table')
//criando um elemento linha da tabela


formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
const linhaTabela = document.createElement('tr')

  /*inserir aqui o código*/
//pegando os inputs do html e atribuindo as variaveis 
  const itemInput = document.getElementById('input-item');
  const valorInput = document.getElementById('input-valor');
  const dataInput = document.getElementById('input-data');
  
  //criando elentos de tabels para cada novo input criado
  const itemTabela = document.createElement('td');
  const valorTabela = document.createElement('td');
  const dataTabela = document.createElement('td');
  

  //adicionando os itens do input dentro da linha da tabela
  itemTabela.textContent = itemInput.value;
  valorTabela.textContent = valorInput.value;
  dataTabela.textContent = dataInput.value;

  //adicionando o item da tabela dentro da estrutura da tabela
  linhaTabela.appendChild(itemTabela);
  linhaTabela.appendChild(valorTabela);
  linhaTabela.appendChild(dataTabela);
  //adicionando a linha da tabela a estrutura master da tabela
  tabela.appendChild(linhaTabela);

  //limpando o input após o submit
  itemInput.value = '';
  valorInput.value = '';
  dataInput.value = '';



});