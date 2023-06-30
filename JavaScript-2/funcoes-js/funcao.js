
// calcular media inicio



 calMed = (notas) => {
    let soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += notas[c];

    }
    media = soma / notas.length;
    return media;
}
aprovacao = ( notas) => {
    let media = calMed(notas);
    let condicao = media >= 7 ? "aprovado" : "reprovado";
    return 'Média: ' + media +'- resultado: ' + condicao;
}


document.addEventListener('submit', (evento) =>{
    evento.preventDefault(); //para empedir que o html funcione de forma padrão
    evento.stopPropagation();
    let formulario = document.getElementById('formularioP');
    let dados = new FormData(formulario);
    let objeto = {};
    let notas = [];
    for(let key of dados.keys ()){
        objeto[key] = dados.get(key);
        //  push adiciona itens no array
        notas.push( parseInt(dados.get(key)));
    }
    // console.log(notas);

    // console.log(objeto);
    texto = aprovacao(notas);
    document.getElementById('resultado').innerHTML = texto;
}); 

// calcular media fim






// CÓPIA DO CÓDIGO DO PROFESSOR !!!!!




// * Formulário envio de dados para cálculo da média 




const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', ( evento ) =>{

        evento.preventDefault(); // faz uma interrupção no evento natural do html
        evento.stopPropagation(); // impedi a propagação do evento atual nas faces de captura e burbulhamento.

        if( this.getAttribute('class').match(/erro/) ) {  // condiciona se o a'class' der erro, e retorna <false>
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; //se ouver um digitos , ele devolve um number, se não, devolve um 0

            if(!isNaN(numero)) {       // se for diferente(!) de isNaN, vai passar na array um número, *no console.
                notas.push(numero);
            }

        }

        // console.log(notas); // serve para acompanhar no console as funções por "baixo dos panos"

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', (event) =>{ // quando perder o foco vai disparar uma sequência de eventos para verificar se está de acordo com o que foi pedido no (ex; placeholder).

        event.preventDefault(); // para evitar o submit sem antes passar por essa condição de validção ( validaCamp())

        if(this.value == ""){ // se este elemento estiver vazio...
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho"; //mensagem de erro para o usuário
            this.classList.add('erro'); // o campo que disparou essa ação
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = ""; // não adiciona a mensagem 
            this.classList.remove('erro'); // remove o class erro
            this.parentNode.classList.remove('erro'); 
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout',(event) => {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 
			// if avalia se o let numero não está  vazio , se é um número de (0-9) (*=todos), se >=0 e se <=10.
        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


function validaEmail(elemento){ //valida se é um emal

    elemento.addEventListener('focusout', (event) =>{

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i; // condição para a estrutura so email ex: nome@gmail.com
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposObrigatorios) {   // o campo que estará sendo avaliado
    validaCampo(emFoco); 
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}