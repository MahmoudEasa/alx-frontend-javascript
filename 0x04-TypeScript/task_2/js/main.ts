interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Mahmoud",
	lastName: "Easa",
	age: 34,
	location: "Egypt",
};

const student2: Student = {
	firstName: "Mahmoud2",
	lastName: "Easa2",
	age: 22,
	location: "Egypt2",
};

const studentsList: Student[] = [student1, student2];

console.table(studentsList, ["firstName", "location"]);
console.table(studentsList);
