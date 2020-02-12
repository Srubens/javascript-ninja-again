(function(){

	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	let person = {
		name: "Rubens",
	    lastname: "Filipe",
	    age: 25
	};
	console.log( 'Propriedades de "person":' );
	console.log(person)

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log(Object.values(person))

	/*
	Crie um array vazio chamado `books`.
	*/
	let books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	books.push({ name: "Quem Vence Enriquece", pages:286  })
	books.push({ name: "A Estratégia do oceano azul", pages:233  })
	books.push({ name: "Quem convence enriquece", pages:279  })
	console.log(books)
	console.log( '\nLista de livros:' );

	/*
	Mostre no console todos os livros.
	*/
	console.log(books)

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log(books[2])
	books.pop()


	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	console.log(books)

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	books = JSON.stringify(books)
	console.log(books)
	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books)

	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books)
	console.log( '\nAgora os livros são objetos novamente:' );
	console.log(books)

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/

	for( let a = 0; a < books.length; a++ ){
		for( let prop in books[a] ){
			console.log(`${prop} : ${books[a][prop]}`)
		}
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['R','u','b','e','n','s'];
	console.log( '\nMeu nome é:' );
	console.log( myName.join('') );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	var myName = ['R','u','b','e','n','s'];
	console.log( '\nMeu nome invertido é:' );
	console.log( myName.reverse() );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log( myName.join('') )

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log(myName.sort())
	console.log(myName.join(''))


})();