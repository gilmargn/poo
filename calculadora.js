class Calculadora{

constructor(){
    this.a = 10
    this.b = 7
    this.operador = "mult"
}

calcular(){
    if(this.operador === 'mult'){
        console.log(this.a * this.b)
    }
}
}

Calculadora = new Calculadora()
calculadora.calcular()
