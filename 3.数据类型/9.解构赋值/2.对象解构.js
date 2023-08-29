// let {var1, var2} = {var1:…, var2:…}
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
// : 从对象中什么属性的值：赋值给哪个变量
let { title, width, height: h } = options;

console.log(title);
console.log(width);
console.log(h);

// 默认值
let options2 = {
  title2: "Menu",
};

let { title2, width2: w2 = 500, height2: h2 = 300 } = options2;

console.log(title2);
console.log(w2);
console.log(h2);

// ...
let options3 = {
  title3: "Menu",
  weight: "30kg",
  long: 100,
};

let { title3, ...rest } = options3;

console.log(title3);
console.log(rest.weight);
