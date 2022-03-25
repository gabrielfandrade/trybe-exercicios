const submit = document.querySelector('#form-button');
const checkFoto = document.querySelector('#input-termo');
const form = document.querySelector('#form');

function validacao() {
  const email = document.querySelector('#input-email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#input-nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#input-texto').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

submit.addEventListener('click', function (event) {
  event.preventDefault();
  const validar = validacao();
  if (validar === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});

function verificarChecked() {
  submit.disabled = !checkFoto.checked;
}

window.onload = function() {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
  });
  checkFoto.addEventListener('change', verificarChecked);
};