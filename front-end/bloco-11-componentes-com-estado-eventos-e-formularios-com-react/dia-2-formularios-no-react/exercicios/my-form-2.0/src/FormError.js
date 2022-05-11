import React from 'react';

class FormError extends React.Component {
  render() {
    const { formError } = this.props;

    return (
      <div>
        {
          Object.keys(formError).filter(campo => (
            formError[campo].length > 0
          )).map((campo, index) => (
            <p key={ index }>
              { campo }
              { formError[campo] }
            </p>
          ))
        }
      </div>
    )
  }
}

export default FormError;