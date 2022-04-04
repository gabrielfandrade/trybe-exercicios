const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function adicionaKey(obj, chave, valor) {
  obj[chave] = valor;
}

adicionaKey(lesson2,'turno','noite');

function keysObjeto(obj) {
  console.log(Object.keys(obj));
}

keysObjeto(lesson2);

function tamanhoObjeto(obj) {
  console.log(Object.keys(obj).length);
}

tamanhoObjeto(lesson1);

function valoresObjeto(obj) {
  return Object.values(obj);
}

console.log(valoresObjeto(lesson3));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

function totalAlunos(obj) {
  let alunos = 0;
  const values = valoresObjeto(obj);
  for (const key in values) {
    alunos += values[key].numeroEstudantes;
  }
  return alunos;
}

console.log(totalAlunos(allLessons));

function valorChave(obj, key) {
  const valores = valoresObjeto(obj);
  return valores[key];
}

console.log(valorChave(lesson1, 0));