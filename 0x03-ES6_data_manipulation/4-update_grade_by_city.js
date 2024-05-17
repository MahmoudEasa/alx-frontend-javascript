export default (getListStudents, city, newGrades) => {
	return getListStudents.filter((e) => {
		if (e.location === city) {
			e.grade = "N/A";
			newGrades.map((el) => {
				if (e.id === el.studentId) e.grade = el.grade;
			});
			return e;
		}
	});
};
