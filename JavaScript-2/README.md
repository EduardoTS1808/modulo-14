 # JavaScript

## Exercícios:

### 1. Resolva as operações:

● 10 + 15 = 25
● “10” + 2 ='102'
● “10” * 2 = "20"
● “10” / 3 = "3.33"
● “10” % 3 = "1"
● 10 + true = 11
● 10 == ”10” = true
● 10 === “10” = false
● 10 < 11 = true
● 10 > 12 = false
● 10 <= 10.1 = true
● 10 > 9.99 = true
● 10 != “dez” = true
● 10 + true =  11
● “dez” + true = 'deztrue' 
● 10 + false = 10
● 10 * false = 0
● true + true = 2
● 10++ = incremento 10
● 10-- = descremento 10
● 1 & 1 = 1
● 1 & 0 = 0
● 0 & 0 = 0 
● 1 & 0 = 0
● 0 / 1 = 0
● 5 + 5 == 10 = true
● “5” + ”5” == 10 = false
● “5” * 2 > 9 = true
● (10 + 10) * 2 = 40
● 10 + 10 * 2 = 30

### 2. Responda as perguntas de acordo com as variáveis.

var branco = “preto”;
var preto = “cinza”;
var cinza = “branco”;
var carro = “preto”;
var valor = 30000;
var prestacao = 750;

a) branco == “branco”
	false
b) branco == cinza
	false
c) carro === branco
	true
d) var cavalo = carro == “preto” ? “cinza” : “marron”;
	"cinza"
e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação.

	let entrada = 3000;
	let resultado = 0;
	resultado = (valor - entrada) / prestacao;
	
	 console.log(" Você pagarar em: "+resultado+" prestações");
		
	Você pagarar em: 36 prestações
	
f) Somando as variáveis de cores é formada uma string de quantos caracteres?
	16 caracteres