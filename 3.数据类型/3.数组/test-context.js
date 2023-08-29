// 在数组上下文调用
// 结果是什么？为什么？
let array = ["a", "b"];

array.push(function () {
  console.log(this);
});
array[2](); // a,b,function(){...}
