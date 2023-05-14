let company = {
  sales: [
    {
      name: "Іван",
      salary: 1000,
    },
    {
      name: "Аліса",
      salary: 1600,
    },
    {
      name: "Olya",
      salary: 1800,
    },
  ],

  development: {
    sites: [
      {
        name: "Петро",
        salary: 2000,
      },
      {
        name: "Олександр",
        salary: 1800,
      },
    ],
  },
};

function calculateSalary(companyParam) {
  let salary = 0;
  for (let key in companyParam) {
    if (typeof companyParam[key] === "object") {
      salary += calculateSalary(companyParam[key]);
    } else if (key == "salary") {
      /* console.log(companyParam[key]); */
      salary += companyParam[key];
    }
  }
  return salary;
}

function findEmployeeByName(EmployeeName, companyParam) {
  for (let key in companyParam) {
    if (typeof companyParam[key] === "object") {
      let findObj = findEmployeeByName(EmployeeName, companyParam[key]);
      if(findObj) return findObj;
    } else if (companyParam[key] === EmployeeName) {
      return companyParam;
    }
  }
}

let Petro = findEmployeeByName("Олександр",company);
console.log(Petro.name + " " + Petro.salary);

let sallaryInCompany = calculateSalary(company);
/* console.log(sallaryInCompany); */

let sallaryInCompanyItr = calculateSalaryItr(company);

/* console.log(sallaryInCompanyItr); */

function calculateSalaryItr(company) {
  let salarySum = 0;
  let stack = [company];

  while (stack.length > 0) {
    let current = stack.pop();

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        stack.push(current[i]);
      }
    } else if (typeof current === "object" && current !== null) {
      for (let key in current) {
        if (key === "salary") {
          salarySum += current[key];
        } else {
          stack.push(current[key]);
        }
      }
    }
  }
  return salarySum;
}
