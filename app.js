/* eslint-disable no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable quotes */
let count = 0;
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const squares = Array.from(document.querySelectorAll(".grid div"));
  const scoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");
  // squares.map((item) => (item.innerText = count++));
  const width = 10;
  let nextRandom = 0;


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
    [0, width, width + 1, width * 2],
  ];
  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];
  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
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

  let timerId = setInterval(moveDown, 400);

  function control(e) {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }
  document.addEventListener('keyup', control);


  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  function freeze() {
    if (
      current.some((index) => squares[currentPosition + index + width].classList.contains("taken"))
    ) {
      current.forEach((index) => squares[currentPosition + index].classList.add("taken"));
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * theTertrominoes.length);
      current = theTertrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
      displayShape();
    }
  }

  function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some((index) => (currentPosition + index) % width === 0);

    if (!isAtLeftEdge) currentPosition -= 1;

    if (current.some((index) => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1;
    }

    draw();
  }
  function moveRight() {
    undraw();
    const isAtRightEdge = current.some((index) => (currentPosition + index) % width === 9);

    if (!isAtRightEdge) currentPosition += 1;

    if (current.some((index) => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1;
    }

    draw();
  }
  function rotate() {
    undraw();
    if (currentRotation === 3) {
      currentRotation = 0;
    } else if (currentRotation <= 2) {
      currentRotation += 1;
    }
    current = theTertrominoes[random][currentRotation];
    draw();
  }

  const displaySquares = document.querySelectorAll('.mini-grid div');
  const displayWidth = 4;
  let displayIndex = 0;

  const upNextTetromino = [
    [1, 2, displayWidth + 1, displayWidth * 2 + 1],
    [0, 1, 2, displayWidth + 1],
    [0, 1, displayWidth, displayWidth + 1],
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1],
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
  ];

  function displayShape() {
    displaySquares.forEach((square) => {
      square.classList.remove('tetromino');
    });
    upNextTetromino[nextRandom].forEach((index) => {
      displaySquares[displayIndex + index].classList.add('tetromino');
    });
  }
});
