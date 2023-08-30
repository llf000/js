// 属性标志
// writable 为 true，则值可以被修改，否则只可读
// enumerable 为 true，则会被在循环中列出，否则不会被列出。
// configurable 为 true，则此属性可以被删除，这些特性也可以被修改，否则不可以

// 读取标志 let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
{
  let user = {
    name: "wahaha",
  };

  let descriptor = Object.getOwnPropertyDescriptor(user, "name");

  console.log(JSON.stringify(descriptor, null, 2));
}

// 修改标志 Object.defineProperty(obj, propertyName,descriptor)
{
  let user = {
    name: "wahaha",
  };

  Object.defineProperty(user, "name", {
    value: "shuangwaiwai",
  });

  let descriptor = Object.getOwnPropertyDescriptor(user, "name");

  console.log(JSON.stringify(descriptor, null, 2));
}

// 读取/修改多个
{
  let user = {
    name: "wahaha",
  };

  Object.defineProperties(user, {
    name: {
      value: "shuangwaiwai",
      writable: false,
      enumerable: false,
      configurable: false,
    },
    age: {
      value: 22,
    },
  });

  let descriptor = Object.getOwnPropertyDescriptors(user);

  console.log(JSON.stringify(descriptor, null, 2));
}
