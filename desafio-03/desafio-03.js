(function(){

    "use script";

    // Desafio da semana #3

    // Declarar uma variável qualquer, que receba um objeto vazio.
    let myVar = {};

    console.log(myVar)

    /*
    Declarar uma variável `pessoa`, que receba suas informações pessoais.
    As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
    - `nome` - String
    - `sobrenome` - String
    - `sexo` - String
    - `idade` - Number
    - `altura` - Number
    - `peso` - Number
    - `andando` - Boolean - recebe "falso" por padrão
    - `caminhouQuantosMetros` - Number - recebe "zero" por padrão
    */
    let pessoa = {
        nome: 'Rubens',
        sobrenome: 'Filipe',
        sexo: 'M',
        idade: 25,
        altura: 1.72,
        peso: 70,
        andando:false,
        caminhouQuantosMetros:0
    }

    console.log(pessoa)

    /*
    Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
    alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
    for chamado.
    */
    pessoa.fazerAniversario = function fazerAniversario(){
        pessoa.idade++;
        return pessoa.idade;
    }

    console.log(pessoa.fazerAniversario())
    console.log(pessoa)

    /*
    Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
    características:
    - Esse método deve receber por parâmetro um valor que representará a quantidade
    de metros caminhados;
    - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
    valor dessa propriedade a quantidade passada por parâmetro;
    - Ele deverá modificar o valor da propriedade `andando` para o valor
    booleano que representa "verdadeiro";
    */
    pessoa.andar = function andar(numberMeters){
        pessoa.andando = true;
        pessoa.caminhouQuantosMetros = numberMeters + pessoa.caminhouQuantosMetros
        return `A pessoa esta andando: ${pessoa.andando} e caminhou ${pessoa.caminhouQuantosMetros} metros`;
    }

    console.log(pessoa.andar(300))
    console.log(pessoa.andar(30))
    console.log(pessoa)

    /*
    Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
    da propriedade `andando` para o valor booleano que representa "falso".
    */
    pessoa.parar = function parar(){
        pessoa.andando = false
        return `${pessoa.andando}`
    }

    console.log(pessoa.parar(300))
    console.log(pessoa)

    /*
    Crie um método chamado `nomeCompleto`, que retorne a frase:
    - "Olá! Meu nome é [NOME] [SOBRENOME]!"
    */
    pessoa.nomeCompleto = function nomeCompleto(){
        return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`
    }

    console.log(pessoa.nomeCompleto())
    console.log(pessoa)

    /*
    Crie um método chamado `mostrarIdade`, que retorne a frase:
    - "Olá, eu tenho [IDADE] anos!"
    */
    pessoa.mostrarIdade = function mostrarIdade(){
        return `Olá, eu tenho ${pessoa.idade} anos!`
    }

    console.log(pessoa.mostrarIdade())
    console.log(pessoa)

    /*
    Crie um método chamado `mostrarPeso`, que retorne a frase:
    - "Eu peso [PESO]Kg."
    */
    pessoa.mostrarPeso = function mostrarPeso() {
        return `Eu peso ${pessoa.peso}Kg.`
    }

    console.log(pessoa.mostrarPeso())
    console.log(pessoa)

    /*
    Crie um método chamado `mostrarAltura` que retorne a frase:
    - "Minha altura é [ALTURA]m."
    */
    pessoa.mostrarAltura = function mostrarAltura() {
        return `Minha altura é ${pessoa.altura}m.`
    }

    console.log(pessoa.mostrarAltura())
    console.log(pessoa)

    /*
    Agora vamos brincar um pouco com o objeto criado:
    Qual o nome completo da pessoa? (Use a instrução para responder e comentários
    inline ao lado da instrução para mostrar qual foi a resposta retornada)
    */
    console.log( pessoa.nomeCompleto() )

    /*
    Qual a idade da pessoa? (Use a instrução para responder e comentários
    inline ao lado da instrução para mostrar qual foi a resposta retornada)
    */
    console.log(pessoa.mostrarIdade())

    /*
    Qual o peso da pessoa? (Use a instrução para responder e comentários
    inline ao lado da instrução para mostrar qual foi a resposta retornada)
    */
    console.log(pessoa.mostrarPeso())

    /*
    Qual a altura da pessoa? (Use a instrução para responder e comentários
    inline ao lado da instrução para mostrar qual foi a resposta retornada)
    */
    console.log(pessoa.mostrarAltura())

    /*
    Faça a `pessoa` fazer 3 aniversários.
    */
    pessoa.fazerAniversario()
    pessoa.fazerAniversario()
    pessoa.fazerAniversario()
    console.log(pessoa.idade)

    /*
    Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
    comentários inline ao lado da instrução para mostrar qual foi a resposta
    retornada)
    */
    // 29

    /*
    Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
    com metragens diferentes passadas por parâmetro.
    */
    pessoa.andar(20)
    pessoa.andar(40)
    pessoa.andar(60)
    console.log( pessoa.caminhouQuantosMetros )

    /*
    A pessoa ainda está andando? (Use a instrução para responder e comentários
    inline ao lado da instrução para mostrar qual foi a resposta retornada)
    */
    console.log(pessoa.andando)
    // true

    /*
    Se a pessoa ainda está andando, faça-a parar.
    */
    pessoa.parar()
    console.log(pessoa.andando)
    // false 

    /*
    E agora: a pessoa ainda está andando? (Use uma instrução para responder e
    comentários inline ao lado da instrução para mostrar a resposta retornada)
    */
    console.log(pessoa.andando)
    // false

    /*
    Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
    inline ao lado da instrução para mostrar a resposta retornada)
    */
    console.log(pessoa.caminhouQuantosMetros)
    // 450 

    /*
    Agora vamos deixar a brincadeira um pouco mais divertida! :D
    Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
    retornar a string:
    - "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

    Só que, antes de retornar a string, você vai fazer algumas validações:
    - Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
    apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
    - Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
    palavra "ano" ao invés de "anos", pois é singular;
    - Se a quantidade de metros caminhados for igual a `1`, então a palavra que
    deve conter no retorno da frase acima é "metro" no lugar de "metros".
    - Para cada validação, você irá declarar uma variável localmente (dentro do
    método), que será concatenada com a frase de retorno, mostrando a resposta
    correta, de acordo com os dados inseridos no objeto.
    */
    // ?

    // Agora, apresente-se ;)
    pessoa.apresentacao = function apresentacao() {
        let sex = (pessoa.sexo == 'M') ? 'o' : 'a';
        let age = (pessoa.idade <= 1) ? 'ano' : 'anos';
        let metro = (pessoa.caminhouQuantosMetros < 2) ? 'metro' : 'mestros'

        return `Olá, eu sou ${sex} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${age}, ${pessoa.altura}, meu peso é ${pessoa.peso}kg e, só hoje, 
eu já caminhei ${pessoa.caminhouQuantosMetros} ${metro}!`;

    }

    let pessoaDois = pessoa;
    pessoaDois.nome = "Luciana";
    pessoaDois.sobrenome = "Luiza";
    pessoaDois.sexo = "F";
    pessoaDois.idade = 28;
    pessoaDois.altura = 1.80;
    pessoaDois.peso = 70;
    pessoaDois.andando = false;
    pessoaDois.caminhouQuantosMetros = 0;


    console.log(pessoaDois.apresentacao())


})();