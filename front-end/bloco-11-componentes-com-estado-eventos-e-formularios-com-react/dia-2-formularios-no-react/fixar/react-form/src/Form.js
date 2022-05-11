import React from 'react';

class Form extends React.Component {
  state = {
    bestSerie: 'The Legend of Zelda',
    bestGameOfSerie: '',
    worstGameOfSerie: '',
    commentaries: '',
  }

  handleSerie = (event) => {
    this.setState({ bestSerie: event.target.value });
  }

  handleBestGameOfSerie = (event) => {
    this.setState({ bestGameOfSerie: event.target.value });
  }

  handleWorstGameOfSerie = (event) => {
    this.setState({ worstGameOfSerie: event.target.value });
  }

  handleCommentaries = (event) => {
    this.setState({ commentaries: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <h1>Formulário de Game Series</h1>
          <label>
            Qual a sua serie de jogos favorita? 
            <select value={this.state.bestSerie} onChange={this.handleSerie}>
              <option value='The Legend of Zelda'>The Legend of Zelda</option>
              <option value='Pokémon'>Pokémon</option>
              <option value='Kingdom Hearts'>Kingdom Hearts</option>
              <option value='Resident Evil'>Resident Evil</option>
            </select>
          </label>
          <div>
            <label>
              Qual o melhor jogo dessa serie? 
              <input type='text' name='bestGameOfSerie' value={this.state.bestGameOfSerie} onChange={this.handleBestGameOfSerie}></input>
            </label>
          </div>
          <div>
            <label>
              Qual o pior jogo dessa serie? 
              <input type='text' name='worstGameOfSerie' value={this.state.worstGameOfSerie} onChange={this.handleWorstGameOfSerie}></input>
            </label>
          </div>
          <div>
            <label>
              Comentários: 
              <textarea value={this.state.commentaries} onChange={this.handleCommentaries}/>
            </label>
          </div>
        </form>
      </div>
    )
  }

}

export default Form;