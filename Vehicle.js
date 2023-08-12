// Defining class using es6
class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`Modelo da motocicleta: ${this.name}.`)
	}
}
// Making object with the help of the constructor
let moto1 = new Vehicle('Titan', 'Honda', '150cc');
let moto2 = new Vehicle('Biz', 'Honda', '98cc');

console.log(moto1.name);
console.log(moto2.maker);
console.log(moto1.getDetails());
alert(moto2.getDetails());
