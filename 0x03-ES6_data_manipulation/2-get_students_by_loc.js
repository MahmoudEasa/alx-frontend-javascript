export default (listOfStudents, city) => {
	if (!Array.isArray(listOfStudents)) return [];
	return listOfStudents.filter((e) => e.location === city);
};
