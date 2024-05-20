export default (set, startString) => {
	if (typeof startString !== "string") return "";
	const startLen = startString.length;
	if (!startLen) return "";
	const result = [];
	for (const element of set) {
		if (typeof element !== "string") continue;
		if (element.startsWith(startString))
			result.push(element.slice(startLen));
	}
	return result.join("-");
};
