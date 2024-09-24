import { showBoard } from "./js/showBoard.js";
import { Board } from "./js/Gameboard.js";
import { Ship } from "./js/ship.js";
import { startGame } from "./js/gameController.js";

let initializeBtn = document.querySelector(".init");

initializeBtn.addEventListener("click", function () {
  startGame();
});
