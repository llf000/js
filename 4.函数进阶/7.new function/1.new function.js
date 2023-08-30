// new function
// let func = new Function([arg1,arg2...],functionBody)
"use strict";
{
  let sum = new Function("a", "b", "return a+b");

  console.log(sum(2, 3));
}
{
  let sayHi = new Function('console.log("hello")');
  sayHi();
}

// 没有闭包特性，无法访问外部变量，只能访问全局变量
{
  function getFunc() {
    let value = "test";

    let func = new Function("console.log(value)");

    return func;
  }
  getFunc()(); // undefined
}
{
  function getFunc() {
    let value = "test";

    let func = function () {
      console.log(value);
    };

    return func;
  }
  getFunc()();
}
