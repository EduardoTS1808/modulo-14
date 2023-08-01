import produtos from './produtos.js';


let tbody = document.getElementById('tbody')
let arrayPromocao = []

let btnPromo = document.getElementById('btnPromo')
let btnTodos = document.getElementById('btnTodos')
let btnCor = document.getElementById('btnCor')

// console.log(produtos);


btnPromo.addEventListener('click', ()=> {
  
  addprodutsPromo()
})
function addprodutsPromo(){
  produtos.map(produtos=>{
    produtos.name += ' impossível perder!!'
  })  
  produtos.forEach(produtos=>{
    let nomeProduto = produtos.name
    let valorProduto = produtos.preco
    
    let tr = tbody.insertRow()
    
    
    if(produtos.preco <= 1400 ){
      
      let nome = tr.insertCell()
      let valor = tr.insertCell()
      
      nome.innerText = nomeProduto
      valor.innerHTML = valorProduto
      
      arrayPromocao.push(produtos)
    }
    
    
    
    
  })
  
}
btnTodos.addEventListener('click', ()=>{
  produtos.forEach(produtos=>{
    let nomeProduto = produtos.name
    let valorProduto = produtos.preco
    
    let tr = tbody.insertRow()
    
    let nome = tr.insertCell()
    let valor = tr.insertCell()
    
    nome.innerText = nomeProduto
    valor.innerHTML = valorProduto
    arrayPromocao.push(produtos)
  })
})


////////////////////

/*
  ver se existe o produto da cor definida e cria uma lista com os produtos que tem a cor

  Utilizando class
*/
//inicio

class Produto{
  constructor(cor){
    this.cor = cor
    this.item = []
  }
  criaLista(){
    this.procuraProduto()
    
    let Produtos = this.item
    Produtos.forEach(Produtos=>{
      let nomeProduto = Produtos.name
      let valorProduto = Produtos.preco
      
      let tr = tbody.insertRow()
      
      let nome = tr.insertCell()
      let valor = tr.insertCell()
      
      nome.innerText = nomeProduto
      valor.innerHTML = valorProduto
    })
    
  }
  
  procuraProduto(){
    produtos.filter((array)=>{
      if( array.cor === this.cor) {
        
        this.item.push(array)
        // console.log(array);
        
      }else{
        return false
      }
    })
    
    
  }
  
  
  
}

const myProduto = new Produto('branco')

btnCor.addEventListener('click', ()=>{ myProduto.criaLista()})

//fim

/////////////////////////


class estudo {
  constructor(idade){
    this.idade = idade
    
    
  }
  present(idade){
    return  'Eu tenho ' + this.idade + ' anos';
  }
}
// Herança de class

class Profissao extends estudo{
  constructor(idade, profi){
    super(idade)
    this.profissao = profi
  }
  mostrar(){
    return this.present() + ', e trabalho como ' + this.profissao;
  }
}



let euPerfil = new Profissao(23,"front-end developer")

console.log(euPerfil.mostrar());

/*
 * array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])

*/


let nomes = [ 'Alice', 'Aline', 'Bruno', 'João', 'Aline']

const quantidadeNomes = nomes.reduce((todosNomes, nome)=>{
  if(nome in todosNomes){
    todosNomes[nome]++
  }else{
    todosNomes[nome] = 1
  }
  
  return todosNomes
}, {})
console.log(quantidadeNomes)


let pessoas = [
  { nome: 'Eduardo', idade: 21 },
  { nome: 'Ilan', idade: 20 },
  { nome: 'Daniel', idade: 23 },
  { nome: 'Queli', idade: 23 }
];

function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce( (acml, obj)=> {
    let key = obj[propriedade];
    if (!acml
      [key]) {
        acml
        [key] = [];
      }
      acml[key].push(obj);
      return acml;
    }, {});
  }
  
  let grupodePessoas = agruparPor(pessoas, 'idade');
  
  console.log(grupodePessoas);
  
  
  