const paleta = document.getElementById('color-palette');
const tela = document.getElementById('table-row');
document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.red').style.backgroundColor = 'red';
document.querySelector('.green').style.backgroundColor = 'green';
document.querySelector('.orange').style.backgroundColor = 'orange';

function corSelecionada(cor) {
  const parent = paleta.childNodes;
  for (let i = 1; i < parent.length; i += 2) {
    parent[i].classList.remove('selected');
  }
  cor.target.classList.add('selected');
}

function pintaPixel(pix) {
  const pixelClicado = pix.target;
  const corSelecionada = document.querySelector('.selected').style.backgroundColor;
  if (pixelClicado.style.backgroundColor === corSelecionada) {
    pixelClicado.style.backgroundColor = 'white';
  } else {
    pixelClicado.style.backgroundColor = corSelecionada;
  }
}

function limpaTela() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = null;
  }
}

paleta.addEventListener('click', corSelecionada);
document.getElementById('clear-board').addEventListener('click', limpaTela);
tela.addEventListener('click', pintaPixel);
