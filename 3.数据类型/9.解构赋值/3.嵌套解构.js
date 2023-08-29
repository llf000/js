let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["cake", "donut"],
  extra: true,
};

let {
  size: { width, height },
  items: [item1, item2],
  title = "Menu",
} = options;

// console.log(size, items); // error size和items没有对应的变量，因为取的是它们的内容
console.log(title, width, item1);
