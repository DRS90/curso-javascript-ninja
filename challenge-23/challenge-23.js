/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
 
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
 
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function () {
  'use strict'
  const $screen = document.querySelector('[data-js="screen"')
  const cleanBtn = document.querySelector('[data-js="button-ce"]')
  const calculateBtn = document.querySelector('[data-js="button-equal"]')

  const operation = {
    '+': (number1, number2) => +number1 + +number2,
    '-': (number1, number2) => +number1 - +number2,
    'x': (number1, number2) => +number1 * +number2,
    '÷': (number1, number2) => +number1 / +number2
  }
  window.addEventListener('click', (e) => {
    if (isValidTargetValue(e.target)) {
      if (isDoubleOperator(e.target)) {
        $screen.value = $screen.value.replace(/\D$/, '')
      }
      $screen.value += e.target.value
    }
  })

  cleanBtn.addEventListener('click', () => $screen.value = 0)

  calculateBtn.addEventListener('click', calculate$ScreenExpression)

  function calculate(number1, number2, operator) {
    return operation[operator](number1, number2)
  }
  
  function isValidTargetValue(target) {
    if (/Button/.test(target)) {
      if ($screen.value === '0') {
        if (!target.value.match(/\d|-/))
          return false
        $screen.value = ''
      }
      return true
    }
    return false
  }

  function isDoubleOperator(target) {
    if (!!$screen.value.match(/\D$/) && !!target.value.match(/\D/)) {
      return true
    } return false
  }

  function calculate$ScreenExpression() {
    while (!$screen.value.match(/^-?\d+$/)) {
      const getOperator = $screen.value.match(/-?\d+(.)\d+/)[1]
      const getNumber = $screen.value.match(/(-?\d+).(\d+)/)
      const total = calculate((getNumber[1]), (getNumber[2]), getOperator)
      $screen.value = $screen.value.replace(/-?\d+.\d+/, total)
    }
  }
})()

/* Como na Resolução
(function () {
  'use sctrict'
  const $screen = document.querySelector('[data-js="screen"]')
  const $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]')
  const $buttonsOperation = document.querySelectorAll('[data-js="button-operation"]')
  const $buttonCE = document.querySelector('[data-js="button-ce"]')
  const $buttonEqual = document.querySelector('[data-js="button-equal"]')
  
  Array.prototype.forEach.call($buttonsNumbers, button => {
    button.addEventListener('click', handleClickNumber, false)
  }, false)

  Array.prototype.forEach.call($buttonsOperation, button => {
    button.addEventListener('click', handleClickOperation, false)
  })

  $buttonCE.addEventListener('click', () => ($screen.value = 0), false)
  $buttonEqual.addEventListener('click', handleClickEqual, false)

  function handleClickNumber() {
    $screen.value += this.value // o this aqui é o botão
  }
  function handleClickOperation() {
    $screen.value = removeLastItemIfAnOperator($screen.value)
    $screen.value += this.value
  }

  function isLastItemAnOperation(number) {
    var operations = ['+','-','x','÷']
    var lastItem = number.split('').pop()
    return operations.some(operator => operator === lastItem)
  }

  function removeLastItemIfAnOperator(number) {
    return isLastItemAnOperation(number)
    ? number.slice(0, -1) : number
  }

  function handleClickEqual() {
    $screen.value = removeLastItemIfAnOperator($screen.value)
    var allValues = $screen.value.match(/\d+[+x÷-]?/g) // quebra o arrays em numero+operador ou só numero //1+,2x,3
    $screen.value = allValues.reduce((accumulated, actual) => {
      var firstValue = accumulated.slice(0, -1)
      var operator = accumulated.split('').pop() //pega o ultimo valor
      var lastValue = removeLastItemIfAnOperator(actual)
      var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : ''
      switch(operator) {
        case '+': return (+firstValue + +lastValue) + lastOperator
        case '-': return (+firstValue - +lastValue) + lastOperator
        case 'x': return (+firstValue * +lastValue) + lastOperator
        case '÷': return (+firstValue / +lastValue) + lastOperator
      }
    })
  }
  $screen.value = '1+2x3'
  handleClickEqual()
  console.timeEnd( 'Daciuk')
}) ()
*/