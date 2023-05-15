class Alunos {
  constructor(nomeAluno, notaAluno) {
    this.nome = nomeAluno;
    this.nota = notaAluno;
  }
}

const alunos = [
new Alunos('Jailson', 10),
new Alunos('Renata', 5),
new Alunos('Tiago', 6)
]

// function buscarAprovados(alunos) {
//   return alunos.filter(function(aluno) {
//     return aluno.nota >= 6;
//   });
// }

// COM  ARROW FUNCTION
const buscarAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = buscarAprovados(alunos);

console.log(alunosAprovados);