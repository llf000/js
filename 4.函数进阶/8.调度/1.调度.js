// setTimeout
{
  function sayHi(who) {
    console.log("hello," + who);
  }

  setTimeout(sayHi, 1000, "wahaha");
}

// clearTimeoout
{
  let timerId = setTimeout(() => {
    console.log("你好");
  }, 1000);

  console.log(timerId);

  clearTimeout(timerId);

  console.log(timerId);
}

// setInterval
{
  let timerId = setInterval(() => {
    console.log("tick");
  }, 2000);

  setTimeout(() => {
    clearInterval(timerId);
    console.log("stop");
  }, 5000);
}

// 嵌套的setTimeout
{
  let timerId = setTimeout(function tick() {
    console.log("嵌套tick");

    timerId = setTimeout(tick, 500);
  }, 2000);

  setTimeout(() => {
    console.log("解除");
    clearTimeout(timerId);
  }, 5000);
}

// 零延时的setTimeout
{
  setTimeout(() => {
    console.log("world");
  });
  console.log("hello");
}
// 在浏览器中零延时实际不为0
{
  let start = Date.now();
  let times = [];

  setTimeout(function run() {
    times.push(Date.now() - start); // 保存前一个调用的延时

    if (start + 100 < Date.now())
      console.log(times); // 100 毫秒之后，显示延时信息
    else setTimeout(run); // 否则重新调度
  });
}
