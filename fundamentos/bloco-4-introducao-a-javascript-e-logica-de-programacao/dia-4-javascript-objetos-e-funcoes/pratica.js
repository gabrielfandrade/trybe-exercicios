let pessoa = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

// console.log('A jogadora', pessoa['name'], pessoa['lastName'], 'tem', pessoa['age'], 'anos');

console.log('A jogadora', pessoa['name'], pessoa['lastName'] , 'foi eleita a melhor do mundo por', pessoa['bestInTheWorld'].length, 'vezes');
