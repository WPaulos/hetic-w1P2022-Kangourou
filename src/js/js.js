function deleteBaby(row, column) {
  gridAv[(row, column)] = 0;
  gridAp[(row, column)] = 0;
}

function wonBaby() {
  console.log("YOU WON A BABY KANGOO CONGRATS");
}

function wonBaby() {
  let div = document.getElementById("score");
  let baby = document.createElement("div");
  baby.classList.add("baby");
  div.appendChild(baby);
}
