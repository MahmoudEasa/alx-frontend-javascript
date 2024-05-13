class Currency {
	constructor(code, name) {
		this.code = code;
		this.name = name;
	}

	get code() {
		return this._code;
	}

	set code(val) {
		if (typeof val === "string") this._code = val;
		else throw new TypeError("Code most be a string");
	}

	get name() {
		return this._name;
	}

	set name(val) {
		if (typeof val === "string") this._name = val;
		else throw new TypeError("Name most be a string");
	}

	displayFullCurrency = () => {
		return `${this._name} (${this._code})`;
	};
}

export default Currency;
