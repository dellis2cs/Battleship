import { Ship } from "./ship.js";

export class Board {
  constructor(dimensions, id) {
    this.dimensions = dimensions;
    this.board = [];
    this.initializeBoard();
    this.id = id;
  }

  initializeBoard() {
    for (let i = 0; i < this.dimensions; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.dimensions; j++) {
        this.board[i][j] = null;
      }
    }
  }
  //null means nothing is there
  //miss means that spot was missed
  //1 means there is a ship there
  //hit means that the attack was a hit
  recieveAttack(x, y) {
    if (this.board[x][y] instanceof Ship) {
      this.board[x][y] = "hit";
    }
    if (this.board[x][y] === null) {
      this.board[x][y] = "miss";
    }
  }

  placeShip() {
    const ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];

    ships.forEach((ship) => {
      let placed = false;
      while (!placed) {
        let isHorizontal = Math.random() > 0.5;
        const x = Math.floor(Math.random() * this.dimensions);
        const y = Math.floor(Math.random() * this.dimensions);

        // Here you need to check if the ship can be placed and actually place it
        if (this.canPlaceShip(x, y, ship.length, isHorizontal)) {
          this.placeShipOnBoard(x, y, ship, isHorizontal);
          placed = true; // Successfully placed, break the loop
        }
      }
    });
  }

  canPlaceShip(x, y, length, isHorizontal) {
    if (isHorizontal) {
      if (y + length > this.dimensions) return false;
      for (let i = 0; i < length; i++) {
        if (this.board[x][y + i] !== null) return false;
      }
    } else {
      if (x + length > this.dimensions) return false;
      for (let i = 0; i < length; i++) {
        if (this.board[x + i][y] !== null) return false;
      }
    }
    return true;
  }

  placeShipOnBoard(x, y, ship, isHorizontal) {
    if (isHorizontal) {
      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
      }
    }
  }
}
