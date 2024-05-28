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
	lastName: "Doe",
	location: "London",
	contract: false,
};

console.log(teacher3);
