import React from 'react';

class Form extends React.Component {
  state = {
    bestSerie: 'The Legend of Zelda',
    bestGameOfSerie: '',
    worstGameOfSerie: '',
    commentaries: '',
    news: false,
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <h1>Formulário de Game Series</h1>
            <fieldset>
              <label>
                Qual a sua serie de jogos favorita? 
                <select name='bestSerie' value={this.state.bestSerie} onChange={this.handleChange}>
                  <option value='The Legend of Zelda'>The Legend of Zelda</option>
                  <option value='Pokémon'>Pokémon</option>
                  <option value='Kingdom Hearts'>Kingdom Hearts</option>
                  <option value='Resident Evil'>Resident Evil</option>
                </select>
              </label>
            </fieldset>
            <fieldset>
              <div>
                <label>
                  Qual o melhor jogo dessa serie?
                  <input type='text' name='bestGameOfSerie' value={this.state.bestGameOfSerie} onChange={this.handleChange}></input>
                </label>
              </div>
              <div>
                <label>
                  Arte favorita deste jogo:
                  <input type='file' name='favoriteArt'></input>
                </label>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label>
                  Qual o pior jogo dessa serie?
                  <input type='text' name='worstGameOfSerie' value={this.state.worstGameOfSerie} onChange={this.handleChange}></input>
                </label>
              </div>
            </fieldset>
            <fieldset>
              <div>
                <label>
                  Comentários: 
                  <textarea name='commentaries' value={this.state.commentaries} onChange={this.handleChange}/>
                </label>
              </div>
              <div>
                <label>
                  Gostaria de receber formulários como esse? 
                  <input type='checkbox' name='news' value={this.state.news} onChange={this.handleChange}></input>
                </label>
              </div>
            </fieldset>
          </fieldset>
        </form>
      </div>
    )
  }

}

export default Form;