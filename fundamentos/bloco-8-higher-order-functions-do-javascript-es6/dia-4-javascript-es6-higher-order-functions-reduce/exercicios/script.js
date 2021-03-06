// Exercício 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr), [])
}

// Exercício 2
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function reduceNames() {
  const names = books.reduce((authors, book, index, array) => {
    if (index === array.length - 1) return `${authors} ${book.author.name}.`;
    return `${authors} ${book.author.name},`;
  }, '');
  return names.trim();
}

// Exercício 3
function averageAge() {
  const diviso = books.length;
  return books.reduce((media, book) => media + (book.releaseYear - book.author.birthYear), 0) / diviso
}

// Exercício 4
function longestNamedBook() {
  return books.reduce((maiorNome, book) => (
    (book.name.length < maiorNome.name.length) ? maiorNome : book)
    );
}

// Exercício 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((total, name) =>
    total + name.split('').reduce((quant, char) => 
    (char === 'A' || char === 'a') ? quant + 1 : quant
    , 0), 0);
}

// Exercício 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((soma, nota) => 
      soma + nota, 0) / grades[index].length,
  }));
}