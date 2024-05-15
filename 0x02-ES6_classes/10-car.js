const cloneCarSymbol = Symbol("cloneCar");

export default class Car {
	constructor(brand, motor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}

	[cloneCarSymbol]() {
		return new this.constructor(this._brand, this._motor, this._color);
	}

	cloneCar() {
		return this[cloneCarSymbol]();
	}
}
