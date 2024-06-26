import Building from "./5-building";

class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this.floors = floors;
	}

	get floors() {
		return this._floors;
	}

	set floors(val) {
		if (typeof val === "number") this._floors = val;
		else throw new TypeError("Floors must be a number");
	}

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this._floors} floors`;
	}
}

export default SkyHighBuilding;
