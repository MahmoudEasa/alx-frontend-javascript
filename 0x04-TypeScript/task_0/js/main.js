var student1 = {
    firstName: "Mahmoud",
    lastName: "Easa",
    age: 34,
    location: "Egypt"
};
var student2 = {
    firstName: "Mahmoud2",
    lastName: "Easa2",
    age: 22,
    location: "Egypt2"
};
var studentsList = [student1, student2];
console.table(studentsList, ["firstName", "location"]);
console.table(studentsList);
