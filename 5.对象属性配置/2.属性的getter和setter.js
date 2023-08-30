// getter,setter=>访问器属性的表示方法
{
  let user = {
    name: "Wa",
    surName: "Haha",
    age: 22,

    get fullName() {
      return this.name + " " + this.surName;
    },

    set fullName(value) {
      [this.name, this.surName] = value.split(" ");
    },
  };

  user.fullName = "Shuang Waiwai";
  console.log(user.name);
  console.log(user.surName);
}

// 访问器描述符
// get 一个没有参数的函数，在读取属性时工作
// set 带有一个参数的函数，当属性被设置时调用
// enumerable
// configurable
{
  let user = {
    name: "John",
    surname: "Smith",
  };

  Object.defineProperty(user, "fullName", {
    get() {
      return `${this.name} ${this.surname}`;
    },

    set(value) {
      [this.name, this.surname] = value.split(" ");
    },
  });

  console.log(user.fullName); // John Smith

  for (let key in user) console.log(key);
}

// 更聪明的 getter/setter
{
  let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    },
  };

  user.name = "shuangwaiwai";
  console.log(user.name);

  user.name = "";
}

// 兼容性
{
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // 年龄是根据当前日期和生日计算得出的
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      },
    });
  }

  let john = new User("Wahaha", new Date(2000, 1, 1));

  console.log(john.birthday); // birthday 是可访问的
  console.log(john.age);
}
