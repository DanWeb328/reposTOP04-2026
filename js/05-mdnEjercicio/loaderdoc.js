// document.addEventListener("DOMContentLoaded", function () {
//   function createParagraph() {
//     let para = document.createElement("p");
//     para.textContent = "You clicked the button!";
//     document.body.appendChild(para);
//   }

//   const buttons = document.querySelectorAll("button");

//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", createParagraph);
//   }
// });

let bdstr = String.length;
console.log(bdstr);

let n = 2;

// function LowerTwoTwo() {
//   console.log("Its lower Than 22");
// }
// function HigherTwoTwo() {
//   console.log("Its Higher Than 22");
// }
// n < 22 ? LowerTwoTwo() : HigherTwoTwo();

let names = "jhon";

function changeName() {
  names = "dan";

  let messages = "Hola" + " " + names;
  alert(messages);
}

alert(names);
changeName();
alert(names);

function shMes(co) {
  console.log(co ?? "unknow");
}
// shMes()

let CurrentUserAge = 18;

function currentUserAgeChecker(userAge) {
  if (userAge >= 18) {
    return;
  }
  messageValidateAgeUser();
  console.log("A ver la pelicula culero");
}

function messageValidateAgeUser() {}

currentUserAgeChecker(CurrentUserAge);
