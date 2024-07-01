/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuse = excuseGenerator();
  console.log(excuse);
  document.querySelector("#excuse").innerHTML = excuse;
};

function excuseGenerator() {
  let who = ["The dog ", "My grandma ", "The mailman ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "my phone ", "the car "];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let sentencias = [who, action, what, when];
  let random = "";
  let frase = "";

  for (let i = 0; i < sentencias.length; i++) {
    for (let j = 0; j < 1; j++) {
      random = Math.floor(Math.random() * sentencias[i].length);
      frase += sentencias[i][random];
    }
  }
  return frase;
}
