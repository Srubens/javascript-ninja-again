// Desafio da semana #4

/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function isTruthy(param){
    return !!param;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log( isTruthy(0) )
console.log( isTruthy(-0) )
console.log( isTruthy(undefined) )
console.log( isTruthy(NaN) )
console.log( isTruthy(null) )

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log( isTruthy( {} ) )
console.log( isTruthy( [] ) )
console.log( isTruthy( function myfunction(){ return `ola mundo` } ) )
console.log( isTruthy( 2 ) )
console.log( isTruthy( 'rubens' ) )
console.log( isTruthy( '0' ) )
console.log( isTruthy( -2 ) )
console.log( isTruthy( 2.5 ) )
console.log( isTruthy( [0] ) )
console.log( isTruthy( 'ferreira' ) )

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Fiat',
    modelo: 'Argo',
    placa: 'SDK 8724',
    ano:2020,
    cor:'vermelho',
    quantasPortas:4,
    assentos:5,
    quantidadePessoas:0
};

console.log( carro )

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function mudarCor(param){
    return carro.cor = param;
}

console.log( carro.mudarCor('preto') )

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function obterCor(){
    return carro.cor;
}

console.log( carro.obterCor() )

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function obterModelo(){
    return carro.modelo
}

console.log( carro.obterModelo() )

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function obterMarca(){
    return carro.marca
}

console.log( carro.obterMarca() )

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function obterMarcaModelo(){
    return `Esse carro é um ${carro.marca} ${carro.modelo}`
}

console.log( carro.obterMarcaModelo() )

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function (numeroPessoas) {

    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';

    if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {

        return 'O carro já está lotado!';
    }

    if (totalPessoas > carro.assentos) {

        return 'Só cabem mais ' + pluralOuSingular + ' mais ' + quantasPessoasCabem + ' ' + pluralOuSingular + '!';

    }

    carro.quantidadePessoas += numeroPessoas;
    return 'Já temos ' + totalPessoas + ' pessoas no carro!';

};

carro.addPessoas = function(numPessoas){

    let totalPessoas = carro.quantidadePessoas + numPessoas;
    let qntasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    let pluralSingular = qntasPessoasCabem === 1 ? 'pessoa' : 'pessoas';

    if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ){
        return `O carro já está lotado!`;
    }

    if( totalPessoas > carro.assentos ){
        return `Só cabem no carro ${qntasPessoasCabem} ${pluralSingular}!`;
    }

    carro.quantidadePessoas += numPessoas;
    return `Já temos ${totalPessoas} pessoas no carro!`;

};

// console.log( carro.addPessoas(7) );
// console.log( carro.addPessoas(3) );
// console.log( carro.addPessoas(3) );
// console.log( carro.addPessoas(2) );
// console.log( carro.addPessoas(2) );

console.log( carro );

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log( carro.obterCor() )

// Mude a cor do carro para vermelho.
console.log( carro.mudarCor('Vermelho') )

// E agora, qual a cor do carro?
console.log( carro.obterCor() )

// Mude a cor do carro para verde musgo.
console.log( carro.mudarCor('Verde Musgo') )

// E agora, qual a cor do carro?
console.log( carro.obterCor() )

// Qual a marca e modelo do carro?
console.log( carro.obterMarcaModelo() )

// Adicione 2 pessoas no carro.
console.log( carro.addPessoas(2) )

// Adicione mais 4 pessoas no carro.
console.log( carro.addPessoas(4) )

// Faça o carro encher.
console.log( carro.addPessoas(3) )

// Tire 4 pessoas do carro.
carro.quantidadePessoas = 1;
console.log( carro )

// Adicione 10 pessoas no carro.
console.log( carro.addPessoas(10) )

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas)