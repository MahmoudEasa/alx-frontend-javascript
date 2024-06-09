/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeachingC?: number;
	}

	export class Cpp extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for Cpp";
		}

		getAvailableTeacher(): string {
			if (!this.teacher.experienceTeachingC)
				return "No available teacher";
			return `Available Teacher: ${this.teacher.firstName}`;
		}
	}
}

// const teacher = {
// 	firstName: "Mahmoud",
// 	lastName: "Easa",
// 	experienceTeachingC: 10,
// };

// const cpp = new Subjects.Cpp(teacher);
// const react = new Subjects.React(teacher);
// const java = new Subjects.Java(teacher);

// console.log("========= Cpp ==========");
// console.log(cpp.getRequirements());
// console.log(cpp.getAvailableTeacher());

// console.log("========= React ==========");
// console.log(react.getRequirements());
// console.log(react.getAvailableTeacher());

// console.log("========= Java ==========");
// console.log(java.getRequirements());
// console.log(java.getAvailableTeacher());
