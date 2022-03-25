const form = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  },
});

form
  .addField('#input-nome', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Nome deve ter 10 caracteres no mínimo',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    }
  ])
  .addField('#input-email', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
  ])
  .addRequiredGroup(
    '#input-termo',
    'Campo obrigatório'
  )

function enableSubmit() {
  const submitBtn = document.querySelector('#form-button');
  const agreement = document.querySelector('#input-termo');
  submitBtn.disabled = !agreement.checked;
}

window.onload = function () {
  const agreement = document.querySelector('#input-termo');
  agreement.addEventListener('change', enableSubmit);
};