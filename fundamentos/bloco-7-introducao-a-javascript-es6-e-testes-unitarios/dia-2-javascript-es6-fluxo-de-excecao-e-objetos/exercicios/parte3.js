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

function checks(obj, chave, valor) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return keys.indexOf(chave) === values.indexOf(valor);
}

console.log(checks(lesson3, 'turno', 'noite'));

function alunosMatematica(obj) {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}

console.log(alunosMatematica(allLessons));

function info(obj, nome) {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === nome) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

function reporte(obj, nome) {
  const report = {};
  report.professor = nome;
  Object.assign(report, info(allLessons, nome));
  return report;
}

console.log(reporte(allLessons, 'Maria Clara'));