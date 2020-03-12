(function (){

  'use script';

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.
  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $visor = document.querySelector('[data-js="visor"]');
  var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = document.querySelector('[data-js="button-ce"]');
  var $buttonEqual = document.querySelector('[data-js="button-equal"]');

  function myEventArray(btn, event){
    return Array.prototype.forEach.call(btn, function(button) {
      button.addEventListener('click', event, false);
    });
  }

  function events(event, fncExec){
    return event.addEventListener('click', fncExec,false)
  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = "";
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations(){
    return Array.prototype.map.call($buttonsOperations, function(button){
      return button.value;
    });
  }

  function removeLastItemIfItIsAnOperator(string) {
    if(isLastItemAnOperation(string)) {
      return string.slice(0, -1);
    }
    return string;
  }

  function handleClickEqual(){
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    let allValues = $visor.value.match(getRegExpOperations());
    $visor.value = allValues.reduce(calculateAllValue);
  }

  function getRegExpOperations(){
    return new RegExp('\\d+['+ getOperations().join('') + ']?','g');
  }

  function calculateAllValue(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = getLastOperator(actual)
    return doOperatioin(operator, firstValue, lastOperator, lastValue) + lastOperator;
  }

  function getLastOperator(value){
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
  }

  function doOperatioin(operator, firstValue, lastOperator, lastValue){
     switch (operator) {
      case '+':
        return (Number(firstValue) + Number(lastValue));
      case '-':
        return (Number(firstValue) - Number(lastValue));
      case 'x':
        return (Number(firstValue) * Number(lastValue));
      case '÷':
        return (Number(firstValue) / Number(lastValue));
    }
  }

  myEventArray($buttonsNumbers, handleClickNumber)
  myEventArray($buttonsOperations, handleClickOperation)

  events($buttonCE, handleClickCE) 
  events($buttonEqual, handleClickEqual) 

})()