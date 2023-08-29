// 写数字的方法
let billion1 = 1000000000;
let billion2 = 1_000_000_000;
let billion3 = 1e9;

console.log(billion1, billion2, billion3);

let mcs1 = 0.000001;
let mcs2 = 1e-6;

console.log(mcs1, mcs2);

// 十六进制，二进制，八进制数字
// 十六进制 ox数字
console.log(0xff);
// 八进制 0o数字
let a = 0o377;
// 二进制 0b数字
let b = 0b11111111;

console.log(a, b);
// toString(base) num.toString(base)
// base:2~36 默认10
let num1 = 255;

console.log(num1.toString(16));
console.log(num1.toString(2));
// .. 在数字上调用一个方法 (123456).toString(36)==123456..toString(36)
console.log((123456).toString(36));

// 舍入
// Math.floor向下舍入  3.1->3 , -1.1->-2
// Math.ceil 向上舍入  3.1->3 , -1.1->-1
// Math.round向最近的整数舍入  3.1->3 , 3.6->4 , 3.5->4
// Math.trnuc移除小数点后内容，无舍入  3.1->3 , -1.1->-1
// 舍入到小数点后n位
// 后两位
let num2 = 1.23456;
console.log(Math.round(num2 * 100) / 100);

console.log(num2.toFixed(2)); // 结果是字符串
console.log(num2.toFixed(4)); // 会向上或向下舍入到最接近的值，类似于Math.round
console.log(num2.toFixed(8)); // 不够就补0

// 不精确的计算
console.log(1e500); // Infinity
console.log(0.1 + 0.2); // 0.30000000000000004
console.log((0.1 + 0.2).toFixed(2));
console.log(9999999999999999);

// isNaN(value) 将其参数转换为数字，测试它是否为NaN
console.log(isNaN(NaN));
console.log(isNaN("str"));
console.log(Number("str"));
console.log(NaN === NaN); // NaN是独一无二的，它不等于任何东西，包括它自身

// isFinite(value) 将其参数转换为数字，如果是常规数字(不是NaN/Infinity/-Infinity)，返回true
console.log(isFinite("15"));
console.log(isFinite("str"));
console.log(isFinite(Infinity));
// 验证字符串值是否为常规数字
let num3 = "";

console.log("isFinite" + " " + isFinite(num3));

// Object.is 类似于 === 一样对值进行比较 常在内部算法使用
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false

// parseInt parseFloat  可以从字符串中“读取”数字，直到无法读取为止
console.log(+"100px");
console.log(parseInt("100px"));
console.log(parseFloat("12.5em"));

console.log(parseInt("12.3"));
console.log(parseFloat("12.3.4"));
console.log(parseInt("a123"));
// 第二个参数，指定数字系统基数
console.log(parseInt("0xff", 16));
console.log(parseInt("ff", 16));
console.log(parseInt("2n9c", 36));

// Math.random()
console.log(Math.random());
console.log(Math.random());

// Math.max(a,b,...)/Math.min(a,b,...)
console.log(Math.max(1, 3, 6, 9));
console.log(Math.min(1, 3, 6, 9));

// Math.pow(n,power)
console.log(Math.pow(2, 10));
