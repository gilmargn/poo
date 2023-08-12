var pessoa = {
    nome: ["Torquato", "Nascimento"],
    idade: 34,
    sexo: "masculino",
    interesses: ["música", "programação"],
    bio: function () {
      alert(
        this.nome[0] +
          " " +
          this.nome[1] +
          " tem " +
          this.idade +
          " anos de idade. Ele gosta de " +
          this.interesses[0] +
          " e " +
          this.interesses[1] +
          ".",
      );
    },
    saudacao: function () {
      alert("Oi! Eu sou " + this.nome[0] + ".");
    },
  };
  
  alert("Teste");
  