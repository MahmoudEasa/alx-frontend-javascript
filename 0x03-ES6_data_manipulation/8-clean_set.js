export default (set, startString) => {
	const startLen = startString.length;
	if (!startLen) return "";
	const result = [];
	set.forEach((element) => {
		if (element.length > startLen && element.startsWith(startString))
			result.push(element.slice(startLen));
	});
	return result.join("-");
};
