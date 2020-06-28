/* eslint-disable prefer-const */
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
  const theTertrominoes = [
    lTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
    zTetromino,
  ];

  let currentPosition = 4;
  let currentRotation = 0;

  let random = Math.floor(Math.random() * theTertrominoes.length);
  let current = theTertrominoes[random][currentRotation];

  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add("tetromino");
    });
  }
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove("tetromino");
    });
  }
  draw();

  setTimeout(() => undraw(), 3000);
  setTimeout(() => draw(), 4000);
  setTimeout(() => undraw(), 7000);
});
