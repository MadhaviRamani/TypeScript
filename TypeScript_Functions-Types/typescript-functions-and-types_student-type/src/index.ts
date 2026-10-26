// Step 1: Create a type and a student
// a) Define a type `Student` with these properties:
//    - `firstName`
//    - `lastName`
//    - `age`
//    - `grades` (a list of numbers, e.g. [1, 4, 3])
// b) Create a student of type `Student` with some example data.
// step 1 & 2 data
/* type Student = {
  firstName: string;
  lastName: string;
  age: number;
  grades: number[];
}; */

/* const Student = {
  firstName: "Anna",
  lastName: "Meier",
  age: 30,
  grades: [1, 4, 3, 1, 3, 2, 1, 2],
}; */

//Step:1 Solution
/* function printStudent(student: Student): void {
  console.log(
    `${student.firstName} ${student.lastName} (${student.age}) (grades: ${student.grades})`,
  );
}
printStudent(Student); */

// Step 2: Print the student
// a) Write a function `printStudent(student: Student): void`.
// b) It should print the student exactly like this:
//
//    Meier Meier (17)
//    ==============================
//    Grades: 1,4,3,1,3,2,1,2
//
//    The second line always has exactly 30 "=" characters.
//    Tip: You don't have to type all 30 "=" by hand. Look up the string method `repeat()`.
// c) Call `printStudent(student)` to check your output.

//Step:2 Solution
/* function printStudent(student: Student): void {
  console.log(`${student.firstName} ${student.lastName} (${student.age}) `);
  console.log("=".repeat(30));
  console.log(`Grades:${student.grades}`);
}
printStudent(Student);

 */

// Step 3: Some student were absent, so a grade can be missing.
// a) Change the `grades` type so that a grade can also be `undefined`.
// b) Add some `undefined` grades to the student.
// c) Update `printStudent` so that missing grades are printed as "*":
//
//    Grades: 1,2,*,3,1,4,*,5
//
//    Tip: Check your output carefully. TypeScript won't tell you if it looks wrong.
/* type Student = {
  firstName: string;
  lastName: string;
  age: number;
  grades: (number | undefined)[];
};
const Student = {
  firstName: "Anna",
  lastName: "Meier",
  age: 30,
  grades: [1, 2, undefined, 3, 1, 4, undefined, 5],
};
function printStudent(student: Student): void {
  console.log(`${student.firstName} ${student.lastName} (${student.age}) `);
  console.log("=".repeat(30));
  console.log(
    `Grades:${student.grades.map((grade) => (grade === undefined ? "*" : grade))}`,
  );
}
printStudent(Student); */

// Step 4: Print several student
// a) Create two more student.
// b) Write a function `printAllStudent(student: Student[]): void`
//    that prints every student in the list. Reuse `printStudent` for this.
// c) Call `printAllStudent` with all three student.
type Student = {
  firstName: string;
  lastName: string;
  age: number;
  grades: (number | undefined)[];
};
const Students: Student[] = [
  {
    firstName: "Anna",
    lastName: "Meier",
    age: 30,
    grades: [1, 2, undefined, 3, 1, 4, undefined, 5],
  },
  {
    firstName: "Ben",
    lastName: "Meier",
    age: 33,
    grades: [1, 2, undefined, 3, 1, 4, undefined, 5, 6, 7, 8, undefined],
  },
  {
    firstName: "Lisa",
    lastName: "Schmidt",
    age: 17,
    grades: [2, 1, 3, undefined, 4],
  },
];
function printStudent(student: Student): void {
  console.log(`${student.firstName} ${student.lastName} (${student.age}) `);
  console.log("=".repeat(30));
  console.log(
    `Grades:${student.grades.map(grade => grade === undefined ? "*" : grade)}`,
  );
}
function printAllStudent(students: Student[]): void{
for(const student of students){
    printStudent(student);
}
}
printAllStudent(Students);