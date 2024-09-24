import { showBoard } from "./showBoard.js";
import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { Board } from "./Gameboard.js";
import { validateBoard } from "./validate.js";
const container = document.querySelector(".container");

export function startGame() {
  //initialize the 2 players and their boards
  let playerBoard = new Board(7, "playerBoard");
  let computerBoard = new Board(7, "computerBoard");
  let player1 = new Player(playerBoard);
  let player2 = new Player(computerBoard);

  //set the active player to player 1
  let activePlayer = "player";

  //clear the container html and display both boards
  container.innerHTML = "";

  playerBoard.placeShip();
  computerBoard.placeShip();

  showBoard(player1.board);
  showBoard(player2.board);

  validateBoard(player1.board.board);

  console.log(player1.board, player2.board);
  let cells = document.querySelectorAll(".cell");

  const playerBoardId = document.getElementById("playerBoard");
  const computerBoardId = document.getElementById("computerBoard");

  cells.forEach((cell) => {
    cell.addEventListener("click", function () {
      let id = this.id;
      let row = Math.floor(id / 7);
      let col = id % 7;

      handleTurn(row, col, this);
    });
  });

  function handleTurn(row, col, cell) {
    if (activePlayer === "player") {
      processPlayerMove(row, col, cell);
    } else {
      processComputerMove(row, col, cell);
    }
    updateBoardState();
  }

  function processPlayerMove(row, col, cell) {
    if (player2.board.board[row][col] === null) {
      markMiss(cell, "player", row, col);
    } else if (player2.board.board[row][col] instanceof Ship) {
      markHit(cell, "player", row, col);
    }
    activePlayer = "computer";
  }

  function processComputerMove(row, col, cell) {
    if (player1.board.board[row][col] === null) {
      markMiss(cell, "computer", row, col);
    } else if (player1.board.board[row][col] instanceof Ship) {
      markHit(cell, "computer", row, col);
    }
    activePlayer = "player";
  }

  function markMiss(cell, player, row, col) {
    const boardElement = player === "player" ? player1.board : player2.board;
    boardElement.board[row][col] = "miss";
    cell.style.backgroundColor = "red";
  }

  function markHit(cell, player, row, col) {
    const boardElement = player === "player" ? player2.board : player1.board;
    const ship = boardElement.board[row][col];
    ship.hit();
    ship.isSunk();
    cell.style.backgroundColor = "green";
  }

  function updateBoardState() {
    if (activePlayer === "player") {
      computerBoardId.style.pointerEvents = "none";
      playerBoardId.style.pointerEvents = "all";
    } else {
      playerBoardId.style.pointerEvents = "none";
      computerBoardId.style.pointerEvents = "all";
    }
  }
}
