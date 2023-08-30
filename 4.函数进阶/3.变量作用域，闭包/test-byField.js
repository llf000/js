// 编写函数byField(fieldName)按要求排序对象
function byField(fieldName) {
  return (a, b) => (a.fieldName - b.fieldName ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));
console.log(users.sort(byField("surname")));
