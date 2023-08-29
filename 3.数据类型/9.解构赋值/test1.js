// 有一个对象
/*
写一个解构赋值语句使得：
    name 属性赋值给变量 name。
    years 属性赋值给变量 age。
    isAdmin 属性赋值给变量 isAdmin（如果属性缺失则取默认值 false）。
*/
let user = { name: "John", years: 30 };
let { name, years: age, isAdmin = false } = user;

console.log(name, age, isAdmin);
