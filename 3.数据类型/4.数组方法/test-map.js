// 映射到 names
// user 对象数组每个对象都有 user.name。将其转换为 names 数组
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names);

// 映射到对象
// 创建另一个具有 id 和 fullName 的对象数组，其中 fullName 由 name 和 surname 生成
let usersMapped = users.map((user, id) => ({
  fullname: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);
