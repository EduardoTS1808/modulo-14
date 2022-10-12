function calMed (notas){
    let soma = 0;
    for(c = 0; c < notas.length; c++){
        soma += notas[c];

    }
    media = soma / notas.length;
    return media;
}

function aprovacao ( notas){
    let media = calMed(notas);
    let condicao = media >= 7 ? "aprovado" : "reprovado";
    return 'Média: ' + media +'- resultado: ' + condicao;
}









document.addEventListener('submit', function(evento){
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
    console.log(notas);

    console.log(objeto);
    texto = aprovacao(notas);
    document.getElementById('resultado').innerHTML = texto;
}); 

