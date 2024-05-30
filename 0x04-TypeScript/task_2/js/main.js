var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === "number" && salary < 500)
        return new Teacher();
    return new Director();
};
console.log("Teacher ===> ");
console.log(createEmployee(200));
console.log("Director ===> ");
console.log(createEmployee(1000));
console.log("Director ===> ");
console.log(createEmployee("$500"));
var isDirector = function (employee) {
    if (employee instanceof Director)
        return true;
    return false;
};
var executeWork = function (employee) {
    if (isDirector(employee))
        return new Director().workDirectorTasks();
    return new Teacher().workTeacherTasks();
};
console.log("Director ===> ");
console.log(executeWork(createEmployee(1000)));
console.log("Teacher ===> ");
console.log(executeWork(createEmployee(200)));
