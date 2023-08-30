// 没有 this 不能 new
{
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach((student) =>
        console.log(this.title + ": " + student)
      );
    },
  };

  group.showList();
}

// 没有 “arguments”
{
  function defer(f, ms) {
    return function () {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }

  function sayHi(who) {
    console.log("Hello, " + who);
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("John");
}
{
  function defer(f, ms) {
    return function (...args) {
      let ctx = this;
      setTimeout(function () {
        return f.apply(ctx, args);
      }, ms);
    };
  }

  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("wahaha");
}
