// 引号
let guestList = `Guests:
 * John
 * Pete
 * Mary`;

console.log(guestList);

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}.`);

// 特殊字符
let guestList2 = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList2);

console.log("\u00A9");
console.log("\u{20331}");
console.log("\u{1F60D}");

console.log("I'm the Walrus!");

// 字符串长度
console.log("string".length);
console.log(`My\n`.length);

// 访问字符
let str1 = "hello";

console.log(str1[0]);
console.log(str1.charAt(0));
console.log(str1[str1.length - 1]);

console.log(str1[1000]); // undefined
console.log(str1.charAt(1000)); // ''

for (let char of "Hello") {
  console.log(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}
// 字符串不可改变
let str2 = "Hi";

str2[0] = "h";
console.log(str2[0]); // H

str2 = "h" + str2[1];
console.log(str2); // hi

// 改变大小写
console.log("Hello World".toUpperCase());
console.log("Hello World".toLowerCase());
console.log("Hello World"[0].toLowerCase());

// 查找子字符串
let str3 = "Hello JavaScript, llo JavaScript";

console.log(str3.indexOf("Hello")); // 1
console.log(str3.indexOf("hello")); // -1 没有

console.log(str3.indexOf("ll")); // 2
console.log(str3.indexOf("ll", 3)); // 18

let str5 = "As sly as a fox, as strong as an ox";

let target = "as";

//   let pos = 0;
//   while (true) {
//     let foundPos = str5.indexOf(target, pos);
//     if (foundPos == -1) break;

//     console.log(`Found at ${foundPos}`);
//     pos = foundPos + 1; // 继续从下一个位置查找
//   }
let pos = -1;
while ((pos = str5.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

// includes，startsWith，endsWith
console.log("Widget with id".includes("Widget"));
console.log("Hello".includes("Bye"));

console.log("Widget".includes("id"));
console.log("Widget".includes("id", 3)); // false, 从位置3开始没有id

console.log("Widget".startsWith("Wid"));
console.log("Widget".endsWith("get"));

// 获取子字符串
// str.slice(start [, end])
let subStr = "stringify";

console.log(subStr.slice(0, 5));
console.log(subStr.slice(0, 1));
console.log(subStr.slice(-4, -1));
// str.substring(start [, end])
console.log(subStr.substring(2, 6));
console.log(subStr.substring(6, 2));
console.log(subStr.substring(-4, -1)); // ''
console.log(subStr.slice(2, 6));
console.log(subStr.slice(6, 2)); // ''
// str.substr(start [, length])
console.log(subStr.substr(2, 4));
console.log(subStr.substr(-4, 2)); // 末尾4开始

// 比较
console.log("a" > "z"); // false
console.log("a" > "Z"); // true
console.log("Österreich" > "Zealand"); // 带变音符号字母会乱序
// str.localeCompare(str2)
// 如果 str 排在 str2 前面，则返回负数。
// 如果 str 排在 str2 后面，则返回正数。
// 如果它们在相同位置，则返回 0。
console.log("Österreich".localeCompare("Zealand"));

// str.trim()
console.log("  hahaha  ".trim());

// str.repeat(n)
console.log("hahaa".repeat(3));
