import React from 'react';
import DadosPessoais from './DadosPessoais.js';
import UltimoEmprego from './UltimoEmprego.js';
import Botoes from './Botoes.js';

class Form extends React.Component {
  render() {
    const { handleChange, currentState, onBlurHandle } = this.props;

    return (
      <form>
        <DadosPessoais handleChange={ handleChange } onBlurHandle={ onBlurHandle } currentState= { currentState } />
        {/* <UltimoEmprego /> */}
        {/* <Botoes /> */}
      </form>
    )
  }
}

export default Form;