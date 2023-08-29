// 将对象转换为 JSON，然后再转换回来
let user = {
  name: "John Smith",
  age: 35,
};

let json = JSON.stringify(user);

console.log(json);

let user2 = JSON.parse(json);

console.log(user2);
