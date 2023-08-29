// 有一个带有任意数量薪水的 salaries 对象
// 编写函数 sumSalaries(salaries)，该函数使用 Object.values 和 for..of 循环返回所有薪水的总和
// 如果 salaries 是空对象，那么结果必须是 0
function sumSalaries(salaries) {
  //   let sum = 0;
  //   for (let salary of Object.values(salaries)) {
  //     sum += salary;
  //   }
  //   return sum;

  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let salaries2 = {};

console.log(sumSalaries(salaries));
console.log(sumSalaries(salaries2));
