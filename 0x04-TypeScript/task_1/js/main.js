var teacher3 = {
    firstName: "Mahmoud",
    fullTimeEmployee: false,
    lastName: "Easa",
    location: "Egypt",
    contract: false
};
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
console.log(teacher3);
console.table(teacher3);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher(teacher3.firstName, teacher3.lastName));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student1 = new StudentClass("Mahmoud", "Easa");
console.log("student1 =======> ");
console.log(student1);
console.log("student1.workOnHomework =======> ");
console.log(student1.workOnHomework());
console.log("student1.displayName =======> ");
console.log(student1.displayName());
