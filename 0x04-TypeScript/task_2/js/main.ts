interface DirectorInterface {
	workFromHome: () => String;
	getCoffeeBreak: () => String;
	workDirectorTasks: () => String;
}

interface TeacherInterface {
	workFromHome: () => String;
	getCoffeeBreak: () => String;
	workTeacherTasks: () => String;
}

class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home";
	}
	getCoffeeBreak() {
		return "Getting a coffee break";
	}
	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}
	getCoffeeBreak() {
		return "Cannot have a break";
	}
	workTeacherTasks() {
		return "Getting to work";
	}
}

interface createEmployeeFunc {
	(salary: Number | String): Director | Teacher;
}

const createEmployee: createEmployeeFunc = (salary) => {
	if (typeof salary === "number" && salary < 500) return new Teacher();
	return new Director();
};

console.log("Teacher ===> ");
console.log(createEmployee(200));
console.log("Director ===> ");
console.log(createEmployee(1000));
console.log("Director ===> ");
console.log(createEmployee("$500"));

interface isDirectorFunc {
	(employee: Director | Teacher): boolean;
}

interface executeWorkFunc {
	(employee: Director | Teacher): string;
}

const isDirector: isDirectorFunc = (employee) => {
	if (employee instanceof Director) return true;
	return false;
};

const executeWork: executeWorkFunc = (employee) => {
	if (isDirector(employee)) return new Director().workDirectorTasks();
	return new Teacher().workTeacherTasks();
};

console.log("Director ===> ");
console.log(executeWork(createEmployee(1000)));
console.log("Teacher ===> ");
console.log(executeWork(createEmployee(200)));

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects) => `Teaching ${todayClass}`;

console.log(teachClass("Math"));
console.log(teachClass("History"));
