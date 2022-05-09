import { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    const type2 = (this.props.type2 !== 'None') ? <span>{` / ${this.props.type2}`}</span> : '';
    return (<div className={`pokemon background-${this.props.type} border-${this.props.type2}`}>
      <div className='pokemon-infos'>
        <p><span>{this.props.name}</span></p>
        <p>
          <span>{this.props.type}</span>
          {type2}
        </p>
        <p>{`Average weight: ${this.props.value} ${this.props.measurementUnit}`}</p>
      </div>
      <div className='pokemon-img'>
        <img src={this.props.image} alt='Pokémon Image'></img>
      </div>
    </div>);
  }
}

Pokedex.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
}

export default Pokedex;