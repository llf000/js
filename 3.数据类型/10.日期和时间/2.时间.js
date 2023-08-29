// Date.now()
let start = Date.now(); // 从 1 Jan 1970 至今的时间戳

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now();

console.log(`The loop took ${end - start} ms`);

// 对字符串调用 Date.parse YYYY-MM-DDTHH:mm:ss.sssZ
let ms = Date.parse("2023-01-01T16:00:00.417-07:00");
console.log(ms);
