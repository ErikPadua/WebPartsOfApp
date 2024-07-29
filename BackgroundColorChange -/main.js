function changeColor() {
  const cores = [
    "red",
    "purple",
    "yellow",
    "green",
    "gray",
    "blue",
    "pink",
    "brown",
    "orange",
    "wheat",
  ];
  document.body.style.backgroundColor =
    cores[Math.round(Math.random() * cores.length)];
}
