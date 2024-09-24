export function showBoard(board) {
  //Extract the overall container from the html
  const container = document.querySelector(".container");
  const secondContainer = document.createElement("div");
  secondContainer.className = "secondContainer";
  //this is to make the column labels vertical using flex
  const outerContainer = document.createElement("div");

  //give the outer container the class name for styling
  outerContainer.className = "boardOuterContainer";

  //create the board container, clear its contents, and give it the correct class name
  let boardContainer = document.createElement("div");
  boardContainer.innerHTML = "";
  boardContainer.className = "boardContainer";
  boardContainer.id = board.id;

  //apply the width, height, and grid properties
  boardContainer.style.width = "400px";
  boardContainer.height = "400px";
  boardContainer.style.display = "grid";
  boardContainer.style.gridTemplateColumns = `repeat(${board.dimensions}, 1fr)`;
  boardContainer.style.gridTemplateRows = `repeat(${board.dimensions}, 1fr)`;

  //use the board size to compute each cell size
  const boardContainerSize = 400;
  const cellSize = boardContainerSize / board.dimensions;

  //create the two label div's and give them their class names
  let rowLabels = document.createElement("div");
  let colLabels = document.createElement("div");
  rowLabels.className = "rowLabels";
  colLabels.className = "colLabels";

  //create the labels dynamically using a for loop
  for (let i = 0; i < board.dimensions; i++) {
    let rlabel = document.createElement("p");
    let clabel = document.createElement("p");

    rlabel.innerText = String.fromCharCode(65 + i);
    clabel.innerText = i + 1;

    rowLabels.appendChild(rlabel);
    colLabels.appendChild(clabel);
  }
  secondContainer.appendChild(rowLabels);
  outerContainer.appendChild(colLabels);
  for (let i = 0; i < board.dimensions * board.dimensions; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = i;
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    boardContainer.appendChild(cell);
  }
  outerContainer.appendChild(boardContainer);
  secondContainer.appendChild(outerContainer);
  container.appendChild(secondContainer);
}
