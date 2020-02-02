/*
Crie um array com 5 items (tipos variados).
*/
let arrnew = [ "rubens", {'name':"filipe"}, function hello(){ return `ola mundo!` }, 2.5, true ]
console.log(arrnew)

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(param){

	let result = arrnew.push(param)
	return result

}

// addItem("teste")
// addItem({job:"programador"})
console.log(arrnew)

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(["teste", {job:"programador"}, false])
console.log(arrnew)

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// console.log(`O segundo elemento do segundo array é ${arrnew[1]["name"]}`)
console.log(`O segundo elemento do segundo array é ${arrnew[5][1]["job"]}`)

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${arrnew.length} itens.`)

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arrnew[5].length} itens.`)

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num10 = 10;
while(num10 <= 20){
	num10 % 2 === 0 ? console.log(num10) : '';
	num10++
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
var num10 = 10
while(num10 <= 20){
	num10 % 2 !== 0 ? console.log(num10) : '';
	num10++
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(var a = 100; a <= 120; a++){
	a % 2 === 0 ? console.log(a) : '';
	a++
}

console.log( 'Números ímpares entre 111 e 125:' );
for(var a = 111; a <= 125; a++){
	a % 2 !== 0 ? console.log(a) : '';
	a++
}