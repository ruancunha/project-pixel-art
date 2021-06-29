const paleta = document.getElementById('color-palette');
const tela = document.getElementById('table-row');
const geraTela = document.querySelector('#generate-board');
const tamanhoTela = document.querySelector('#board-size');

function corSelecionada(cor) {
  const parent = paleta.childNodes;
  for (let i = 1; i < parent.length; i += 2) {
    parent[i].classList.remove('selected');
  }
  cor.target.classList.add('selected');
}

function corAleatoria() {
  const letras = '0123456789ABCDEF';
  let hexa = '#';
  for (let i = 0; i < 6; i += 1) {
    hexa += letras[Math.floor(Math.random() * 16)];
  }
  return hexa;
}

function pintaPixel(pix) {
  const pixelClicado = pix.target;
  const corSelected = document.querySelector('.selected').style.backgroundColor;
  if (pixelClicado.style.backgroundColor === corSelected) {
    pixelClicado.style.backgroundColor = 'white';
  } else {
    pixelClicado.style.backgroundColor = corSelected;
  }
}

function limpaTela() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = null;
  }
}

function tamanhoMinMax(input) {
  if (input.value >= 50) {
    criaTela(50);
    alert('O tamanho máximo é 50');
  }
  if (input.value <= 5) {
    criaTela(5);
    alert('O tamanho mínimo é 5');
  }
  if (input.value >= 5 && input.value <= 50) {
    criaTela(input.value);
  }
}

function botaoVQV() {
  if (tamanhoTela.value === '') {
    alert('Board inválido!');
  } else {
    tamanhoMinMax(tamanhoTela);
  }
}

function criaTela(value) {
  tela.innerHTML = null;
  for (let tr = 0; tr < value; tr += 1) {
    const trs = document.createElement('tr');
    for (let td = 0; td < value; td += 1) {
      const tds = document.createElement('td');
      tds.classList.add('pixel');
      trs.appendChild(tds);
    }
    tela.appendChild(trs);
  }
}

paleta.addEventListener('click', corSelecionada);
document.getElementById('clear-board').addEventListener('click', limpaTela);
tela.addEventListener('click', pintaPixel);
geraTela.addEventListener('click', botaoVQV);
document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.red').style.backgroundColor = corAleatoria();
document.querySelector('.green').style.backgroundColor = corAleatoria();
document.querySelector('.orange').style.backgroundColor = corAleatoria();
