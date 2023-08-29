// 创建 new Date()
// 不带参数
let now = new Date();
console.log(now);
// new Date(millisecounds)
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);
// new Date(datestring)
let dateToday = new Date("2023-08-29");
console.log(dateToday);

// 访问时间组件
let date = new Date();
console.log(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
  date.getMilliseconds()
);
console.log(date.getDay());

console.log(date.getTime());
console.log(date.getTimezoneOffset());

// 设置日期组件
date.setHours(0, 0, 0, 0);
console.log(date);

// 自动校准（Autocorrection）
let date1 = new Date(2013, 0, 35);
console.log(date1);

date1.setDate(date1.getDate() + 2);
console.log(date1);

// 日期转化为数字，日期差值
console.log(+date);

let start = new Date();
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

console.log(`The loop took ${end - start} ms`);
