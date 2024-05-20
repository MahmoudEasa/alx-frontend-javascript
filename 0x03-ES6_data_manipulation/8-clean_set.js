export default (set, startString) => {
	const startLen = startString.length;
	if (!startLen) return "";
	const result = [];
	set.forEach((element) => {
		if (element.startsWith(startString) && element.length > startLen)
			result.push(element.slice(startLen));
	});
	return result.join("-");
};
