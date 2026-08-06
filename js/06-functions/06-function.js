function ValidateQuestion(ask, yes, no) {
  if (ask === "yes") yes();
  else no();
}

function ask() {
  let answ = prompt("Bienvenido");

  return answ;
}

function y() {
  console.log("bienvenido");
}
function n() {
  console.log("No puede entrar");
}

ValidateQuestion(ask(), y, n);
