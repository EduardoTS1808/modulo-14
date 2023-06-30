
class MetodoAprovacao{
    constructor(){
        this.notas = [];
    }
    Dados(){

        let valores = document.getElementsByClassName('numero');
        let notasAluno = [];
        let soma = 0;
        let media = '';
        for(let v = 0; v < valores.length; v++){
            notasAluno.push(valores[v].value)
        }
        notasAluno.forEach(v => { soma += +(v) })
        media = soma / 4;
        return media
        
    }
    Media(media){
            let texto = this.Dados(media) >= 7 ?   'aprovado' : 'reprovado';
            console.log(texto);
           document.getElementById('resultado').innerText = texto;
    }
}
const metodo = new MetodoAprovacao();

function validaCampo(elemento){

    elemento.addEventListener('focusout', (event) => {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', (event) => {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 
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


function validaEml(elemento){

    elemento.addEventListener('focusout', (event) => {

        event.preventDefault();

        const emailVal = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if(this.value.match(emailVal)) {
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

// criar minha função para filtrar o campo do UF do formulário
    function validaUF(elemento){
        elemento.addEventListener('focusout', (event) => {
             event.preventDefault();

             const ufValido = /^[A-Z]{2}$/;
             if(this.value.match(ufValido)) {
                document.querySelector('.mensagem').innerHTML = "tudo OK";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
            } else {
                document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;
            }
    
        });
    }                               //está funcinando mais ainda tenho que filtrar para somente 2 digitos de letra


validaCampo()
let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUf = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEml(emFoco);
}
for( let emFoco of camposUf) {
    validaUF(emFoco);
}