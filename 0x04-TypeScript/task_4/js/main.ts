/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

/*
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Teacher.ts" />
 /// <reference path="subjects/Cpp.ts" />
 /// <reference path="subjects/React.ts" />
 /// <reference path="subjects/Java.ts" />
 */

namespace Subjects {
	export const cTeacher: Teacher = {
		firstName: "Mahmoud",
		lastName: "Easa",
		experienceTeachingC: 10,
	};

	export const cpp = Cpp;
	export const react = React;
	export const java = Java;
}

console.log(Subjects);

// export const cpp = new Subjects.Cpp(cTeacher);
// export const react = new Subjects.React(cTeacher);
// export const java = new Subjects.Java(cTeacher);

// console.log("========= Cpp ==========");
// console.log(cpp.getRequirements());
// console.log(cpp.getAvailableTeacher());

// console.log("========= React ==========");
// console.log(react.getRequirements());
// console.log(react.getAvailableTeacher());

// console.log("========= Java ==========");
// console.log(java.getRequirements());
// console.log(java.getAvailableTeacher());
