export default (set, array) => {
	for (const e of array) if (!set.has(e)) return false;
	return true;
};
