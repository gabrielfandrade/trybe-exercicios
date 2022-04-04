const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const values = Object.values(order);
  const mensagem = `Olá ${values[3].delivery.deliveryPerson}, entrega para: ${values[0]}, Telefone: ${values[1]}, R. ${values[2].street}, N°: ${values[2].number}, AP: ${values[2].apartment}`;
  console.log(mensagem);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const values = Object.values(order);
  const pizza = Object.keys(order.order.pizza);
  const drink = Object.values(order.order.drinks);
  const mensagem = `Olá ${values[0]}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink[0].type} é R$ ${values[4].total}`;
  console.log(mensagem);
}

orderModifier(order);