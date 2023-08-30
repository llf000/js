// Rest参数 ...
// 用来收集多余参数 必须在参数列表最后
function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

function showName(firstName, surName, ...others) {
  console.log(firstName + " " + surName);
}

showName("wa", "haha", "shuang", "waiwai");

// arguments参数
function showName2() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName2("wa", "haha", "shuang", "waiwai");
