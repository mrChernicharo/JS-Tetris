/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable quotes */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  const squares = Array.from(document.querySelectorAll(".grid div"));

  const width = 10;

  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");

  // tetromino definitions
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
  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const iTetromino = [
    [width, width + 1, width + 2, width + 3],
    [2, width + 2, width * 2 + 2, width * 3 + 2],
    [width * 2, width * 2 + 1, width * 2 + 2, width * 2 + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
  ];
  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [1, 2, width, width + 1],
    [0, width, width + 1, width * 2 + 1],
    [1, 2, width, width + 1],
  ];

  // tetrominoes array
  const tertrominoes = [
    lTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
    zTetromino,
  ];

  const currentPosition = 4;

  function draw() {
    tertrominoes[3][3].forEach((index) => {
      squares[currentPosition + index].classList.add("tetromino");
    });
  }
  draw();
});
