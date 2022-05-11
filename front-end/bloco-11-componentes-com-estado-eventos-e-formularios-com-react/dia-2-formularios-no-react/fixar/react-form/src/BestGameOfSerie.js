import React from 'react';
import PropTypes from 'prop-types';

class BestGameOfSerie extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <fieldset>
        <div>
          <label>
            Qual o melhor jogo dessa serie?
            <input 
              type='text' 
              name='bestGameOfSerie' 
              value={value} 
              onChange={handleChange}
            ></input>
            { !value.length ? ' -jogo invalido- ' : ''}
            { value.length > 50 ? ' -nome muito grande- ' : ''}
          </label>
        </div>
        <div>
          <label>
            Arte favorita deste jogo:
            <input type='file' name='favoriteArt'></input>
          </label>
        </div>
      </fieldset>
    )
  }
}

BestGameOfSerie.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default BestGameOfSerie