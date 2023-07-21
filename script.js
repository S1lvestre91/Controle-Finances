const btn = document.getElementById("btn");
const name = document.getElementById("Nome");
const valor = document.getElementById("Valor");
const despesa = document.getElementById("Despesa")
const receita = document.getElementById("Receita")
const tbody = document.getElementById("tbl-body")

const btnE = document.querySelector("#btnE")

const treceitas = document.getElementById("rv")
const tdespesa = document.getElementById("dv")
const tvalor = document.getElementById("tv")
const btnRadio = document.querySelector(".form-item-radio");


let items =[];

window.onload = function() {
  console.log("Aqui tem que.carregar a tabela")
  let meuArray = localStorage.getItem("Contas")
  if (localStorage.Contas) {
    loadItem()
    totais();
  }
  
}


btn.addEventListener("click", (e)=>{
  e.preventDefault()
  if (despesa.checked == true) {
    items.push({
      nome: name.value,
      valor: valor.value,
      tipo: despesa.value
      
    })
  }
  if(receita.checked == true){
    items.push({
      nome: name.value,
      valor: valor.value,
      tipo: receita.value
    })
  }
  else if(despesa.checked == false && receita.checked == false){
    
    btnRadio.setAttribute("id", "teste");
    alert("Selecione uma das opções Receita ou Despesa!")
    setTimeout(()=>{
      btnRadio.removeAttribute("id","teste")
    },2000)
     
  }
  setItemDb()
  loadItem()
  totais()
  
  name.value = ""
  valor.value = ""
  despesa.checked = false
  receita.checked = false
  
  console.log(items)
})



function insertItems (item, index){
  let tr = document.createElement("tr")
  tr.setAttribute("class", "valores-tabela")
  tr.innerHTML +=`
    <td>${item.nome}</td>
    <td>R$: ${item.valor}</td>
    <td>${item.tipo}</td>
    <td>
      <button class="btnE" onclick="deleta(${index})">
        <img id="re" src="./img/delete.png">
      </button>
    </td>
  `
  tbody.appendChild(tr)
}

function totais (){
  
  const totalReceita = items.filter(item => item.tipo === "Receita").map((vItem)=>Number(vItem.valor)).reduce((total, valores)=> total + valores, 0).toFixed(2)
  
  
  const totalDespesa = items.filter(item => item.tipo === "Despesa").map((vItem)=>Number(vItem.valor)).reduce((total, valores)=> total + valores,0).toFixed(2)
  
 
  const total = (totalReceita - totalDespesa).toFixed(2)
  treceitas.innerText = totalReceita;
  tdespesa.innerText = totalDespesa;
  tvalor.innerText = total
}
// Deleta o item no localStorage
function deleta(index){
  items.splice(index, 1)
  setItemDb()
  loadItem()
  totais()
}
//Carrega os items na pagina.
function loadItem(){
  //obtendo os dados do LocalStorage
  items = getItemDb()
  tbody.innerHTML =""
  //laço de repetição que ira criar os dados na pagina.
  items.forEach((item, index)=>{
    insertItems(item, index)
  })
}
// Pega os dados criados no LocalStorage
const getItemDb = ()=> JSON.parse(localStorage.getItem("Contas")) ??[];
//Cria os dados no localstorage
const setItemDb = () => localStorage.setItem("Contas", JSON.stringify(items))

