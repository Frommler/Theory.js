const TreeModel = require("tree-model");
const { printTree } = require("flexible-tree-printer");

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

let companyNew = {
  name: "company",
  children: [
    {
      name: "sales",
      children: [
        {
          name: "Іван",
          salary: 1000,
        },
        {
          name: "Аліса",
          salary: 1600,
        },
      ],
    },
    {
      name: "development",
      children: [
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
    {
      name: "internals",
      children: [
        {
          name: "Евген",
          salary: 1300,
        },
      ],
    },
  ],
};

const tree = new TreeModel();
root = tree.parse(companyNew);

/* node.walk([options], action, [context]); */

let sumSalary = 0;
console.time("start");
root.walk({ strategy: "breadth" }, (node) => {
  /* Оператор ( ?? 0 )  якщо undefined то повертає необхідне*/
  sumSalary += node.model.salary ?? 0;
});
console.timeEnd("start");
console.log(sumSalary);

/* Node node.first(predicate) */

let Evgen = root.first((node)=> node.model.name == "Евген");

console.log(Evgen.model.salary);

printTree({ parentNode: company });
