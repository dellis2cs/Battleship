import { Ship } from "./ship.js";
import { Board } from "./Gameboard.js";

let ship = new Ship(2);
let gameBoard = new Board(7);

it("hit", () => {
  ship.hit();
  ship.hit();
  ship.isSunk();
  expect(ship.sunk).toBe(true);
});

it("board", () => {
  gameBoard.initializeBoard();
  expect(gameBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
});
