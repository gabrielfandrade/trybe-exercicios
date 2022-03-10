// let pessoa = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// }

// console.log('A jogadora', pessoa['name'], pessoa['lastName'], 'tem', pessoa['age'], 'anos');

// console.log('A jogadora', pessoa['name'], pessoa['lastName'] , 'foi eleita a melhor do mundo por', pessoa['bestInTheWorld'].length, 'vezes');

// console.log('A jogadora possui', pessoa['medals']['golden'], 'medalhas de ouro e', pessoa['medals']['silver'], 'medalhas de prata');

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (let key in names) {
//     console.log('Olá', names[key]);
// }

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const key in car) {
      console.log(key);
  }
