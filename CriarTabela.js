const tbl = document.querySelector('#tbl-body')

class CriarTabela {
  
  static criarTabela = (dados, index) =>{
  let output = "";
  dados.map(contas =>{
    output +=`
        <tr class="valores-tabela">
          <td>${contas.nome}</td>
          <td>${contas.valor}</td>
          <td>${contas.tipo}</td>
          <td id="res" class="botao">
            <a id="re" ${index} class="btnexcluir" href="#">
             <img id="re" src="./img/delete.png">
            </a>
          </td>
        </tr>
    `
  })
  tbl.innerHTML = output;
 }
}

export default CriarTabela;