const wrap = document.querySelector(".wrap");
const cube = document.querySelector(".cube");
const up = document.querySelector(".up");
const down = document.querySelector(".down");

const divs = document.querySelectorAll(".cube div");

let cubeWidth = window.innerWidth / 4;
let cubeHeight = window.innerHeight / 2;
let translateY = 10;
let translateZ = cubeWidth / 2;
let translateX = -cubeWidth / 1.5;

const backgrounds = ["lightcoral", "red", "blue", "green", "grey", "black"];

cube.style.width = `${cubeWidth}px`;
cube.style.height = `${cubeHeight}px`;

divs.forEach((div, index) => {
  let initStyle = `rotateY(30deg) translateY(${translateY}px) translateZ(${translateZ *
    (index + 1)}px)`;
  div.style.width = `${cubeWidth}px`;
  div.style.height = `${cubeHeight}px`;
  div.style.transform = initStyle;

  div.style.backgroundColor =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  div.addEventListener("mouseover", () => {
    if (index === divs.length - 1) return;
    div.style.transform = initStyle + `translateX(${translateX}px)`;
  });
  div.addEventListener("mouseleave", () => {
    div.style.transform = initStyle;
  });
});

up.addEventListener("click", () => {});
down.addEventListener("click", () => {});

// rotateY(30deg) translateY(var(--translateY))
//     translateZ(calc(var(--translateZ) * 1));
