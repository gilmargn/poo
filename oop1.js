class Estudante{
    constructor(nome,matricula){
        this.nome = nome;
        this.matricula= matricula;
    }
    reclamar(){
        return `${this.nome} não entendi`;
    }
    estudar(){
        return `${this.nome} aprendi`;
    }
}
var nome, matricula;
nome = prompt("Digite seu nome");
matricula = prompt("Matricula");
let turma = new Estudante(nome,matricula);
document.writeln(turma.nome + '<br>' + turma.matricula);
