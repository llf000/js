let options = {
  title: "Menu",
  items: ["cake", "dount"],
};

function showMenu({
  title = "Untitled",
  width: w = 200,
  height: h = 100,
  items: [item1, item2],
}) {
  console.log(`${title} ${w} ${h}`);
  console.log(item1, item2);
}

showMenu(options);
