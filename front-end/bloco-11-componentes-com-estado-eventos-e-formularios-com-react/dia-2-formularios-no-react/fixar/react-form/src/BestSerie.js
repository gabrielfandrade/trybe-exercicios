import React from 'react';
import PropTypes from 'prop-types';

class BestSerie extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <fieldset>
        <label>
          Qual a sua serie de jogos favorita? 
          <select 
            name='bestSerie' 
            value={value} 
            onChange={handleChange}>
            <option value='Escolha um jogo aqui'>Escolha um jogo aqui</option>
            <option value='The Legend of Zelda'>The Legend of Zelda</option>
            <option value='Pokémon'>Pokémon</option>
            <option value='Kingdom Hearts'>Kingdom Hearts</option>
            <option value='Resident Evil'>Resident Evil</option>
          </select>
          { value === 'Escolha um jogo aqui' ? ' -escolha uma serie favorita- ' : ''}
        </label>
      </fieldset>
    )
  }
}

BestSerie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default BestSerie;