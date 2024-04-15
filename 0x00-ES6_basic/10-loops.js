export default function appendToEachArrayValue(array, appendString) {
	for (const idx of array) {
		const value = appendString + idx;
		array[idx] = value;
	}

	return array;
}
