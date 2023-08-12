var jogador = {
    nome: nome,
    numero: numero,
    gols: gols
};

var nome, numero,gols;
jogador.nome = prompt("Digite seu nome");
jogador.numero = prompt("Número");
jogador.gols = prompt("Gols")

document.writeln(`${jogador.nome}<br>${jogador.numero}<br>${jogador.gols}`);
document.writeln(jogador.nome + '<br>' + jogador.numero + '<br>' + jogador.gols );