import React, { Component } from 'react';
import DadosPessoais from './DadosPessoais'
import UltimoEmprego from './UltimoEmprego'

class Form extends Component {
  render() {
    const { sendForm, resetForm, changeHandler, currentState, onBlurHandler } = this.props;

    return (
      <form>
        <DadosPessoais
          changeHandler={ changeHandler }
          onBlurHandler= { onBlurHandler }
          currentState= { currentState }
        />
        <UltimoEmprego changeHandler={ changeHandler } />
        <input
            type="button"
            onClick={ sendForm }
            value="Enviar"
        />
        <input
          type="reset"
          onClick={ resetForm }
          value="Limpar"
        />
      </form>
    );
  }
}

export default Form;