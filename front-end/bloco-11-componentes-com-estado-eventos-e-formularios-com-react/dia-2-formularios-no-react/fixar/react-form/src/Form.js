import React from 'react';
import BestSerie from './BestSerie';
import BestGameOfSerie from './BestGameOfSerie';

class Form extends React.Component {
  state = {
    bestSerie: 'Escolha um jogo aqui',
    bestGameOfSerie: '',
    worstGameOfSerie: '',
    commentaries: '',
    news: false,
    formularioComErros: true,
  }

  handleError = () => {
    const { bestSerie, bestGameOfSerie } = this.state;

    const errorCases = [
      bestSerie === 'Escolha um jogo aqui',
      !bestGameOfSerie.length,
      bestGameOfSerie > 50,
    ];

    const formularioPreenchido = errorCases.every(error => error !== true );

    this.setState({ formularioComErros: !formularioPreenchido });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => { this.handleError(); });
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <h1>Formulário de Game Series</h1>
            <BestSerie 
              value={this.state.bestSerie}
              handleChange={this.handleChange}
              handleError={this.handleError}
            />
            <BestGameOfSerie 
              value={this.state.bestGameOfSerie}
              handleChange={this.handleChange}
              handleError={this.handleError}
            />
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