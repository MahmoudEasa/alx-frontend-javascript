/// <reference path="Teacher.ts" />

namespace Subjects {
	export class Subject {
		teacher: Teacher;

		setTeacher(value: Teacher): void {
			this.teacher = value;
		}
	}
}
