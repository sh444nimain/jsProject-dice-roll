const tombolRoll = document.getElementById("roll-dice");
const diceElemen = document.getElementById("dice");
let historyDice = [];

tombolRoll.addEventListener("click", () => {
  diceElemen.classList.add("roll-animation");
  setTimeout(() => {
    diceElemen.classList.remove("roll-animation");
  });
});
