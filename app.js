/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable quotes */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  const squares = Array.from(document.querySelectorAll(".grid div"));

  const width = 10;

  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");

  const lTetromino = [
    [1, 2, width + 1, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2, width * 2 + 1],
    [0, width, width + 1, width + 2],
  ];

  const tTetromino = [
    [0, 1, 2, width + 1],
    [1, width, width + 1, width * 2 + 1],
    [1, width, width + 1, width + 2],
    [1, width, width + 1, width + 2],
  ];

  const tertrominoes = [lTetromino, tTetromino];

  function draw() {
    tTetromino[3].forEach((index) => {
      squares[index].classList.add("tetromino");
    });
  }
  draw();
  console.log(grid);
  console.log(squares);
  console.log(lTetromino);
});
