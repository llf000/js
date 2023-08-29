// JSON.stringify
// let json = JSON.stringify(value[, replacer, space])
// value 要编码的值
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);
// replacer 要编码的属性数组或映射函数 function(key, value)
let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);
// space 用于格式化的空格数量 仅用于日志记录和美化输出
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2));

// toJSON
let room2 = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let meetup2 = {
  title: "Conference",
  room2,
};

console.log(JSON.stringify(room2));
console.log(JSON.stringify(meetup2));

// JSON.parse
// let value = JSON.parse(str, [reviver]);
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let users = JSON.parse(userData);

console.log(users.friends[1]);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup3 = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(meetup3.date.getDate());
