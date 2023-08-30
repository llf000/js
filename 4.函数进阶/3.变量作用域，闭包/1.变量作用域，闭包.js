// 代码块 {...} 声明的变量只在该部分有效
"use strict";
{
  let message = "hello";
  console.log(message);
}

{
  let message = "how are you";
  console.log(message);
}

// 嵌套函数
{
  function greet(firstName, lastName) {
    function fullName() {
      return firstName + " " + lastName;
    }
    console.log("hello," + " " + fullName());
    console.log("bye," + " " + fullName());
  }

  greet("Wa", "Haha");
}

{
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();

  console.log(counter());
  console.log(counter());
  console.log(counter());
}

{
  let name = "John";

  function sayHi() {
    console.log("Hi, " + name);
  }

  name = "Pete";

  sayHi(); // 显示什么："John" 还是 "Pete"？Pete
}

{
  function makeWorker() {
    let name = "Pete";

    return function () {
      console.log(name);
    };
  }

  let name = "John";

  // 创建一个函数
  let work = makeWorker();

  // 调用它
  work(); // 会显示什么？ Pete
}

{
  function makeCounter() {
    let count = 0;

    return function () {
      return count++;
    };
  }

  let counter = makeCounter();
  let counter2 = makeCounter();

  console.log(counter()); // 0
  console.log(counter()); // 1

  console.log(counter2()); // 1  是0
  console.log(counter2()); // 2  是1
  // 函数 counter 和 counter2 是通过 makeCounter 的不同调用创建的
  // 它们具有独立的外部词法环境，每一个都有自己的 count
}

{
  function Counter() {
    let count = 0;

    this.up = function () {
      return ++count;
    };

    this.down = function () {
      return --count;
    };
  }

  let counter = new Counter();

  console.log(counter.up()); // 1
  console.log(counter.up()); // 2
  console.log(counter.down()); // 1
  // 这两个嵌套函数都是在同一个词法环境中创建的，所以它们可以共享对同一个 count 变量的访问
}

{
  let phrase = "Hello";

  if (true) {
    let user = "John";

    function sayHi() {
      console.log(`${phrase}, ${user}`);
    }
  }

  //   sayHi(); // error   Hello,John?? 严格模式下error，非严格模式Hello，John
}

{
  // sum(a)(b) = a + b
  // 为了使第二个括号有效，第一个函数要返回一个函数
  function sum(a) {
    return function (b) {
      return a + b;
    };
  }

  console.log(sum(1)(2));
}

{
  let x = 1;

  function func() {
    console.log(x);

    let x = 2;
  }

  func(); // 2  Cannot access 'x' before initialization
}

// “什么是闭包？”，正确的回答应该是闭包的定义，并解释清楚为什么 JavaScript 中的所有函数都是闭包的，以及可能的关于 [[Environment]] 属性和词法环境原理的技术细节。
