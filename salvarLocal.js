//const remover = document.getElementById("res")

class SalvaLocal{
  
  
  static meuArray = [] 
  constructor(){}
  
  static setLocalSto = (conta) =>{
  
   if(localStorage.Contas){
     this.meuArray = JSON.parse(localStorage.getItem("Contas"))
   }
    let nova = conta;
    this.meuArray.push(nova)
    
    localStorage.setItem("Contas", JSON.stringify(this.meuArray))
    
  }
  static getLocalSto = () =>{
    
    if(localStorage.Conta)(
       this.meuArray = JSON.parse(localStorage.getItem("Contas"))
      )
      console.log(this.meuArray)
      return this.meuArray;
  }
 static removerItem = (ind) =>{
   
  //console.log(remover.value)
   if(localStorage.Contas){
     this.meuArray = JSON.parse(localStorage.getItem("Contas"))
     var index = this.meuArray.findIndex(obg => obg.index === ind)
   }
   this.meuArray.splice(index,1)
   console.log(this.meuArray)
 }
}
export default SalvaLocal;