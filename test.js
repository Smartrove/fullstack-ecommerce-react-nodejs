// const person = {
//   firstName: "John",
//   secondName: "Doe",
//   id: "123",
//   fullName: function () {
//     return this.firstName + " " + this.secondName;
//   },
// };

// const user = person.fullName();
// console.log(user);

// (1)
// var student = {
//   name: "Daniel Joy",
//   class: "kg2",
//   no: 12,
// };

// for (let key in student) {
//   console.log(key);
// }

// (2)

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(student);
// delete student.rollno;
// console.log(student);

// (3)
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// let count = 0;
// for (let key in student) {
//   if (student.hasOwnProperty(key)) {
//     count++;
//   }
// }
// console.log(count);

// alternative
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };

// console.log(Object.keys(student).length);
