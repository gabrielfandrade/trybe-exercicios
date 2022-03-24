const submit = document.querySelector('#form-button');
const checkFoto = document.querySelector('#input-termo');
const form = document.querySelector('#form');

submit.addEventListener('click', function (event) {
  event.preventDefault();
});

function verificar() {
  submit.disabled = !checkFoto.checked;
}

window.onload = function() {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
  });
  checkFoto.addEventListener('change', verificar);
};