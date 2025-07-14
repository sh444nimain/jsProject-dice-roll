const tombolRoll = document.getElementById("roll-dice");
const diceElemen = document.getElementById("dice");
const historiDadu = document.getElementById("roll-history");
let historyDice = [];

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceResult = getDiceFace(rollResult);
  diceElemen.innerHTML = diceResult;
  historyDice.push(rollResult);
  getHistory();
}

function getHistory() {
  historiDadu.innerHTML = `
  <li class="font-bold">Roll History</li>
  `;
  for (let i = 0; i < historyDice.length; i++) {
    const listItem = `
    <li class="flex justify-between w-[50%] rounded-lg bg-gray-700 my-2 p-2">
    Roll ${i + 1}: <span class="text-3xl -my-2">${getDiceFace(
      historyDice[i]
    )}</span> </li>
    `;
    historiDadu.innerHTML += listItem;
  }
}

function getDiceFace(result) {
  switch (result) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
}

tombolRoll.addEventListener("click", () => {
  diceElemen.classList.add("roll-animation");
  setTimeout(() => {
    diceElemen.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
