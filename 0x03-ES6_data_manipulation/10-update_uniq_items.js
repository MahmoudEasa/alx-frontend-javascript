export default (map) => {
	if (!(map instanceof Map)) throw new Error("Cannot process");
	for (const m of map) if (map.get(m[0]) === 1) map.set(m[0], 100);
};
