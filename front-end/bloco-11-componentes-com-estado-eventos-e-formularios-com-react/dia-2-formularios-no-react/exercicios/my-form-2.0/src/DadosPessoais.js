import React from 'react';

const estados = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class DadosPessoais extends React.Component {
  render() {
    const { handleChange, onBlurHandle, currentState } = this.props;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <div>
          <label>
            Nome: 
            <input type='name' name='nome' maxLength='40' onChange={ handleChange } required />
          </label>
        </div>
        <div>
          <label>
            Email: 
            <input type='email' name='email' maxLength='50' onChange={ handleChange } required />
          </label>
        </div>
        <div>
          <label>
            CPF: 
            <input type='text' name='cpf' maxLength='11' onChange={ handleChange } required />
          </label>
        </div>
        <div>
          <label>
          Endereço: 
            <input type='text' name='endereco' maxLength='200' onChange={ handleChange } required />
          </label>
        </div>
        <div>
          <label>
          Cidade: 
            <input type='text' name='cidade' maxLength='28' value={ currentState.city } onBlur={ onBlurHandle } onChange={ handleChange } required />
          </label>
        </div>
        <div>
          <label>
          Estado: 
            <select name='estado' onChange={ handleChange } defaultValue='' required>
              {
                estados.map((value, key) => (
                  <option key={ key }>{ value }</option>
                ))
              }
            </select>
          </label>
        </div>
        <div>
          <label>
            <input type='radio' id='house' name='tipo' value='casa' onChange={ handleChange } /> Casa
          </label>
          <label>
            <input type='radio' id='apartamento' name='tipo' value='apartamento' onChange={ handleChange } /> Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}

export default DadosPessoais;