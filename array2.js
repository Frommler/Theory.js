let students = [
  { name: "Nrupul", marks: [10, 10, 90] },
  { name: "Prateek", marks: [50, 30, 40] },
  { name: "Naaal", marks: [50, 20, 60] },
  { name: "Puuuuk", marks: [40, 70, 40] },
];

let arrayMarks = [];

/* students.forEach(student => {
  arrayMarks.push(student.marks);
}); */
arrayMarks = students.map((student) => student.marks).flat();

function counMarks(arrayOfNum) {
  let dict = {};
  arrayOfNum.forEach((stPoint) => {
    if (dict[stPoint] == undefined) {
      dict[stPoint] = 1;
    } else dict[stPoint]++;
  });
  return dict;
}
/* console.log(Math.max(45, 50, 101));
console.log(students[0]);

console.log(counMarks(arrayMarks)); */

let studentmarks = students.map((student) => ({
  name: student.name,
  maxmark: Math.max(...student.marks),
}));

console.log(Math.max(...arrayMarks));

let studMax = students.find((student) =>
  student.marks.includes(
    Math.max(...arrayMarks))
);

console.log(studMax.name);
/* console.log(studentmarks); */

/* let maximum = [];
students.forEach((item) => {
  maximum.push({maxMark: Math.max(...item.marks), name: item.name});
}); */

/* maximum.forEach((item) => { */
/* let max = Math.max(...maximum.map(item => item.maxMark)); */
/* }); */

/* function dog3() {
    return {
        sound: "Гав",
        talk: () => {
            console.log(this.sound)
        }
    }
}

let Jack = new dog3();
Jack.talk();
dog3().talk(); */
