import { Component } from 'react';

//Nome do componente: Image
class Image extends Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;