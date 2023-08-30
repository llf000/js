{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "111") ok();
    else fail();
  }

  let user = {
    name: "shuangwaiwai",

    loginOk() {
      alert(`${this.name} logged in`);
    },

    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  };

  // askPassword(user.loginOk, user.loginFail); // 需要修改
  //  ask 获得的是没有绑定对象的 loginOk/loginFail 函数
  // 当 ask 调用这两个函数时，它们自然会认定 this=undefined
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
}

// 向askPassword传入参数，使得user.login(true)结果是ok，user.login(fasle) 结果是fail
{
  function askPassword(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "222") ok();
    else fail();
  }

  let user = {
    name: "wahaha",

    login(result) {
      alert(this.name + (result ? " logged in" : " failed to log in"));
    },
  };

  //   askPassword(?, ?);
  //   askPassword(
  //     () => user.login(true),
  //     () => user.login(false)
  //   );
  askPassword(user.login.bind(user, true), user.login.bind(user, false));
}
