/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable quotes */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");

  const squares = Array.from(document.querySelectorAll(".grid div"));

  const width = 10;

  let count = 0;

  console.log(squares.map((div) => (div.innerText = count++)));
  console.log(grid);
});
