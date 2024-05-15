export default class HolbertonClass {
	constructor(size, location) {
		this.size = size;
		this.location = location;
	}

	get location() {
		return this._location;
	}

	set location(val) {
		if (typeof val === "string") this._location = val;
		else throw new TypeError("Location most be a string");
	}

	get size() {
		return this._size;
	}

	set size(val) {
		if (typeof val === "number") this._size = val;
		else throw new TypeError("Size most be a number");
	}

	toString() {
		return this._location;
	}

	valueOf() {
		return this._size;
	}
}
