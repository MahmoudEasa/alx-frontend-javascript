export default (listOfStudents) => {
	if (!Array.isArray(listOfStudents)) return [];
	return listOfStudents.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.id;
	}, 0);
};
