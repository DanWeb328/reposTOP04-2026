// let inputs = document.getElementById("ins");
// let button = document.getElementById("bu");
// let p = document.getElementById("p");

// function createMam() {
//   let mam = "hi mam";
//   return mam;
// }
// let m = "mmmm";
// button.addEventListener("click", () => {
//   p.textContent = "";
//   p.textContent = inputs.value;

//   m = "has been modify from eventListener";
//   console.log(m);
// });

// function checkAge(age) {
//   if (age >= 18) {
//     return console.log(true);
//   } else {
//     return;
//     return confirm("do you have permision of your parents?");
//   }
// }
// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }
// }

// showMovie(17);
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
const WIDTH = 550;

const HEIGHT = 350;

canvas.width = WIDTH;

canvas.height = HEIGHT;

function random(max) {
  return Math.random() * max;
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
draw();
