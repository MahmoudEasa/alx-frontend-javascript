export default (length, position, value) => {
	try {
		const buffer = new ArrayBuffer(length);
		const view = new Int8Array(buffer);
		view[position] = value;
		return new DataView(buffer);
	} catch (err) {
		throw new Error("Position outside range");
	}
};
