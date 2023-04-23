let students = [
  { lastName: "Петренко", grade: 95, ID: 2 },
  { lastName: "Іваненко", grade: 100, ID: 3 },
  { lastName: "Коленко", grade: 85, ID: 1 },
  { lastName: "Петренко", grade: 95, ID: 4 },
  { lastName: "Іваненко", grade: 100, ID: 5 },
  { lastName: "Коленко", grade: 85, ID: 6 },
];

let badStds = [
  { lastName: "Іваненко", grade: 100, ID: 5 },
  { lastName: "Коленко", grade: 85, ID: 6 },
];

function goodStds(stds, bStd) {
  let gdStds = [];
  stds.forEach((std) => {
    let found = false;
    bStd.forEach((elem) => {
      if (elem.ID === std.ID) {
        found = true;
      }
    });
    if (!found) {
      gdStds.push(std);
    }
  });
  return gdStds;
}

console.log(goodStds(students, badStds));

function hiGrade(stdnts) {
  console.time("execution time");
  let maxObj = { grade: 0 };
  stdnts.forEach((oneStd) => {
    if (oneStd.grade >= maxObj.grade) {
      maxObj = oneStd;
    }
  });
  let arrOfMxObj = students.filter((student) => student.grade == maxObj.grade);
  console.timeEnd("execution time");
  return arrOfMxObj;
}

function hiGrade2(stdnts) {
  console.time("execution time 2");
  let maxGrd = Math.max(...students.map((student) => student.grade));
  let arrOfMxObj = students.filter((student) => student.grade == maxGrd);
  console.timeEnd("execution time 2");
  return arrOfMxObj;
}
