const imagens = [
  "https://images.unsplash.com/photo-1601398200192-4b83a1b5eaa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MTkyMHgxMDgwfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1686685571688-e2a2d9035811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTkyMHgxMDgwfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1564091422888-15640d9709a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1680202264312-8e83fa919655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1680202264255-1a8102a6f97d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
];

let imageElement = document.getElementById("image");
let buttonElement = document.getElementById("button");
let currentIndex = 0;

buttonElement.addEventListener("click", function () {
  currentIndex++;
  imageElement.src = imagens[currentIndex];
  if (currentIndex == 4) currentIndex = 0;
});
