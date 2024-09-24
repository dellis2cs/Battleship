import { Ship } from "./ship.js";

export function validateBoard(board) {
  const dimensions = board.length; // Assuming square board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] instanceof Ship) {
        // Calculate the cell ID
        const id = i * dimensions + j;

        // Get the corresponding cell by its ID
        let cell = document.getElementById(id);

        // Ensure the cell exists before trying to set its color
        if (cell) {
          cell.style.backgroundColor = "blue";
        } else {
          console.log(`No cell found for ID: ${id}`);
        }
      }
    }
  }
}
