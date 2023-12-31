// 创建一个装饰器 delay(f, ms)，该装饰器将 f 的每次调用延时 ms 毫秒
// f 是单个参数的函数，但解决方案应该传递所有参数和上下文 this
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function f(x) {
  console.log(x);
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test"); // 在 1500ms 后显示 "test"
