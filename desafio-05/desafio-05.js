/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let myarr = [ '12', 12, false, 87.4, { name:'Rubens' } ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retonarArr(param = []){
    return param;
}

console.log( retonarArr(myarr) )

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myarr[2] )

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newArr(paramA = [], paramB){
    paramB = paramA[paramB]
    return paramB
}

let arrFood = ['banana', 'maça', 'pera']

console.log( newArr([23,43,15], 0) )
console.log( newArr(arrFood, 0) )


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrFive = [ 'teste', true, { name:'rubens' }, function hello(){ return `ola mundo!` }, 87 ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newArr(arrFive, 0))
console.log(newArr(arrFive, 1))
console.log(newArr(arrFive, 2))
console.log(newArr(arrFive, 3))
console.log(newArr(arrFive, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookname){
    let bookObj = {
        "A estratégia do oceano azul":{
            livro:"A estratégia do oceano azul",
            quantidadePaginas:233,
            author:"W. Chan Kim - Renée Mauborgne",
            editora:"ELSERVIER",
        },
        "Quem vende enriquece":{
            livro:"Quem vende enriquece",
            quantidadePaginas:286,
            author:"Napoelon Hill",
            editora:"FUNDAMENTO"
        },
        "Quem convence enriquece":{
            livro:"Quem convence enriquece",
            quantidadePaginas:279,
            author:"Napoelon Hill",
            editora:"CITADEL"
        }
    }
    
    if(!bookObj[bookname]){
        return bookObj;
    }

    return bookObj[bookname]
}

console.log(book("Quem vende enriquece") )

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let nomeDoLivro = "A estratégia do oceano azul";
// console.log(`O livro ${nomeDoLivro} tem ${book(nomeDoLivro).quantidadePaginas}` )
console.log(`O livro ${book(nomeDoLivro).livro} tem ${book(nomeDoLivro).quantidadePaginas}` )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${book(nomeDoLivro).livro} tem ${book(nomeDoLivro).author}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${book(nomeDoLivro).livro} foi publicado pela editora ${book(nomeDoLivro).editora}`)