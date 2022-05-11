import React from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';

const DADOS = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  tipo: '',
  resumo: '',
  cargo: '',
  descricaoCargo: '',
  formError: {},
  submitted: false,
}

class App extends React.Component{
  state = {
    DADOS
  }

  handleChange = ({ target }) => {
    let { name, value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'endereco') value = this.validaEndereco(value);

    this.atualizaState(name, value);
  }

  onBlurHandle = ({ target }) => {
    let { name, value } = target;

    if (name === 'cidade') value = value.match(/^\d/) ? '' : value;

    this.atualizaState(name, value);
  }

  atualizaState = (name, value) => {
    this.setState(state => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validaCampo(name, value)
      }
    }));
  }

  validaEndereco = endereco => endereco.replace(/[^\w\s]/gi, '');

  handleSubmit = event => {
    event.preventDefault();
  }

  validaCampo = (campo, value) => {
    switch (campo) {
      case 'email': 
        const valido = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return valido ? '' : ' é invalido ';
      default: 
        break;
    }
    return '';
  }

  resetarFormulario = () => { this.setState(DADOS) }

  enviarFormulario = () => { this.setState({ submitted: true }) }

  render() {
    const { submitted } = this.state;

    return (
      <div className="App">
        <Form sendForm={ this.sendForm } resetForm={ this.resetForm } handleChange={ this.handleChange } currentState={ this.state } onBlurHandle={ this.onBlurHandle } />
        <div>
          <FormError formError={ this.state.formError } />
        </div>
        { submitted && <FormDataDisplay currentState={ this.setState } /> }
      </div>
    );
  }
}

export default App;
