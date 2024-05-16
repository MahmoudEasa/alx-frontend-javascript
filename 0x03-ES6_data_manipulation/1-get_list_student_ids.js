export default (listOfStudents) => {
	if (!Array.isArray(listOfStudents)) return [];
	return listOfStudents.map((e) => e.id);
};
