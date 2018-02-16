/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function ( window, document ) {
  /* DOM */
    const $counter = document.querySelector('input[data-js="counter"]')
    const $startBtn = document.querySelector('button[data-js="start"]')
    const $stopBtn = document.querySelector('button[data-js="stop"]')
    const $resetBtn = document.querySelector('button[data-js="reset"]')

  /* GLOBALS */
    let timer
    let isStopped = true

  /* FUNCTIONS */
    function startCounter(){
      $counter.value++
      timer = setTimeout(startCounter, 1000)
      isStopped = false
    }

    function stopCounte(){
      clearTimeout(timer)
      isStopped = true
    }

    function resetCounter(){
      stopCounter()
      $counter.value = 0
    }

  /* DOM EVENTS */
    $startBtn.addEventListener('click', () => {
      if (isStopped) startCounter()
    })
    $stopBtn.addEventListener('click', stopCounter)
    $resetBtn.addEventListener('click', resetCounter)

})( window, document)
