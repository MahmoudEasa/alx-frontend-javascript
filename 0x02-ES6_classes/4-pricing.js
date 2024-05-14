import Currency from "./3-currency";

class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(val) {
		if (typeof val === "number") this._amount = val;
		else throw new TypeError("Amount most be a number");
	}

	get currency() {
		return this._currency;
	}

	set currency(val) {
		if (val instanceof Currency) this._currency = val;
		else throw new TypeError("Currency most be instance of Currency");
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.displayFullCurrency()}`;
	}

	convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}

export default Pricing;
