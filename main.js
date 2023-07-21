import salvarLocal from "./salvarLocal.js"

import CrairTabela from  "./ItensTabela.js"

import Criar from "./CriarTabela.js"



const btn = document.getElementById("btn");

const name = document.getElementById("Nome");
const valor = document.getElementById("Valor");
const despesa = document.getElementById("Despesa")
const receita = document.getElementById("Receita")
const tbody = document.getElementById("tbl-body")
const btnRadio = document.querySelector(".form-item-radio");



const conta = {
  nome: "",
  valor: 0,
  tipo: "",
}



window.onload = function() {
  console.log("Aqui tem que.carregar a tabela")
  let meuArray = localStorage.getItem("Contas")
  if (localStorage.Contas) {
    Criar.criarTabela(JSON.parse(meuArray))
  }
  
}



btn.addEventListener("click", function(e){
  e.preventDefault();
  
  if(despesa.checked == true){
    conta.nome = name.value;
    conta.valor = valor.value;
    conta.tipo = despesa.value;
  
    //CrairTabela(conta);
    salvarLocal.setLocalSto(conta);
    salvarLocal.getLocalSto()
    Criar.criarTabela(salvarLocal.getLocalSto())
  }
  else if(despesa.checked == false && receita.checked == false){
    
    btnRadio.setAttribute("id", "teste");
    alert("Selecione uma das opções Receita ou Despesa!")
    setTimeout(()=>{
      btnRadio.removeAttribute("id","teste")
    },2000)
     
  }
  else if(receita.checked == true){
    conta.nome = name.value;
    conta.valor = valor.value;
    conta.tipo = receita.value;
    //CrairTabela(conta);
    salvarLocal.setLocalSto(conta);
    salvarLocal.getLocalSto()
    Criar.criarTabela(salvarLocal.getLocalSto())
  }
  
});


tbody.addEventListener("click", function(event) {
  console.log("tetey");
  let btnexcluir = event.target.id === "re"
  console.log(btnexcluir)
  var meupai = document.getElementById("re").parentNode
  let rem = meupai.dataset.nome
  console.log(rem)
  if(btnexcluir){
   // salvarLocal.removerItem(rem) ;
  }

})