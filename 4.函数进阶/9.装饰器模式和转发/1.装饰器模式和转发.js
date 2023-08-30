// 透明缓存
{
  function slow(x) {
    console.log(`Called with ${x}`);
    return x;
  }
  //  装饰器（decorator）：一个特殊的函数，它接受另一个函数并改变它的行为，不适用于对象方法
  function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      let result = func(x);

      cache.set(x, result);
      return result;
    };
  }

  slow = cachingDecorator(slow);

  console.log(slow(1));
  console.log("Again: " + slow(1));

  console.log(slow(2));
}

// func.call 设定上下文
// func.call(context, arg1, arg2, ...)
{
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      console.log("called with" + x);
      return x * this.someMethod();
    },
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
      if (cache.has(x)) {
        return cache.get(x);
      }

      //   let result = func(x);
      let result = func.call(this, x);
      cache.set(x, result);
      return result;
    };
  }

  console.log(worker.slow(1));

  worker.slow = cachingDecorator(worker.slow);

  console.log(worker.slow(2));
  console.log(worker.slow(2));
}

// 传递多个参数
{
  let worker = {
    slow(min, max) {
      console.log(`Called with ${min},${max}`);
      return min + max;
    },
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments); // (**)

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + "," + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  console.log(worker.slow(3, 5)); // works
  console.log("Again " + worker.slow(3, 5));
}

// func.apply
// ffunx.apply(context,args) 只接受类数组args

// 方法借用
{
  function hash() {
    console.log([].join.call(arguments));
  }

  hash(1, 2);
}
