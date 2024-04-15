export default function appendToEachArrayValue(array, appendString) {
	let indx = 0;
	for (const idx of array) {
		const value = appendString + idx;
		array[indx] = value;
		indx++;
	}

	return array;
}
