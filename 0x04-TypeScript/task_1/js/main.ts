interface Teacher {
	firstName: string;
	lastName: string;
	location: string;
	fullTimeEmployee?: boolean;
	[key: string]: any;
}

const teacher3: Teacher = {
	firstName: "Mahmoud",
	fullTimeEmployee: false,
	lastName: "Easa",
	location: "Egypt",
	contract: false,
};

interface Directors extends Teacher {
	numberOfReports: number;
}

const director1: Directors = {
	firstName: "John",
	lastName: "Doe",
	location: "London",
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log(director1);

console.log(teacher3);
console.table(teacher3);

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>
	`${firstName[0]}. ${lastName}`;

console.log(printTeacher(teacher3.firstName, teacher3.lastName));
