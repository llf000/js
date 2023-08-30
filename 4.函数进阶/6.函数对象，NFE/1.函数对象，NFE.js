// 属性 name
{
  function sayHi() {
    console.log(sayHi.name);
  }

  sayHi();
}
{
  let sayHi = function () {
    console.log(sayHi.name);
  };

  sayHi();
}
{
  function f(sayHi = function () {}) {
    console.log(sayHi.name);
  }

  f();
}

// 属性length
{
  function f1(a) {}
  function f2(a, b) {}
  function f3(a, b, ...rest) {}

  console.log(f1.length);
  console.log(f2.length);
  console.log(f3.length);
}

// 自定义属性
{
  function sayHi() {
    console.log("hi!");

    sayHi.counter++;
  }
  sayHi.counter = 0;

  sayHi();
  sayHi();

  console.log(sayHi.counter);
}

// 命名函数表达式
{
  let sayHi = function func(who) {
    if (who) {
      console.log(`Hello,${who}`);
    } else {
      func("Greet");
    }
  };

  sayHi("wahaha");
  sayHi();
  // 添加func
  // 允许函数在内部引用自己
  // 在函数外不可见
}
