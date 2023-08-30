// 丢失 this
"use strict";
{
  let user = {
    firstName: "John",
    sayHi() {
      console.log("hello," + this.firstName);
    },
  };

  setTimeout(user.sayHi, 500); // hello,undefined
}

// 解决：包装器
{
  let user = {
    firstName: "John",
    sayHi() {
      console.log("hello," + this.firstName);
    },
  };

  setTimeout(function () {
    user.sayHi();
  }, 500);
}
// 有小问题
{
  let user = {
    firstName: "John",
    sayHi() {
      console.log("hello," + this.firstName);
    },
  };

  setTimeout(() => user.sayHi(), 1000);

  // user在不到1秒的时间内改变
  user = {
    sayHi() {
      console.log("改变了");
    },
  };
}

// 另一方案 bind
// let boundFunc=func.bind(context)
{
  let user = {
    firstName: "John",
    sayHi() {
      console.log("hello," + this.firstName);
    },
  };

  let sayHi = user.sayHi.bind(user); // (*)

  sayHi();
  setTimeout(sayHi, 1000);

  user = {
    sayHi() {
      console.log("改变了");
    },
  };
}

// 部分函数 Partial functions
// let bound = func.bind(context, [arg1], [arg2], ...);
{
  function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  let triple = mul.bind(null, 3);

  console.log(mul(2, 3));
  console.log(double(3));
  console.log(triple(3));
}

// 没有上下文情况下的 partial
{
  function partial(func, ...argsBound) {
    return function (...args) {
      return func.call(this, ...argsBound, ...args);
    };
  }

  let user = {
    firstName: "John",
    say(time, phrase) {
      console.log(time + " " + this.firstName + ":" + phrase);
    },
  };

  user.sayNow = partial(
    user.say,
    new Date().getHours() + ":" + new Date().getMinutes()
  );

  user.sayNow("hello");
}

{
  function f() {
    console.log("108行" + this); // ? null  绑定函数的上下文是硬绑定（hard-fixed）的。没有办法再修改它
  }

  let user = {
    g: f.bind(null),
  };

  user.g();
}

{
  function f() {
    console.log("121  " + this.name); // John  一个函数不能被重绑定
  }

  f = f.bind({ name: "John" }).bind({ name: "Ann" });

  f();
}

{
  function sayHi() {
    console.log("131  " + this.name);
  }
  sayHi.test = 5;

  let bound = sayHi.bind({
    name: "John",
  });

  console.log("139  " + bound.test);
  // 输出将会是什么？为什么？
  // undefined  bind 的结果是另一个对象。它并没有 test 属性
}
