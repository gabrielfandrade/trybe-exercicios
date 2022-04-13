const specialFruit = ['Banana', 'Maçã', 'Uva'];

const additionalItens = ['Abacate', 'Laranja', 'Tangerina'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));