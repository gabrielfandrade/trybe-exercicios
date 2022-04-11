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

// Exercício 1
function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

// Exercício 2
function nameAndAge() {
  const authors = books.map((book) => {
    return {author: book.author.name, age: (book.releaseYear - book.author.birthYear)}
  });
  return authors.sort((authorA, authorB) => authorA.age - authorB.age);
}

// Exercício 3
function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

// Exercício 4
function oldBooksOrdered() {
  const oldBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  return oldBooks.sort((bookA, bookB) => (2022 - bookB.releaseYear) - (2022 - bookA.releaseYear));
}

// Exercício 5
function fantasyOrScienceFictionAuthors() {
  const authors = fantasyOrScienceFiction().map((book) => book.author.name);
  return authors.sort();
}

