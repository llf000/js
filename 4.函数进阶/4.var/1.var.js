// var没有块级作用域
"use strict";
{
  let user = "John";
  if (true) {
    var sayHi = function () {
      console.log(`Hello,${user}`);
    };
  }

  sayHi(); // Hello,John
}

// var允许重复声明
{
  var a = 2;
  var a = 1;

  console.log(a);
}

// var声明的变量可以在声明语句前被使用
{
  function sayHi() {
    user = "wahaha";
    console.log("hello," + user);

    if (true) {
      var user;
    }
  }
  sayHi(); // hello,wahaha
}
// 声明会被提升 但赋值不会
{
  function func() {
    console.log(x);

    var x = 100;
  }

  func(); // undefined
}

//  IIFE 模仿块级作用域
{
  (function () {
    console.log("Parentheses around the function");
  })();

  (function () {
    console.log("Parentheses around the whole thing");
  })();

  !(function () {
    console.log("Bitwise NOT operator starts the expression");
  })();

  +(function () {
    console.log("Unary plus starts the expression");
  })();
}
