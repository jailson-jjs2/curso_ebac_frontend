document.addEventListener('DOMContentLoaded', function() {

  const btnImdb = document.querySelector('.button');
  const alturaFilmes = document.querySelector('.filmes').offsetTop;

  btnImdb.classList.add('button--is-hidden');

  window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual > alturaFilmes) {
      exibeImdb();
    } else {
      ocultaImdb();
    }
  })
})

function ocultaImdb() {
  const button = document.querySelector('.button');
  button.classList.add('button--is-hidden')
}

function exibeImdb() {
  const button = document.querySelector('.button');
  button.classList.remove('button--is-hidden')
}

