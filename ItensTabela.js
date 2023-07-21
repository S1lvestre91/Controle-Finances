

const CriarTabela = (conta)=>{
  const tabela = document.getElementById("tbl");
  const tr = document.createElement("tr")
  tr.setAttribute("class", "valores-tabela")
  const td1 = document.createElement("td")
  const td2 = document.createElement("td")
  const td3 = document.createElement("td")
  td3.setAttribute("class", "valorColor")
  const td4 = document.createElement("td")
 
  
  td1.innerText = conta.nome
  td2.innerText = conta.valor
  td3.innerText = conta.tipo
  td4.innerText = "teste"
  
  
  
  tr.append(td1, td2, td3, td4)
  
  tabela.appendChild(tr)

  
  console.log("tabela criada")
  
}

export default CriarTabela;